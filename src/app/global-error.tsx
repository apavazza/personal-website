"use client";

import "@/app/globals.css"
import { Inter } from "next/font/google"
import Robot from '@/components/Robot'

const inter = Inter({ subsets: ["latin"] })

export default function GlobalError({ 
  error,
  reset 
}: { 
  error: Error & { digest?: string }
  reset: () => void 
}) {
  return (
    <html>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-100 dark:bg-black`}>
        <main className="grow container mx-auto px-4 py-8">
          <div className="flex justify-center mt-6">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                {error.name || "Error"}
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                Oops! Something went wrong
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-100 mb-8">
                {error.message}
              </p>
              <Robot />
              <p className="text-lg text-gray-600 dark:text-gray-100 mb-8">
                We're sorry for the inconvenience. Please try again later.
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
