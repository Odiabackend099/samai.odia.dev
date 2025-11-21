'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Bell, Lock, CreditCard } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Settings</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-odi-cyan" />
                            <CardTitle>Profile</CardTitle>
                        </div>
                        <CardDescription>Manage your account information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" value="Odiadev Admin" disabled className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <input type="email" value="admin@odiadev.com" disabled className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white" />
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-odi-purple" />
                            <CardTitle>Notifications</CardTitle>
                        </div>
                        <CardDescription>Configure how you receive alerts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-white">Email Notifications</span>
                            <div className="h-6 w-11 bg-odi-cyan rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-white">SMS Alerts</span>
                            <div className="h-6 w-11 bg-white/10 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-green-400" />
                            <CardTitle>Billing</CardTitle>
                        </div>
                        <CardDescription>Manage your subscription and payment methods.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-white">Pro Plan</span>
                                <span className="text-green-400 font-bold">Active</span>
                            </div>
                            <p className="text-sm text-gray-400">Next billing date: Dec 21, 2025</p>
                        </div>
                        <Button variant="outline" className="w-full">Manage Subscription</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
