'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

export default function Hero() {
  const [showConfirmed, setShowConfirmed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Memoize particle positions to prevent hydration mismatch
  const particles = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setShowConfirmed(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-odi-cyan rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-odi-cyan/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Notification Animation */}
        <motion.div
          className="mb-8 inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {!showConfirmed ? (
            <>
              <span className="text-red-500 text-2xl">❌</span>
              <span className="text-odi-gray text-sm">Missed Call</span>
            </>
          ) : (
            <>
              <span className="text-green-500 text-2xl">✅</span>
              <span className="text-odi-cyan text-sm font-semibold">Booking Confirmed</span>
            </>
          )}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stop Losing Customers
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-odi-cyan to-odi-purple">
            to Missed Calls
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl sm:text-2xl text-odi-gray font-light tracking-wide mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your business sleeps. Sam doesn't.
          <br />
          <span className="text-white">
            24/7 AI that books, answers, and never misses a call.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/demo"
            className="group relative px-8 py-4 bg-odi-cyan text-odi-dark font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-lg shadow-odi-cyan/50"
          >
            <span className="relative z-10">Talk to Sam Now</span>
            <div className="absolute inset-0 rounded-full bg-odi-cyan animate-ping opacity-20" />
          </Link>

          <a
            href="#features"
            className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-16 flex items-center justify-center space-x-8 text-sm text-odi-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-odi-cyan font-semibold text-2xl">10,000+</span>
            <span>Calls Handled</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center space-x-2">
            <span className="text-odi-cyan font-semibold text-2xl">99.9%</span>
            <span>Uptime</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center space-x-2">
            <span className="text-odi-cyan font-semibold text-2xl">&lt;2s</span>
            <span>Response Time</span>
          </div>
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-odi-cyan/20">
            <Image
              src="/dashboard_preview_mockup_1763716121179.png"
              alt="Sam AI Dashboard Preview"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-odi-dark/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-odi-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
