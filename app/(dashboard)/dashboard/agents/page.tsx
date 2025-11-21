'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Mic, Settings, Power } from "lucide-react";

export default function AgentsPage() {
    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Agents</h2>
                <Button>
                    Create New Agent
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-odi-cyan/50 bg-odi-cyan/5">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 rounded-lg bg-odi-cyan/20 flex items-center justify-center mb-4">
                                <Bot className="h-6 w-6 text-odi-cyan" />
                            </div>
                            <Badge variant="success">Active</Badge>
                        </div>
                        <CardTitle>Sam (Sales)</CardTitle>
                        <CardDescription>Primary sales and booking assistant.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Voice</span>
                            <span className="text-white">ODIADEV Voice - Natural Nigerian</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Model</span>
                            <span className="text-white">GPT-4o</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Phone</span>
                            <span className="text-white">+234 803 555 0123</span>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                            <Settings className="mr-2 h-4 w-4" /> Configure
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                            <Power className="mr-2 h-4 w-4" /> Disable
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="opacity-70">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div className="h-12 w-12 rounded-lg bg-odi-purple/20 flex items-center justify-center mb-4">
                                <Mic className="h-6 w-6 text-odi-purple" />
                            </div>
                            <Badge variant="secondary">Draft</Badge>
                        </div>
                        <CardTitle>Support Bot</CardTitle>
                        <CardDescription>Customer support and FAQ handler.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Voice</span>
                            <span className="text-white">ODIADEV Voice - Professional</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Model</span>
                            <span className="text-white">GPT-3.5 Turbo</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Phone</span>
                            <span className="text-white">Not Assigned</span>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                            <Settings className="mr-2 h-4 w-4" /> Configure
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
