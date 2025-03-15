"use client"

import { Minus, Square, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { HTMLAttributes, useEffect, useState } from "react"

export default function StackTerminal() {
  const t = useTranslations("StackTerminal")
  const [visible, setVisible] = useState(0)
  const user = "root@apavazza"
  const directory = "~/tech-stack"

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => (v < technologies.length ? v + 1 : v))
    }, 100)
    return () => clearInterval(timer)
  })

  const technologies = [
    { category: "Systems Programming", items: ["C", "C++", "Go"] },
    { category: "Scripting Languages", items: ["Python", "JavaScript", "TypeScript"] },
    { category: "Infrastructure", items: ["Linux", "SELinux"] },
    { category: "Linux Distros", items: ["Fedora", "CentOS", "Red Hat", "openSUSE"] },
    { category: "Frontend Development", items: ["Next.js", "React", "TailwindCSS"] },
    { category: "Data Storage", items: ["PostgreSQL", "Redis"] },
    { category: "Containerization", items: ["Docker", "Podman", "Kubernetes"] },
    { category: "Game Development", items: ["Stencyl"] },
    { category: "Version Control", items: ["Git"] },
    { category: "DevOps", items: ["GitHub Actions"] },
  ]

  return (
    <div className="max-w-3xl mx-auto mb-6 overflow-hidden rounded-lg border border-[#3daee9] dark:border-[#3daee9] bg-[#fcfcfc] dark:bg-[#232627]">
      {/* Title bar */}
      <div className="flex items-center h-8 px-3 bg-[#e3e5e7] dark:bg-[#31363b] border-b border-[#3daee9]">
        <div className="flex-1 flex items-center">
          <div className="w-4 h-4 mr-2">
            <svg viewBox="0 0 16 16" className="fill-current text-[#3daee9]">
              <path d="M2.667 2.667v10.666h10.666V2.667H2.667zm1.333 2h8v7.333h-8V4.667z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
            {user}: {directory}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-[#3daee9]/20 rounded" aria-hidden="true">
            <Minus className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
          </button>
          <button className="p-1 hover:bg-[#3daee9]/20 rounded" aria-hidden="true">
            <Square className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
          </button>
          <button className="p-1 hover:bg-[#3daee9]/20 rounded" aria-hidden="true">
            <X className="w-3 h-3 text-neutral-800 dark:text-neutral-200" />
          </button>
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm leading-6">
        <div className="space-y-1">
          <div className="flex">
            <span className="text-[#16a085] dark:text-[#16a085]">{user}</span>
            <span className="text-neutral-800 dark:text-neutral-200">:</span>
            <span className="text-[#3daee9] dark:text-[#3daee9]">{directory}</span>
            <span className="text-neutral-800 dark:text-neutral-200">#</span>
            <span className="text-neutral-800 dark:text-neutral-200 ml-2">whoami</span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-300 ml-4">{t('whoami')}</div>

          <div className="flex">
            <span className="text-[#16a085] dark:text-[#16a085]">{user}</span>
            <span className="text-neutral-800 dark:text-neutral-200">:</span>
            <span className="text-[#3daee9] dark:text-[#3daee9]">{directory}</span>
            <span className="text-neutral-800 dark:text-neutral-200">#</span>
            <span className="text-neutral-800 dark:text-neutral-200 ml-2">ls -la</span>
          </div>

          {technologies.slice(0, visible).map((tech, index) => (
            <div key={index} className="ml-4">
              <span className="text-[#2980b9] dark:text-[#2980b9]">{tech.category}/</span>
              <div className="ml-8 flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-[#3daee9] text-neutral-800 dark:text-neutral-300"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

          <div className="flex">
            <span className="text-[#16a085] dark:text-[#16a085]">{user}</span>
            <span className="text-neutral-800 dark:text-neutral-200">:</span>
            <span className="text-[#3daee9] dark:text-[#3daee9]">{directory}</span>
            <span className="text-neutral-800 dark:text-neutral-200">#</span>
            <span className="animate-pulse ml-2 text-neutral-800 dark:text-neutral-200">█</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export function Badge({ variant = "default", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
        transition-colors
        ${variant === "outline" ? "border border-primary text-primary" : "bg-primary text-primary-foreground"}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}