'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockRecentCalls } from '@/lib/mock-data';
import { Phone, PhoneIncoming, PhoneMissed, Voicemail } from 'lucide-react';

export function RecentCalls() {
    return (
        <div className="space-y-8">
            {mockRecentCalls.map((call) => (
                <div key={call.id} className="flex items-center">
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center border border-white/10 mr-4 ${call.status === 'missed' ? 'bg-red-500/20 text-red-400' :
                            call.status === 'voicemail' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
                        }`}>
                        {call.status === 'missed' ? <PhoneMissed size={16} /> :
                            call.status === 'voicemail' ? <Voicemail size={16} /> :
                                <PhoneIncoming size={16} />}
                    </div>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none text-white">{call.caller}</p>
                        <p className="text-xs text-gray-400">{call.location}</p>
                    </div>
                    <div className="ml-auto font-medium text-white text-sm">
                        {call.duration}
                    </div>
                </div>
            ))}
        </div>
    );
}
