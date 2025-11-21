import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sam - Voice AI for Nigerian Businesses | ODIADEV',
  description: 'Never miss a customer call again. Sam is the culturally aware Voice AI that handles calls, WhatsApp, and bookings 24/7.',
  keywords: 'voice AI, Nigeria, customer service, AI assistant, business automation',
  openGraph: {
    title: 'Sam - Voice AI for Nigerian Businesses',
    description: 'Never miss a customer call again. Sam handles calls, WhatsApp, and bookings 24/7.',
    type: 'website',
  },
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-odi-base text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-odi-base/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                width={120}
                height={40}
                alt="ODIADEV"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-odi-gray hover:text-odi-cyan transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-odi-gray hover:text-odi-cyan transition-colors">
                Pricing
              </Link>
              <Link href="/dashboard" className="text-odi-gray hover:text-odi-cyan transition-colors">
                Dashboard
              </Link>
              <Link
                href="/demo"
                className="px-6 py-2 bg-odi-cyan text-odi-dark font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Try Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-odi-gray hover:text-odi-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo.png"
                width={120}
                height={40}
                alt="ODIADEV"
                className="h-10 w-auto mb-4"
              />
              <p className="text-odi-gray text-sm max-w-md">
                ODIADEV AI LTD - Building culturally aware Voice AI for Nigerian businesses.
                Never miss another customer.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-odi-gray">
                <li><Link href="#features" className="hover:text-odi-cyan transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-odi-cyan transition-colors">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-odi-cyan transition-colors">Demo</Link></li>
                <li><Link href="/dashboard" className="hover:text-odi-cyan transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-odi-gray">
                <li>New York, US & London, UK</li>
                <li><a href="mailto:hello@odia.dev" className="hover:text-odi-cyan transition-colors">hello@odia.dev</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-odi-gray">
                <li><Link href="/privacy" className="hover:text-odi-cyan transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-odi-cyan transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-odi-gray">
            <p>© 2025 ODIADEV AI LTD. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs">🔒 Bank-Level Security</span>
              <span className="text-xs">🇳🇬 NDPR Compliant</span>
              <span className="text-xs">✅ 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
