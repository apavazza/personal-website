"use client"

import React, { createContext, useContext, useState } from "react"
import { ThemeProvider, type ThemeProviderProps } from "next-themes"

type ForcedThemeContextType = {
  forcedTheme?: string
  setForcedTheme: (theme?: string) => void
}

const ForcedThemeContext = createContext<ForcedThemeContextType | undefined>(undefined)

export function useForcedTheme() {
  const ctx = useContext(ForcedThemeContext)
  if (!ctx) throw new Error("useForcedTheme must be used within ForcedThemeProvider")
  return ctx
}

export default function ForcedThemeProvider({ children, ...props }: React.PropsWithChildren<ThemeProviderProps>) {
  const [forcedTheme, setForcedTheme] = useState<string | undefined>(undefined)

  return (
    <ForcedThemeContext.Provider value={{ forcedTheme, setForcedTheme }}>
      <ThemeProvider {...props} forcedTheme={forcedTheme}>
        {children}
      </ThemeProvider>
    </ForcedThemeContext.Provider>
  )
}
