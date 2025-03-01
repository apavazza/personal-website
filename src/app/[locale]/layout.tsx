import type React from "react"
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "hr")) {
    notFound();
  }

  return (children)
}