'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Phone, Calendar, Users, Settings, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const routes = [
    {
        label: 'Analytics',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },
    {
        label: 'Logs',
        icon: Phone,
        href: '/dashboard/logs',
        color: 'text-violet-500',
    },
    {
        label: 'Bookings',
        icon: Calendar,
        href: '/dashboard/bookings',
        color: 'text-pink-700',
    },
    {
        label: 'Agents',
        icon: Bot,
        href: '/dashboard/agents',
        color: 'text-orange-700',
    },
    {
        label: 'Clients',
        icon: Users,
        href: '/dashboard/clients',
        color: 'text-emerald-500',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/dashboard/settings',
        color: 'text-gray-500',
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-odi-dark/50 border-r border-white/10 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt="Logo" src="/logo.png" className="object-contain" />
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-odi-cyan to-odi-purple bg-clip-text text-transparent">
                        ODIADEV AI
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                                pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400'
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-3 py-2">
                <div className="bg-gradient-to-r from-odi-cyan/10 to-odi-purple/10 rounded-xl p-4 border border-white/5">
                    <h3 className="font-semibold text-white mb-1">Sam AI Pro</h3>
                    <p className="text-xs text-gray-400 mb-3">Upgrade for more minutes.</p>
                    <button className="w-full bg-gradient-to-r from-odi-cyan to-odi-purple text-white text-sm font-bold py-2 rounded-lg hover:opacity-90 transition">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
}
