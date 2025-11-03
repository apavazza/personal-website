import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import type React from "react"
import ForcedThemeProvider from "@/components/ForcedThemeProvider"
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import { Locale, routing } from "@/i18n/routing"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale() as Locale
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  const site = t.raw('site')

  return {
  title: {
      default: site.title,
      template: `%s | ${site.title}`,
  },
    description: site.description,
    keywords: site.keywords,
  }
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
          <ForcedThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            <Navigation />
            <main className="grow container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </ForcedThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}