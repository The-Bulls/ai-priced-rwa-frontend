"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/atoms/button"
import { useTheme } from "next-themes"

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "Assets", href: "#" },
    { name: "Docs", href: "#" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                DynamicVault
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </motion.div>
                  </AnimatePresence>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}

              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="md:hidden rounded-full">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background pt-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container mx-auto px-4 py-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">{children}</main>
    </div>
  )
}
