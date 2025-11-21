'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What if Sam makes a mistake?',
            answer: 'Sam has a 99.2% accuracy rate, but when issues occur, you get instant notifications. You can review all conversations in real-time from your dashboard, step in manually if needed, and our team provides 24/7 support to fine-tune Sam\'s responses based on your feedback.',
        },
        {
            question: 'Can I cancel anytime?',
            answer: 'Absolutely. No long-term contracts, no cancellation fees. You can cancel with one click from your dashboard, and you\'ll keep access until the end of your billing period. We also offer a 14-day money-back guarantee if you\'re not satisfied.',
        },
        {
            question: 'How long does setup take?',
            answer: 'Most businesses are live in under 48 hours. Our team handles the technical setup for you. All you need to do is: 1) Share your business info, 2) Review Sam\'s voice and script (2-3 iterations), 3) Go live. Premium plans include a dedicated onboarding specialist.',
        },
        {
            question: 'Do I need technical knowledge?',
            answer: 'Not at all. Sam is designed for business owners, not developers. Setup is done by our team, and your dashboard is as simple as checking email. If you can use WhatsApp, you can use Sam. We also provide video tutorials and live training.',
        },
        {
            question: 'What happens to my existing phone number?',
            answer: 'Sam works with your current number via call forwarding. Customers call your existing number, Sam answers. You can also get a dedicated number or use Sam on WhatsApp/SMS only. It\'s completely flexible.',
        },
        {
            question: 'Is my customer data safe?',
            answer: 'Yes. We use bank-level encryption (AES-256), comply with GDPR, CCPA, and UK Data Protection Act 2018, and host data in secure AWS data centers in US & UK regions. We never sell your data, and you can export or delete it anytime.',
        },
        {
            question: 'Can Sam speak Pidgin or local languages?',
            answer: 'Sam speaks fluent US and UK English, understanding regional accents and colloquialisms. We\'re adding Spanish, French, and German in Q2 2025. Sam adapts to formal business English or casual conversational style as needed.',
        },
        {
            question: 'What if call volume is higher than my plan?',
            answer: 'We\'ll never cut you off mid-month. If you exceed your plan, we charge a small overage fee (₦80 per extra call for Starter, ₦60 for Pro). You\'ll get a notification at 80% usage so you can upgrade if needed. Enterprise plans have unlimited calls.',
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-odi-dark/0 via-odi-cyan/5 to-odi-dark/0" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-odi-cyan/10 border border-odi-cyan/20 rounded-full mb-6">
                        <span className="text-odi-cyan text-sm font-semibold">❓ Frequently Asked Questions</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Got Questions? We've Got Answers.
                    </h2>

                    <p className="text-xl text-odi-gray font-light">
                        Everything you need to know about Sam AI.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg hover:border-odi-cyan/30 transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-lg font-semibold text-white pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-odi-cyan flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-5"
                                >
                                    <p className="text-odi-gray leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center p-8 bg-gradient-to-r from-odi-cyan/10 to-odi-purple/10 rounded-3xl border border-white/10"
                >
                    <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                    <p className="text-odi-gray mb-6">
                        Our team is here to help. Book a free 15-minute consultation.
                    </p>
                    <a
                        href="mailto:support@odia.dev"
                        className="inline-flex items-center px-6 py-3 bg-odi-cyan text-odi-dark font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Contact Our Team →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
