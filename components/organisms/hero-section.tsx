"use client";

import { motion } from "framer-motion";
import ConnectWalletButton from "@/components/molecules/connect-wallet-button";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-accent/5 dark:to-teal-accent/10 -z-10" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-teal-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-ocean-blue/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 glitch-effect"
            data-text="Real-Time AI-Pricing for Tokenized Art & Collectibles"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="dv-gradient-text">
              Real-Time AI-Pricing for Tokenized Art & Collectibles
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock the true value of your digital assets with our cutting-edge
            AI pricing engine. Get real-time valuations, dynamic liquidity, and
            fractional ownership opportunities.
          </motion.p>

          <ConnectWalletButton />
        </div>
      </div>
    </section>
  );
}
