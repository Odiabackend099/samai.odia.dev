'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { chartData } from '@/lib/mock-data';

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    contentStyle={{ backgroundColor: '#0A0F14', border: '1px solid rgba(255,255,255,0.1)' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar
                    dataKey="calls"
                    fill="#4EE2E8"
                    radius={[4, 4, 0, 0]}
                    className="fill-odi-cyan"
                />
                <Bar
                    dataKey="bookings"
                    fill="#9370DB"
                    radius={[4, 4, 0, 0]}
                    className="fill-odi-purple"
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
