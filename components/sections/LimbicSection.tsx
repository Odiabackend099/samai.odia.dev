'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Globe, Target } from 'lucide-react';
import { useState } from 'react';

export default function LimbicSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const traits = [
    { icon: Heart, label: 'Empathetic', color: 'text-pink-400' },
    { icon: Zap, label: 'Lightning-Fast', color: 'text-odi-cyan' },
    { icon: Globe, label: 'Culturally Aware', color: 'text-green-400' },
    { icon: Target, label: 'Action-Oriented', color: 'text-odi-purple' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-odi-purple/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-odi-purple/10 border border-odi-purple/20 rounded-full mb-8"
        >
          <span className="text-odi-purple text-sm font-semibold">💜 Meet Your New Team Member</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold mb-6"
        >
          Meet Sam.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-odi-purple to-odi-cyan">
            The AI that feels like a friend.
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-odi-gray font-light mb-12 max-w-2xl mx-auto"
        >
          Warm. Witty. Professional. <span className="text-white">Never robotic.</span>
        </motion.p>

        {/* Voice Waveform / Audio Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16 p-8 bg-white/5 backdrop-blur-lg border border-odi-purple/20 rounded-3xl"
        >
          <p className="text-sm text-odi-gray mb-4">Listen to Sam handle a frustrated customer</p>

          {/* Waveform Visualization */}
          <div className="flex items-center justify-center h-24 space-x-1 mb-6">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1 rounded-full ${isPlaying ? 'bg-odi-purple' : 'bg-odi-gray/30'}`}
                animate={isPlaying ? {
                  height: [20, Math.random() * 60 + 20, 20],
                } : {}}
                transition={{
                  duration: 0.5,
                  repeat: isPlaying ? Infinity : 0,
                  delay: i * 0.05,
                }}
                style={{ height: '20px' }}
              />
            ))}
          </div>

          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-6 py-3 bg-odi-purple hover:bg-odi-purple/80 text-white rounded-full font-semibold transition-all hover:scale-105"
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play Sample'}
          </button>

          {/* Transcript Excerpt */}
          <div className="mt-6 p-4 bg-odi-dark/50 rounded-lg text-left max-w-xl mx-auto">
            <p className="text-sm text-odi-gray italic">
              "I understand you've been waiting. Let me check that for you right away.
              Can I have your booking reference? ... Perfect, I see it here.
              Your appointment is confirmed for tomorrow at 2 PM. I'll send you a reminder."
            </p>
          </div>
        </motion.div>

        {/* Cultural Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16 p-8 bg-white/5 backdrop-blur-lg border border-odi-cyan/20 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-4">🌎 Built for the US & UK</h3>
          <p className="text-lg text-odi-gray max-w-2xl mx-auto">
            Sam adapts to your customers' style — whether it's formal business English or casual conversation.
            {' '}Sam understands regional accents and local expressions across the US & UK.
          </p>
        </motion.div>

        {/* Persona Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-white/20 transition-all"
              >
                <Icon className={`w-8 h-8 ${trait.color} mx-auto mb-3`} />
                <p className="text-sm font-semibold">{trait.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
