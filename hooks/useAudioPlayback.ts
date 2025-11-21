import { useRef, useCallback, useEffect } from 'react';

export function useAudioPlayback(sampleRate = 16000) {
    const audioContextRef = useRef<AudioContext | null>(null);
    const nextStartTimeRef = useRef<number>(0);

    const initAudioContext = useCallback(() => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
                sampleRate,
            });
        } else if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
    }, [sampleRate]);

    const playAudioChunk = useCallback((audioData: Float32Array) => {
        initAudioContext();
        const ctx = audioContextRef.current;
        if (!ctx) return;

        const buffer = ctx.createBuffer(1, audioData.length, sampleRate);
        buffer.getChannelData(0).set(audioData);

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);

        // Schedule playback
        // Ensure we don't schedule in the past
        const currentTime = ctx.currentTime;
        const startTime = Math.max(currentTime, nextStartTimeRef.current);

        source.start(startTime);

        // Update next start time
        nextStartTimeRef.current = startTime + buffer.duration;
    }, [initAudioContext, sampleRate]);

    return { playAudioChunk };
}
