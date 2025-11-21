'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Sarah Mitchell',
            title: 'CEO, GlowBeauty NYC',
            image: '/testimonial_profile_chioma_1763716237544.png',
            quote: 'Before Sam, we were losing at least 15 customers per week to missed calls. Now? Zero. Sam handles bookings 24/7, even when my salon is closed. Revenue is up 40% in just 2 months.',
            rating: 5,
            metric: '+40% Revenue',
        },
        {
            name: 'David Thompson',
            title: 'Founder, Thompson Law Firm',
            image: '/logo.png', // Placeholder
            quote: 'Sam books consultations, follows up with clients, and sends reminders. My assistant used to spend 3 hours daily on calls. Now she focuses on high-value work. Game changer for my practice.',
            rating: 5,
            metric: '3 Hours Saved Daily',
        },
        {
            name: 'Emily Parker',
            title: 'Operations Manager, QuickShip Logistics',
            image: '/logo.png', // Placeholder
            quote: 'Customer complaints dropped 60% after we deployed Sam. Our drivers are on the road, but Sam answers every query instantly. Customers love the instant response time.',
            rating: 5,
            metric: '-60% Complaints',
        },
    ];
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-odi-dark/0 via-odi-purple/5 to-odi-dark/0" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-odi-cyan/10 border border-odi-cyan/20 rounded-full mb-6">
                        <span className="text-odi-cyan text-sm font-semibold">⭐ Trusted by 100+ US & UK Businesses</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Don't Take Our Word For It
                    </h2>

                    <p className="text-xl text-odi-gray font-light max-w-2xl mx-auto">
                        See how real US & UK businesses are winning with Sam.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:border-odi-cyan/50 transition-all group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-12 h-12 text-odi-cyan" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white text-sm leading-relaxed mb-6 relative z-10">
                                "{testimonial.quote}"
                            </p>

                            {/* Metric Badge */}
                            <div className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                                <span className="text-green-400 text-xs font-bold">{testimonial.metric}</span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center space-x-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-odi-cyan/30">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-odi-gray">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm text-odi-gray">99.9% Uptime SLA</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-odi-gray">🔒 Bank-Level Encryption</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-odi-gray">🇳🇬 NDPR Compliant</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
