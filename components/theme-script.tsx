"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeScript() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Detect user preference from system and set initial theme
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [setTheme])

  // Save theme preference when it changes
  useEffect(() => {
    if (mounted && theme) {
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted])

  return null
}

