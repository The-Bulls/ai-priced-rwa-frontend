"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  textClassName?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
  href?: string
}

export default function Logo({
  className,
  textClassName,
  showText = true,
  size = "md",
  href = "/",
}: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const LogoContent = () => (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Shield Logo with Dynamic Elements */}
      <div className={cn("relative", sizeClasses[size])}>
        {/* Shield Base */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Shield Background */}
          <path
            d="M20 2L4 9V20C4 28.8 11.2 37.2 20 39C28.8 37.2 36 28.8 36 20V9L20 2Z"
            className="fill-deep-navy dark:fill-teal-accent/20"
          />

          {/* Shield Segments */}
          <path
            d="M20 2L4 9L20 16L36 9L20 2Z"
            className="fill-teal-accent dark:fill-teal-accent"
            fillOpacity="0.8"
          />
          <path
            d="M12 12.5V25C12 29.5 15.6 33.8 20 35C24.4 33.8 28 29.5 28 25V12.5L20 16L12 12.5Z"
            className="fill-ocean-blue dark:fill-ocean-blue"
            fillOpacity="0.6"
          />

          {/* Circuit Nodes */}
          <circle cx="20" cy="20" r="2" className="fill-teal-accent" />
          <circle cx="14" cy="16" r="1.5" className="fill-teal-accent" />
          <circle cx="26" cy="16" r="1.5" className="fill-teal-accent" />
          <circle cx="20" cy="28" r="1.5" className="fill-teal-accent" />

          {/* Circuit Lines */}
          <path
            d="M20 18L14 16M20 18L26 16M20 18V22"
            stroke="hsl(var(--teal-accent))"
            strokeWidth="1"
          />
          <path
            d="M20 22V28"
            stroke="hsl(var(--teal-accent))"
            strokeWidth="1"
            strokeDasharray="2 1"
          />
        </svg>

        {/* Animated Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-teal-accent/20 dark:bg-teal-accent/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <span
          className={cn(
            "font-bold dv-gradient-text",
            textSizeClasses[size],
            textClassName
          )}
        >
          DynamicVault
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
