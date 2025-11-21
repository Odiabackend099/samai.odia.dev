import { useState, useEffect, useRef, useCallback } from 'react';
import { AudioUtils } from '@/utils/audio';

export function useAudioCapture(onAudioData?: (base64Data: string) => void) {
    const [isRecording, setIsRecording] = useState(false);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [volume, setVolume] = useState(0);
    const audioContextRef = useRef<AudioContext | null>(null);
    const processorRef = useRef<ScriptProcessorNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

    const startRecording = useCallback(async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                    channelCount: 1
                }
            });
            setStream(mediaStream);
            setIsRecording(true);

            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({
                sampleRate: 16000, // Request 16kHz if possible, but browser might ignore
            });
            audioContextRef.current = audioContext;

            const source = audioContext.createMediaStreamSource(mediaStream);
            sourceRef.current = source;

            // Analyser for visualizer
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            source.connect(analyser);
            analyserRef.current = analyser;

            // ScriptProcessor for raw audio capture (deprecated but widely supported for this use case)
            // Buffer size 4096 gives ~250ms latency at 16kHz, acceptable for chunks
            const processor = audioContext.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;


            processor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);

                // Calculate volume for visualizer
                let sum = 0;
                for (let i = 0; i < inputData.length; i++) {
                    sum += inputData[i] * inputData[i];
                }
                setVolume(Math.sqrt(sum / inputData.length));

                // Convert to 16kHz PCM if needed (though we requested 16kHz context)
                // If context is 48kHz, we need to downsample
                let pcmData = Float32Array.from(inputData) as Float32Array;
                if (audioContext.sampleRate !== 16000) {
                    pcmData = AudioUtils.downsampleBuffer(pcmData, audioContext.sampleRate, 16000);
                }

                // Convert to Int16 and Base64
                const int16Data = AudioUtils.floatTo16BitPCM(pcmData);
                const base64Data = AudioUtils.arrayBufferToBase64(int16Data.buffer as ArrayBuffer);

                onAudioData?.(base64Data);
            };

            source.connect(processor);
            // CRITICAL FIX: DO NOT connect processor to destination
            // This was causing feedback loop - mic audio was being output to speakers
            // The processor will still fire onaudioprocess events without this connection
            // We only need the analyser connected for visualization

        } catch (error) {
            console.error('Error accessing microphone:', error);
            setIsRecording(false);
        }
    }, [onAudioData]);

    const stopRecording = useCallback(() => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }

        if (processorRef.current) {
            processorRef.current.disconnect();
            processorRef.current = null;
        }

        if (sourceRef.current) {
            sourceRef.current.disconnect();
            sourceRef.current = null;
        }

        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }

        setIsRecording(false);
        setVolume(0);
    }, [stream]);

    useEffect(() => {
        return () => {
            stopRecording();
        };
    }, [stopRecording]);

    return { isRecording, startRecording, stopRecording, stream, volume };
}
