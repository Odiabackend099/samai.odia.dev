import { addDays, subDays, subHours, subMinutes } from 'date-fns';

// Types
export type CallLog = {
    id: string;
    caller: string;
    location: string;
    duration: string;
    status: 'completed' | 'missed' | 'voicemail';
    sentiment: 'positive' | 'neutral' | 'negative';
    timestamp: Date;
    transcript: string;
    recordingUrl?: string;
};

export type Booking = {
    id: string;
    clientName: string;
    service: string;
    date: Date;
    status: 'confirmed' | 'pending' | 'cancelled';
    amount: string;
};

export type AgentStats = {
    totalCalls: number;
    totalMinutes: number;
    totalCost: string;
    missedCalls: number;
    bookingRate: string;
};

// Mock Data - US/UK Context

export const mockStats: AgentStats = {
    totalCalls: 1248,
    totalMinutes: 4320,
    totalCost: '$2,450',
    missedCalls: 12,
    bookingRate: '18.5%',
};

export const mockRecentCalls: CallLog[] = [
    {
        id: 'call_1',
        caller: '+1 415-555-0123',
        location: 'San Francisco, CA',
        duration: '4m 12s',
        status: 'completed',
        sentiment: 'positive',
        timestamp: subMinutes(new Date(), 5),
        transcript: "Sam: Hello, thanks for calling ODIADEV AI. How can I help you today?\nCaller: Hi, I'd like to schedule a consultation for next Tuesday.\nSam: I can help with that. I have a slot open at 2 PM. Does that work?\nCaller: Yes, that's perfect.\nSam: Great, I've booked you for 2 PM Tuesday. Is there anything else?",
    },
    {
        id: 'call_2',
        caller: '+44 20 7946 0958',
        location: 'London, UK',
        duration: '1m 30s',
        status: 'missed',
        sentiment: 'neutral',
        timestamp: subMinutes(new Date(), 25),
        transcript: "Sam: Hello, ODIADEV AI here. I'm currently assisting other clients. Please leave a message...",
    },
    {
        id: 'call_3',
        caller: '+1 212-555-4567',
        location: 'New York, NY',
        duration: '2m 45s',
        status: 'completed',
        sentiment: 'neutral',
        timestamp: subHours(new Date(), 1),
        transcript: "Sam: Good afternoon, ODIADEV AI.\nCaller: Do you guys offer website development?\nSam: Yes, we specialize in AI-integrated web solutions. Would you like to speak with a sales rep?\nCaller: No, just checking prices.\nSam: Our packages start at $5,000. Shall I send you a brochure?",
    },
    {
        id: 'call_4',
        caller: '+1 650-555-2233',
        location: 'Palo Alto, CA',
        duration: '5m 10s',
        status: 'completed',
        sentiment: 'positive',
        timestamp: subHours(new Date(), 3),
        transcript: "Sam: Thanks for calling. This is Sam.\nCaller: I'm having trouble with my dashboard login.\nSam: I can assist with that. Let me reset your access link.\nCaller: Oh, thank you so much! You guys are fast.\nSam: You're welcome! It's sent.",
    },
    {
        id: 'call_5',
        caller: '+44 161 496 0789',
        location: 'Manchester, UK',
        duration: '0m 45s',
        status: 'voicemail',
        sentiment: 'negative',
        timestamp: subDays(new Date(), 1),
        transcript: "Caller left a voicemail: 'This is urgent, please call me back regarding the server outage.'",
    },
];

export const mockBookings: Booking[] = [
    {
        id: 'bk_1',
        clientName: 'Sarah Johnson',
        service: 'AI Consultation',
        date: addDays(new Date(), 1),
        status: 'confirmed',
        amount: '$500',
    },
    {
        id: 'bk_2',
        clientName: 'Michael Chen',
        service: 'System Integration',
        date: addDays(new Date(), 2),
        status: 'pending',
        amount: '$5,000',
    },
    {
        id: 'bk_3',
        clientName: 'David Smith',
        service: 'Maintenance',
        date: subDays(new Date(), 1),
        status: 'confirmed',
        amount: '$300',
    },
    {
        id: 'bk_4',
        clientName: 'Emma Williams',
        service: 'Custom Bot Setup',
        date: addDays(new Date(), 3),
        status: 'confirmed',
        amount: '$2,500',
    },
    {
        id: 'bk_5',
        clientName: 'James Brown',
        service: 'Consultation',
        date: addDays(new Date(), 5),
        status: 'cancelled',
        amount: '$500',
    },
];

export const chartData = [
    { name: 'Mon', calls: 45, bookings: 8 },
    { name: 'Tue', calls: 52, bookings: 12 },
    { name: 'Wed', calls: 38, bookings: 6 },
    { name: 'Thu', calls: 65, bookings: 15 },
    { name: 'Fri', calls: 48, bookings: 9 },
    { name: 'Sat', calls: 25, bookings: 4 },
    { name: 'Sun', calls: 15, bookings: 2 },
];
