'use client';

import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-odi-dark/50 backdrop-blur-sm">
            <div className="flex items-center bg-white/5 rounded-full px-4 py-2 w-96 border border-white/10">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Search calls, clients, or logs..."
                    className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-gray-500"
                />
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                </Button>
                <Link href="/">
                    <Button variant="default" className="bg-odi-cyan text-odi-dark font-bold hover:bg-odi-cyan/90">
                        Buy Sam AI
                    </Button>
                </Link>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-odi-cyan to-odi-purple flex items-center justify-center text-xs font-bold text-white">
                    OA
                </div>
            </div>
        </div>
    );
}
