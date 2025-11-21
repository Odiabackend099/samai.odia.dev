import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-odi-base text-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-odi-cyan hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-sm text-odi-gray mb-12">Last Updated: November 21, 2025</p>

                <div className="space-y-12 text-odi-gray leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            ODIADEV AI LTD ("<strong>Sam AI</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") collects the following types of information when you use our voice AI services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Account Information</strong>: Name, email, phone number, business name, billing details.</li>
                            <li><strong>Call Data</strong>: Voice recordings, transcripts, call duration, phone numbers (caller and recipient).</li>
                            <li><strong>Usage Data</strong>: Dashboard activity, feature usage, integration logs.</li>
                            <li><strong>Technical Data</strong>: IP address, browser type, device information.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p>We use the information collected to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>Provide and improve our voice AI services</li>
                            <li>Process bookings, answer customer queries, and send notifications</li>
                            <li>Train and optimize Sam's AI models (anonymized data only)</li>
                            <li>Send service updates, billing statements, and support messages</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing</h2>
                        <p className="mb-4">
                            We <strong>do not sell</strong> your data. We may share information with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Service Providers</strong>: Cloud hosting (AWS/Google Cloud), payment processors, analytics tools.</li>
                            <li><strong>Legal Compliance</strong>: When required by Nigerian law or to protect our legal rights.</li>
                            <li><strong>Business Transfers</strong>: In the event of a merger, acquisition, or asset sale.</li>
                        </ul>
                        <p className="mt-4">
                            All third-party providers are bound by strict confidentiality and data protection agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p>
                            We implement industry-standard security measures, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Role-based access controls and multi-factor authentication</li>
                            <li>Data hosted in secure Nigerian data centers</li>
                        </ul>
                        <p className="mt-4">
                            However, no system is 100% secure. We encourage you to use strong passwords and report suspicious activity immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights (NDPR Compliance)</h2>
                        <p className="mb-4">
                            Under the Nigeria Data Protection Regulation (NDPR), you have the right to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Access</strong> your personal data via your dashboard</li>
                            <li><strong>Rectify</strong> inaccurate or incomplete information</li>
                            <li><strong>Delete</strong> your account and data (subject to retention requirements)</li>
                            <li><strong>Export</strong> your data in a machine-readable format</li>
                            <li><strong>Object</strong> to certain types of processing (e.g., marketing)</li>
                            <li><strong>Withdraw consent</strong> at any time</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, contact us at <a href="mailto:support@odia.dev" className="text-odi-cyan hover:underline">support@odia.dev</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                        <p>
                            We retain your data as long as your account is active or as needed to provide services. After account deletion, we retain:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li><strong>Call transcripts</strong>: 90 days (for quality assurance)</li>
                            <li><strong>Billing records</strong>: 7 years (tax compliance)</li>
                            <li><strong>Anonymized analytics</strong>: Indefinitely (for product improvement)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
                        <p>
                            We use cookies and similar technologies to improve your experience. You can manage cookie preferences via your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                        <p>
                            Sam AI is not intended for individuals under 18. We do not knowingly collect data from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                        <p className="mb-4">
                            If you have questions about this Privacy Policy or how we handle your data:
                        </p>
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
