"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return {
    theme: mounted ? theme : undefined,
    toggleTheme,
    mounted,
  }
}
