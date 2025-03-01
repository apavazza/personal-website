import { ButtonHTMLAttributes } from "react"
import { Link } from "@/i18n/routing"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  href: string
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  href
}: ButtonProps) {
  return (
    <Link href={href} passHref>
      <div
        className={`
          inline-flex items-center justify-center rounded-lg font-medium transition-all cursor-pointer
          ${size === "large" ? "px-6 py-3 text-lg" : "px-4 py-2 text-sm"}
          ${
            variant === "primary"
              ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
          }
          ${className}
        `}
      >
        {children}
      </div>
    </Link>
  )
}