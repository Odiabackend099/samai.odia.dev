'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { mockBookings } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function BookingsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const selectedBookings = mockBookings.filter(booking =>
        date && booking.date.getDate() === date.getDate() &&
        booking.date.getMonth() === date.getMonth() &&
        booking.date.getFullYear() === date.getFullYear()
    );

    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Bookings</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="text-white"
                            modifiersStyles={{
                                selected: { backgroundColor: '#4EE2E8', color: '#0A0F14' }
                            }}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Appointments for {date ? format(date, 'MMMM do, yyyy') : 'Selected Date'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {selectedBookings.length > 0 ? (
                            <div className="space-y-4">
                                {selectedBookings.map((booking) => (
                                    <div key={booking.id} className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/5">
                                        <div>
                                            <p className="font-medium text-white">{booking.clientName}</p>
                                            <p className="text-sm text-gray-400">{booking.service}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-bold">{booking.amount}</p>
                                            <Badge variant={
                                                booking.status === 'confirmed' ? 'success' :
                                                    booking.status === 'pending' ? 'warning' : 'destructive'
                                            }>
                                                {booking.status}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                No bookings for this date.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
