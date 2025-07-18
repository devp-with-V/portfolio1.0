"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement

    if (newTheme === "light") {
      root.classList.add("light-theme")
      root.classList.remove("dark-theme")
    } else {
      root.classList.add("dark-theme")
      root.classList.remove("light-theme")
    }
  }

  const toggleTheme = () => {
    if (!mounted) return

    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return { theme, toggleTheme, mounted }
}
