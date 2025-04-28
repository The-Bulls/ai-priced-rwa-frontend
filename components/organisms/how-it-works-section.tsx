"use client";

import { motion } from "framer-motion";
import { Wallet, Brain, LineChart, ShoppingCart } from "lucide-react";

const steps = [
  {
    title: "Connect Wallet",
    description:
      "Connect your crypto wallet to access the platform and your digital assets.",
    icon: Wallet,
    color: "bg-deep-navy"
  },
  {
    title: "AI Analysis",
    description:
      "Our AI engine analyzes market data and asset characteristics to determine fair pricing.",
    icon: Brain,
    color: "bg-teal-accent"
  },
  {
    title: "On-Chain Pricing",
    description:
      "Transparent pricing data is recorded on-chain for verification and trust.",
    icon: LineChart,
    color: "bg-ocean-blue"
  },
  {
    title: "Buy & Sell",
    description:
      "Trade assets with confidence knowing you're getting AI-verified fair market prices.",
    icon: ShoppingCart,
    color: "bg-success-green"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes it easy to get accurate valuations and
            trade with confidence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-deep-navy via-teal-accent to-ocean-blue transform -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <step.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
