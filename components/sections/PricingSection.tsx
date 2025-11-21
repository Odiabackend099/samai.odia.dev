'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses testing the waters',
      features: [
        '500 calls/month',
        'WhatsApp + Voice',
        'Basic analytics',
        'Email support',
        '48-hour setup',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing businesses that need scale',
      features: [
        '2,000 calls/month',
        'All channels (Voice, WhatsApp, SMS, Email)',
        'Advanced analytics',
        'Custom voice training',
        'Priority support',
        'CRM integration',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Unlimited scale for large organizations',
      features: [
        'Unlimited calls',
        'Dedicated account manager',
        'White-label option',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-odi-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-odi-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-odi-purple/10 border border-odi-purple/20 rounded-full mb-6">
            <span className="text-odi-purple text-sm font-semibold">💰 Simple, Transparent Pricing</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your Plan
          </h2>

          <p className="text-xl text-odi-gray font-light max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl ${tier.popular
                ? 'bg-gradient-to-b from-odi-cyan/20 to-odi-purple/20 border-2 border-odi-cyan'
                : 'bg-white/5 backdrop-blur-lg border border-white/10'
                }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-odi-cyan to-odi-purple text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-odi-gray mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">{tier.price}</span>
                <span className="text-odi-gray">{tier.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-odi-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-odi-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/demo"
                className={`block w-full py-3 text-center font-semibold rounded-full transition-all ${tier.popular
                  ? 'bg-gradient-to-r from-odi-cyan to-odi-purple text-white hover:scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-odi-gray">
            Have questions?{' '}
            <a href="mailto:hello@odia.dev" className="text-odi-cyan hover:underline">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
