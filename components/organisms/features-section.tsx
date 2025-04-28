"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, PieChart, Users } from "lucide-react"
import FeatureCard from "@/components/molecules/feature-card"

const features = [
  {
    title: "AI-Driven Pricing",
    description:
      "Our advanced AI models analyze market trends, rarity, and historical data to provide accurate real-time pricing for your tokenized assets.",
    icon: Brain,
  },
  {
    title: "Dynamic Liquidity",
    description:
      "Access instant liquidity pools that adjust based on AI-determined fair market values, ensuring you always get the best price.",
    icon: BarChart3,
  },
  {
    title: "Real-Time Charts",
    description:
      "Monitor asset performance with comprehensive real-time charts and analytics powered by our AI pricing engine.",
    icon: PieChart,
  },
  {
    title: "Fractional Ownership",
    description:
      "Divide high-value assets into affordable fractions, democratizing access to premium collectibles and art.",
    icon: Users,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with blockchain technology to revolutionize how digital assets are
            valued and traded.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
