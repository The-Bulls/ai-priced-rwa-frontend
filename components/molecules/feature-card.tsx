"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
