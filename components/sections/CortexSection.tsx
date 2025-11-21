'use client';

import { motion } from 'framer-motion';
import { Brain, Phone, Zap, BarChart3, Globe, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CortexSection() {
  const features = [
    {
      icon: Brain,
      title: 'Powered by ODIADEV AI & ODIADEV TTS',
      description: 'State-of-the-art intelligence and advanced speech recognition. Sam understands context, accents, and intent across US & UK English.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Omnichannel',
      description: 'Handles Calls, WhatsApp, SMS, and Email seamlessly. One AI, every platform your customers use.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Action-Oriented',
      description: 'Books appointments, sends confirmations, searches the web, and updates your CRM in real-time.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor every conversation from your dashboard. Track sentiment, topics, and conversion rates.',
      color: 'from-green-500 to-emerald-500',
      link: '/dashboard',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'English, Pidgin, Yoruba, Igbo (coming soon). Sam adapts to how your customers speak.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption. GDPR-ready. Your customer data is protected with military-grade security.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#4EE2E8 1px, transparent 1px), linear-gradient(90deg, #4EE2E8 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-odi-cyan/10 border border-odi-cyan/20 rounded-full mb-6">
            <span className="text-odi-cyan text-sm font-semibold">🚀 The Full Package</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Enterprise-Grade Power.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-odi-cyan to-odi-purple">
              Simple Integration.
            </span>
          </h2>

          <p className="text-xl text-odi-gray font-light max-w-3xl mx-auto">
            Everything you need to automate customer interactions, close deals faster,
            and never miss an opportunity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:border-odi-cyan/50 transition-all"
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-odi-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-odi-gray text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Optional Link */}
                {feature.link && (
                  <Link
                    href={feature.link}
                    className="inline-flex items-center mt-4 text-sm text-odi-cyan hover:underline"
                  >
                    View Dashboard →
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* How It Works Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h3>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/how_it_works_flow_1763716166928.png"
              alt="How Sam AI works - 3 simple steps"
              width={1200}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/demo"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-odi-cyan to-odi-purple text-white font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Experience Sam Live
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
