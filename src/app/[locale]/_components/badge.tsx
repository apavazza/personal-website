import type React from "react"
interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
      inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
      bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100
      ${className}
    `}
    >
      {children}
    </span>
  )
}

