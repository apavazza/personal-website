"use client"

import { useTheme } from "next-themes"
import { useForcedTheme } from "@/components/ForcedThemeProvider"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function SimpleThemeSwitcherForced() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const { forcedTheme, setForcedTheme } = useForcedTheme()
  const [isIntersectingFooter, setIsIntersectingFooter] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersectingFooter(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const footer = document.getElementById("page-footer")
    if (footer) {
      observer.observe(footer)
    }

    return () => {
      if (footer) {
        observer.unobserve(footer)
      }
    }
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = () => {
    const next = (forcedTheme ?? resolvedTheme) === "dark" ? "light" : "dark"
    if (forcedTheme === next) {
      setForcedTheme(undefined)
    } else {
      setForcedTheme(next)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed right-2 ${
        isIntersectingFooter ? "bottom-14" : "bottom-2"
      } p-2 border border-gray-300 shadow-md rounded-full bg-gray-200 text-gray-800 transition-all duration-300 ease-in-out`}
      aria-label="Toggle dark mode"
    >
      {(forcedTheme ?? resolvedTheme) === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
