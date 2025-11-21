import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Mic, MicOff, PhoneOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAudioCapture } from '@/hooks/useAudioCapture';
import { useWebSocket } from '@/hooks/useWebSocket';
import { useAudioPlayback } from '@/hooks/useAudioPlayback';

export default function VoiceVisualizer() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<any[]>([]);
  const bubbleScaleRef = useRef(1);

  const [hasStarted, setHasStarted] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Audio Playback
  const { playAudioChunk } = useAudioPlayback(16000);

  // WebSocket
  const { isConnected, isReady, connect, disconnect, sendAudio } = useWebSocket({
    url: process.env.NEXT_PUBLIC_WS_URL || 'wss://vocode-agent-setup.fly.dev/ws',
    onOpen: () => console.log('Connected to Voice AI'),
    onClose: () => {
      console.log('Disconnected');
      setAiSpeaking(false);
    },
    onAudioPlayback: (audioData) => {
      setAiSpeaking(true);
      playAudioChunk(audioData);
      setTimeout(() => setAiSpeaking(false), audioData.length / 16000 * 1000);
    }
  });

  // Audio Capture
  const { isRecording, startRecording, stopRecording, volume: userVolume } = useAudioCapture((base64Data) => {
    if (isConnected && isReady) {
      sendAudio(base64Data);
    }
  });

  const handleStartSession = useCallback(() => {
    setHasStarted(true);
    startRecording();
    connect();
  }, [startRecording, connect]);

  const handleEndSession = useCallback(() => {
    stopRecording();
    disconnect();
    router.push('/');
  }, [stopRecording, disconnect, router]);

  const handleMuteToggle = useCallback(() => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // More particles for perfect dense sphere
    const particleCount = 1500;
    const baseRadius = 180;

    particlesRef.current = Array.from({ length: particleCount }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radiusVariation = (Math.random() - 0.5) * 8;

      return {
        theta,
        phi,
        radius: baseRadius + radiusVariation,
        baseRadius,
        orbitSpeed: 0.0003 + Math.random() * 0.0004,
        size: 1.2 + Math.random() * 1.3,
        opacity: 0.6 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.4 + Math.random() * 0.5,
        driftSpeed: 0.0001 + Math.random() * 0.0002,
        driftPhase: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      time += 0.016;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Voice reactivity
      let targetScale = 1;
      if (userVolume > 0.05) {
        targetScale = 1 + (userVolume * 0.6);
      } else if (aiSpeaking) {
        targetScale = 1 + Math.sin(time * 1.8) * 0.05 + Math.sin(time * 0.9) * 0.03;
      } else {
        targetScale = 1 + Math.sin(time * 0.6) * 0.02;
      }

      const diff = targetScale - bubbleScaleRef.current;
      bubbleScaleRef.current += diff * (userVolume > 0.05 ? 0.15 : 0.08);
      const currentScale = bubbleScaleRef.current;

      const particlesWithDepth = particlesRef.current.map(particle => {
        particle.theta += particle.orbitSpeed;
        particle.driftPhase += particle.driftSpeed;

        const drift = Math.sin(particle.driftPhase) * 3;
        const r = (particle.radius + drift) * currentScale;

        const x = r * Math.sin(particle.phi) * Math.cos(particle.theta);
        const y = r * Math.sin(particle.phi) * Math.sin(particle.theta);
        const z = r * Math.cos(particle.phi);

        const breathe1 = Math.sin(time * particle.pulseSpeed + particle.phase) * 0.06 + 1;
        const breathe2 = Math.sin(time * 0.5 + particle.phase * 2) * 0.04 + 1;
        const breathe = breathe1 * breathe2;

        return {
          ...particle,
          x: centerX + x,
          y: centerY + y,
          z,
          breathe,
        };
      });

      particlesWithDepth.sort((a, b) => a.z - b.z);

      particlesWithDepth.forEach(particle => {
        const depthScale = (particle.z + particle.radius * currentScale) / (particle.radius * currentScale * 2);
        const depthOpacity = 0.5 + depthScale * 0.5;

        let color = '#4EE2E8';
        if (aiSpeaking && userVolume < 0.05) {
          color = '#FFD700';
        }

        const voiceBrightness = userVolume > 0.05 ? 1.3 : 1;
        const particleOpacity = particle.opacity * depthOpacity * particle.breathe * voiceBrightness;
        const particleRadius = Math.max(0.1, particle.size * particle.breathe * depthScale * 1.2);

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particleRadius * 2.5
        );
        gradient.addColorStop(0, `${color}${Math.floor(Math.min(particleOpacity, 1) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${color}${Math.floor(Math.min(particleOpacity * 0.4, 1) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${color}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [userVolume, aiSpeaking]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-odi-dark">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl transition-all duration-700 pointer-events-none"
        style={{
          backgroundColor: userVolume > 0.05 ? '#4EE2E8' : aiSpeaking ? '#FFD700' : '#4EE2E8',
          opacity: userVolume > 0.05 ? 0.15 : aiSpeaking ? 0.1 : 0.08,
        }}
      />

      {/* Initial Start Button */}
      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-odi-dark/50 backdrop-blur-sm">
          <button
            onClick={handleStartSession}
            className="group relative px-8 py-4 bg-odi-cyan text-odi-dark font-bold text-lg rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(78,226,232,0.3)]"
          >
            <span className="flex items-center space-x-3">
              <Mic className="w-6 h-6" />
              <span>Start Conversation</span>
            </span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
          </button>
        </div>
      )}

      {/* Controls Bar */}
      {hasStarted && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-6">
          {/* Mute Button */}
          <button
            onClick={handleMuteToggle}
            className={`p-4 rounded-full transition-all duration-300 ${isRecording
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-red-500/20 hover:bg-red-500/30 text-red-400 ring-1 ring-red-500/50'
              }`}
            title={isRecording ? "Mute Microphone" : "Unmute Microphone"}
          >
            {isRecording ? <Mic size={24} /> : <MicOff size={24} />}
          </button>

          {/* End Session Button */}
          <button
            onClick={handleEndSession}
            className="px-6 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-red-500/20 flex items-center space-x-2"
          >
            <PhoneOff size={20} />
            <span>End Session</span>
          </button>
        </div>
      )}

      {/* Status Indicator */}
      <div className="absolute top-8 right-8 z-10">
        <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border backdrop-blur-md ${isConnected
            ? 'bg-green-500/10 border-green-500/20 text-green-400'
            : 'bg-red-500/10 border-red-500/20 text-red-400'
          }`}>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-xs font-medium">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
      </div>
    </div>
  );
}
