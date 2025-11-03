"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { useForcedTheme } from "@/components/ForcedThemeProvider"

export default function ToggleThemeSwitcherForced() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const { forcedTheme, setForcedTheme } = useForcedTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-500 rounded-full cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
      onClick={() => {
        const current = forcedTheme ?? resolvedTheme
        const next = current === "dark" ? "light" : "dark"
        if (forcedTheme === next) {
          setForcedTheme(undefined)
        } else {
          setForcedTheme(next)
        }
      }}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full transition-transform flex items-center justify-center ${
          (forcedTheme ?? resolvedTheme) === "dark" ? "transform translate-x-6" : ""
        }`}
      >
        {(forcedTheme ?? resolvedTheme) === "dark" ? (
          <Sun size={16} className="text-yellow-500" />
        ) : (
          <Moon size={16} className="text-gray-800" />
        )}
      </div>
    </div>
  )
}
