import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam - Voice AI for US & UK Businesses | ODIADEV",
  description: "Never miss a customer call again. Sam is the AI-powered receptionist that handles calls, WhatsApp, and bookings 24/7 for US & UK businesses.",
  manifest: '/manifest.json',
  themeColor: '#030a18',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sam AI',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: 'https://samai.odia.dev',
  },
  openGraph: {
    title: "Sam - Voice AI for US & UK Businesses",
    description: "Never miss a customer call again. 24/7 AI receptionist for US & UK businesses.",
    url: "https://samai.odia.dev",
    siteName: "Sam AI",
    images: [
      {
        url: "https://samai.odia.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sam AI - Voice Assistant for Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam - Voice AI for US & UK Businesses",
    description: "Never miss a customer call again. 24/7 AI receptionist.",
    images: ["https://samai.odia.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
