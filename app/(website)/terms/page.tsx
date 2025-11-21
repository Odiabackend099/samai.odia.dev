import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-odi-base text-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-odi-cyan hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
                <p className="text-sm text-odi-gray mb-12">Last Updated: November 21, 2025</p>

                <div className="space-y-12 text-odi-gray leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Sam AI ("<strong>the Service</strong>"), operated by ODIADEV AI LTD ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), you agree to be bound by these Terms of Service ("<strong>Terms</strong>"). If you do not agree, do not use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p>
                            Sam AI is an AI-powered voice assistant that handles phone calls, WhatsApp messages, SMS, and email on behalf of Nigerian businesses. The Service includes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>24/7 call handling and booking management</li>
                            <li>Omnichannel communication (Voice, WhatsApp, SMS, Email)</li>
                            <li>Real-time analytics and reporting</li>
                            <li>CRM integrations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Eligibility</h2>
                        <p>
                            To use the Service, you must:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>Be at least 18 years old</li>
                            <li>Provide accurate and complete registration information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized use</li>
                        </ul>
                        <p className="mt-4">
                            You are responsible for all activity under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Billing and Payment</h2>
                        <p className="mb-4">
                            <strong>Subscription Plans</strong>: We offer monthly subscription plans (Starter, Professional, Enterprise). Pricing is listed on our website and subject to change with 30 days' notice.
                        </p>
                        <p className="mb-4">
                            <strong>Payment</strong>: You authorize us to charge your payment method monthly. Payments are non-refundable except as required by law or stated in our 14-day money-back guarantee.
                        </p>
                        <p className="mb-4">
                            <strong>Overage Charges</strong>: If you exceed your plan's call limit, additional charges apply (₦80/call for Starter, ₦60/call for Pro).
                        </p>
                        <p>
                            <strong>Late Payments</strong>: Failure to pay may result in service suspension or termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use Policy</h2>
                        <p className="mb-4">
                            You agree <strong>NOT</strong> to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Use the Service for illegal, fraudulent, or harmful activities</li>
                            <li>Impersonate any person or entity</li>
                            <li>Spam, harass, or abuse customers</li>
                            <li>Reverse-engineer, decompile, or attempt to extract source code</li>
                            <li>Use the Service to transmit malware or viruses</li>
                            <li>Violate any applicable Nigerian or international laws</li>
                        </ul>
                        <p className="mt-4">
                            Violations may result in immediate account termination without refund.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Data and Privacy</h2>
                        <p>
                            Your use of the Service is governed by our <Link href="/privacy" className="text-odi-cyan hover:underline">Privacy Policy</Link>. By using the Service, you consent to the collection, use, and sharing of data as described therein.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                        <p>
                            All content, trademarks, logos, and technology related to Sam AI are owned by ODIADEV AI LTD. You may not:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>Copy, modify, or distribute our proprietary materials</li>
                            <li>Use our trademarks without written permission</li>
                            <li>Frame or mirror our website</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Service Uptime and Support</h2>
                        <p>
                            We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance. Support response times:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li><strong>Starter</strong>: Email support (24-48 hours)</li>
                            <li><strong>Professional</strong>: Priority support (4-12 hours)</li>
                            <li><strong>Enterprise</strong>: 24/7 phone support</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Cancellation and Termination</h2>
                        <p className="mb-4">
                            <strong>By You</strong>: You may cancel your subscription at any time from your dashboard. Cancellations take effect at the end of the current billing cycle. No prorated refunds.
                        </p>
                        <p>
                            <strong>By Us</strong>: We may terminate your account immediately if you violate these Terms, engage in fraudulent activity, or for non-payment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
                        <p>
                            TO THE FULLEST EXTENT PERMITTED BY LAW, ODIADEV AI LTD SHALL NOT BE LIABLE FOR:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>Indirect, incidental, or consequential damages</li>
                            <li>Loss of revenue, profits, or data</li>
                            <li>Service interruptions or errors in AI responses</li>
                        </ul>
                        <p className="mt-4">
                            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE LAST 12 MONTHS.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold ODIADEV AI LTD harmless from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law and Disputes</h2>
                        <p>
                            These Terms are governed by the laws of the State of New York (for US customers) and the laws of England and Wales (for UK customers). Any disputes shall be resolved through arbitration in New York, NY or London, UK.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
                        <p>
                            We may update these Terms from time to time. Changes will be posted with an updated "Last Updated" date. Continued use constitutes acceptance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                            <p><strong>ODIADEV AI LTD</strong></p>
                            <p>New York, US & London, UK</p>
                            <p>Email: <a href="mailto:support@odia.dev" className="text-odi-cyan hover:underline">support@odia.dev</a></p>
                            <p>Phone: +234 (803) 555-0100</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
