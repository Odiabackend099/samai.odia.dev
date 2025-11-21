import { useState, useEffect, useRef, useCallback } from 'react';
import { AudioUtils } from '@/utils/audio';

interface WebSocketConfig {
    url: string;
    onOpen?: () => void;
    onClose?: () => void;
    onMessage?: (event: MessageEvent) => void;
    onError?: (event: Event) => void;
    onAudioPlayback?: (audioData: Float32Array) => void;
}

export function useWebSocket({ url, onOpen, onClose, onMessage, onError, onAudioPlayback }: WebSocketConfig) {
    const [isConnected, setIsConnected] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const socketRef = useRef<WebSocket | null>(null);

    const connect = useCallback(() => {
        if (socketRef.current?.readyState === WebSocket.OPEN) return;

        try {
            const socket = new WebSocket(url);
            socketRef.current = socket;

            socket.onopen = () => {
                setIsConnected(true);
                onOpen?.();
            };

            socket.onclose = () => {
                setIsConnected(false);
                setIsReady(false);
                onClose?.();
            };

            socket.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);

                    switch (data.type) {
                        case 'welcome':
                            // 3. SEND start message
                            socket.send(JSON.stringify({
                                type: 'websocket_start',
                                timestamp: new Date().toISOString()
                            }));
                            break;

                        case 'websocket_ready':
                            setIsReady(true);
                            console.log('✅ Voice agent ready');
                            break;

                        case 'websocket_audio':
                            // 5. PLAY AI audio
                            if (data.audio && onAudioPlayback) {
                                const float32Audio = AudioUtils.base64ToFloat32(data.audio);
                                onAudioPlayback(float32Audio);
                            }
                            break;

                        case 'websocket_transcript':
                            console.log('User:', data.text);
                            break;
                    }
                } catch (e) {
                    // Handle non-JSON messages if any (though protocol says JSON)
                    console.warn('Received non-JSON message:', event.data);
                }
                onMessage?.(event);
            };

            socket.onerror = (event) => {
                console.error('WebSocket error:', event);
                onError?.(event);
            };
        } catch (error) {
            console.error('Error creating WebSocket:', error);
        }
    }, [url, onOpen, onClose, onMessage, onError, onAudioPlayback]);

    const disconnect = useCallback(() => {
        if (socketRef.current) {
            socketRef.current.close();
            socketRef.current = null;
            setIsConnected(false);
            setIsReady(false);
        }
    }, []);

    const sendAudio = useCallback((audioData: string) => {
        if (socketRef.current?.readyState === WebSocket.OPEN && isReady) {
            console.log('📤 Sending audio chunk:', audioData.substring(0, 20) + '...');
            socketRef.current.send(JSON.stringify({
                type: 'websocket_audio',
                audio: audioData,
                timestamp: new Date().toISOString()
            }));
        } else {
            console.warn('⚠️ Cannot send audio - WebSocket not ready', {
                readyState: socketRef.current?.readyState,
                isReady
            });
        }
    }, [isReady]);

    useEffect(() => {
        return () => {
            disconnect();
        };
    }, [disconnect]);

    return { isConnected, isReady, connect, disconnect, sendAudio };
}
