'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockRecentCalls } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";

export default function LogsPage() {
    const [selectedTranscript, setSelectedTranscript] = useState<string | null>(null);

    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Call Logs</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Calls</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Caller</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Duration</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockRecentCalls.map((call) => (
                                    <TableRow key={call.id}>
                                        <TableCell className="font-medium text-white">
                                            <div>{call.caller}</div>
                                            <div className="text-xs text-gray-500">{call.location}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={
                                                call.status === 'completed' ? 'success' :
                                                    call.status === 'missed' ? 'destructive' : 'warning'
                                            }>
                                                {call.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-gray-300">{call.duration}</TableCell>
                                        <TableCell className="text-gray-300">{format(call.timestamp, 'MMM d, h:mm a')}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Play className="h-4 w-4 text-odi-cyan" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => setSelectedTranscript(call.transcript)}
                                                >
                                                    <FileText className="h-4 w-4 text-odi-purple" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Transcript</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {selectedTranscript ? (
                            <div className="space-y-4 text-sm text-gray-300 whitespace-pre-wrap bg-white/5 p-4 rounded-lg border border-white/10">
                                {selectedTranscript}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                Select a call to view transcript.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
