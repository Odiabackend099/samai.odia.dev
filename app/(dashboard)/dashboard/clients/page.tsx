'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Mail, Phone } from "lucide-react";

const mockClients = [
    { id: 1, name: "Chioma Adebayo", email: "chioma@example.com", phone: "+234 803 555 0123", status: "Active", lastContact: "2 hours ago" },
    { id: 2, name: "Emeka Okafor", email: "emeka@example.com", phone: "+234 706 222 9876", status: "Lead", lastContact: "1 day ago" },
    { id: 3, name: "Tunde Bakare", email: "tunde@example.com", phone: "+234 812 999 4567", status: "Inactive", lastContact: "1 week ago" },
    { id: 4, name: "Ngozi Eze", email: "ngozi@example.com", phone: "+234 909 111 2233", status: "Active", lastContact: "3 days ago" },
    { id: 5, name: "Ibrahim Musa", email: "ibrahim@example.com", phone: "+234 805 777 8899", status: "Lead", lastContact: "5 hours ago" },
];

export default function ClientsPage() {
    return (
        <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">Clients</h2>
                <Button>Add Client</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Client List</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Contact</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockClients.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell className="font-medium text-white">{client.name}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col space-y-1 text-sm text-gray-400">
                                            <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> {client.email}</span>
                                            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> {client.phone}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${client.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                                                client.status === 'Lead' ? 'bg-blue-500/10 text-blue-400' :
                                                    'bg-gray-500/10 text-gray-400'
                                            }`}>
                                            {client.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-gray-300">{client.lastContact}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
