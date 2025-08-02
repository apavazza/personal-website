import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import type React from "react"
import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Locale, routing } from "@/i18n/routing"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Amadeo Pavazza",
    template: "%s | Amadeo Pavazza",
  },
  description: "Personal website of Amadeo Pavazza, a computer science student interested in Linux, containerization, programming in C, C++, Rust, Python and Go, as well as data science, computer security, web development, DevOps, Git, and game development.",
  keywords: [
    "Amadeo Pavazza",
    "Amadeo",
    "Pavazza",
    "personal",
    "portfolio",
    "engineer",
    "software developer",
    "computer science",
    "programmer",
  ],
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale() as Locale
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100 dark:bg-black`}>
        <NextIntlClientProvider
          messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}