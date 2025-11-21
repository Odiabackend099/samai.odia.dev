'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function ReptilianSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-odi-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span className="text-red-400 text-sm font-semibold">The Hidden Cost</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Every Missed Call is
              <span className="text-red-500"> Lost Revenue</span>
            </h2>

            <ul className="space-y-6">
              {[
                {
                  stat: '67%',
                  text: "of customers won't call back after one missed call",
                },
                {
                  stat: '₦2M+',
                  text: 'lost per month due to staffing shortages in US & UK businesses',
                },
                {
                  stat: '24/7',
                  text: 'your competitors are available. Are you?',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                  <div>
                    <span className="text-2xl font-bold text-red-400">{item.stat}</span>
                    <p className="text-odi-gray mt-1">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Declining Graph Visual */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-lg border border-red-500/20 rounded-2xl">
              <div className="flex items-end justify-between h-32 space-x-2">
                {[85, 70, 55, 40, 25, 15, 8].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-red-500/80 to-red-500/40 rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-xs text-red-400 mt-4 text-center">Customer Retention After Missed Calls</p>
            </div>
          </motion.div>

          {/* Right: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-odi-cyan/10 border border-odi-cyan/20 rounded-full">
              <TrendingUp className="w-4 h-4 text-odi-cyan" />
              <span className="text-odi-cyan text-sm font-semibold">The Solution</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Sam Answers
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-odi-cyan to-odi-purple">
                {' '}Instantly. Always.
              </span>
            </h2>

            <ul className="space-y-6">
              {[
                {
                  stat: 'Zero',
                  text: 'wait times for your customers, ever',
                },
                {
                  stat: '<60s',
                  text: 'to book appointments and confirm details',
                },
                {
                  stat: '100+',
                  text: 'simultaneous calls handled effortlessly',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-odi-cyan rounded-full" />
                  <div>
                    <span className="text-2xl font-bold text-odi-cyan">{item.stat}</span>
                    <p className="text-white mt-1 font-light">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Growth Graph Visual */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-lg border border-odi-cyan/20 rounded-2xl">
              <div className="flex items-end justify-between h-32 space-x-2">
                {[15, 30, 45, 60, 75, 88, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-odi-cyan/80 to-odi-cyan/40 rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-xs text-odi-cyan mt-4 text-center">Customer Satisfaction with Sam</p>
            </div>

            {/* Sam AI in Action Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8"
            >
              <Image
                src="/sam_ai_in_action_1763716144240.png"
                alt="Sam AI handling multiple calls simultaneously"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
