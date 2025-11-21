import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sam - Voice AI for Nigerian Businesses',
        short_name: 'Sam AI',
        description: 'Never miss a customer call again. Sam is the culturally aware Voice AI that handles calls, WhatsApp, and bookings 24/7.',
        start_url: '/',
        display: 'standalone',
        background_color: '#030a18',
        theme_color: '#030a18',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
