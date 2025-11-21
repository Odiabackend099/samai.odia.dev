import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/Overview";
import { RecentCalls } from "@/components/dashboard/RecentCalls";
import { mockStats } from "@/lib/mock-data";
import { Phone, Clock, CreditCard, Calendar } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Last updated: Just now</span>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-200">
                            Total Calls
                        </CardTitle>
                        <Phone className="h-4 w-4 text-odi-cyan" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{mockStats.totalCalls}</div>
                        <p className="text-xs text-gray-400">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-200">
                            Minutes Used
                        </CardTitle>
                        <Clock className="h-4 w-4 text-odi-purple" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{mockStats.totalMinutes}</div>
                        <p className="text-xs text-gray-400">
                            +15% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-200">
                            Total Cost
                        </CardTitle>
                        <CreditCard className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{mockStats.totalCost}</div>
                        <p className="text-xs text-gray-400">
                            +12% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-200">
                            Booking Rate
                        </CardTitle>
                        <Calendar className="h-4 w-4 text-orange-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">{mockStats.bookingRate}</div>
                        <p className="text-xs text-gray-400">
                            +2.4% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Overview />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Calls</CardTitle>
                        <p className="text-sm text-gray-400">
                            You made 265 calls this month.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <RecentCalls />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
