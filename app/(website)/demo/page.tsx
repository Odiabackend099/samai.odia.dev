'use client';

import VoiceVisualizer from '@/components/voice/VoiceVisualizer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DemoPage() {
    return (
        <main className="relative w-full h-screen bg-odi-dark overflow-hidden">
            {/* Back Button */}
            <div className="absolute top-8 left-8 z-50">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-odi-gray hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Visualizer */}
            <VoiceVisualizer />
        </main>
    );
}
