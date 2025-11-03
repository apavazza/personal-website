"use client"

import { Minus, Square, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { HTMLAttributes, useEffect, useState } from "react"

export default function StackTerminal() {
  const t = useTranslations("StackTerminal")
  const [visible, setVisible] = useState(0)
  const user = `${t('user')}`
  const directory = "~/tech-stack"

  const raw = t.raw("technologies") as unknown
  const technologies: { category: string; items: string[] }[] = Array.isArray(raw)
    ? (raw as { category: string; items: string[] }[])
    : []

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => (v < technologies.length ? v + 1 : v))
    }, 100)
    return () => clearInterval(timer)
  }, [technologies.length])

  return (
    <div className="max-w-3xl mx-auto mb-6 overflow-hidden rounded-lg border border-stack-blue dark:border-stack-blue-dark bg-stack-bg dark:bg-stack-bg-dark">
      {/* Title bar */}
      <div className="flex items-center h-8 px-3 bg-[#e3e5e7] dark:bg-[#31363b] border-b border-stack-blue dark:border-stack-blue-dark">
        <div className="flex-1 flex items-center">
          <div className="w-4 h-4 mr-2">
            <svg viewBox="0 0 16 16" className="fill-stack-blue dark:fill-stack-blue-dark">
              <path d="M2.667 2.667v10.666h10.666V2.667H2.667zm1.333 2h8v7.333h-8V4.667z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
            {user}: {directory}
          </span>
        </div>
        <div className="flex gap-2">
          <div className="p-1 hover:bg-stack-blue/20 dark:hover:bg-stack-blue-dark/20 rounded-sm">
            <Minus className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
          </div>
          <div className="p-1 hover:bg-stack-blue/20 dark:hover:bg-stack-blue-dark/20 rounded-sm">
            <Square className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
          </div>
          <div className="p-1 hover:bg-stack-blue/20 dark:hover:bg-stack-blue-dark/20 rounded-sm">
            <X className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
          </div>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm leading-6">
        <div className="space-y-1">
          <div className="flex min-w-max">
            <Prompt user={user} directory={directory} />
            <span className="text-neutral-800 dark:text-neutral-200 ml-2">whoami</span>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300 ml-4">{t('whoami')}</div>

          <div className="flex min-w-max">
            <Prompt user={user} directory={directory} />
            <span className="text-neutral-800 dark:text-neutral-200 ml-2">ls -la</span>
          </div>

          {technologies.slice(0, visible).map((tech, index) => (
            <div key={index} className="ml-4">
              <span className="text-stack-blue dark:text-stack-blue-dark">{tech.category}/</span>
              <div className="ml-8 flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline-solid"
                    className="border-stack-blue dark:border-stack-blue-dark text-neutral-800 dark:text-neutral-300"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

          <div className="flex min-w-max">
            <Prompt user={user} directory={directory} />
            <span className="animate-pulse ml-2 text-neutral-800 dark:text-neutral-200">█</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline-solid"
  children: React.ReactNode
}

function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
        transition-colors
        ${variant === "outline-solid" ? "border border-primary text-primary" : "bg-primary text-primary-foreground"}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}

function Prompt({user, directory}: {user: string, directory: string}) {
  return(
    <>
      <span className="text-stack-green dark:text-stack-green-dark">{user}</span>
      <span className="text-neutral-800 dark:text-neutral-200">:</span>
      <span className="text-stack-blue dark:text-stack-blue-dark">{directory}</span>
      <span className="text-neutral-800 dark:text-neutral-200">#</span>
    </>
  )
}