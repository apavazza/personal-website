"use client"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ContactCard() {
  const t = useTranslations("ContactCard")
  const [emailRevealed, setEmailRevealed] = useState(false)

  function getEmail() {
    const parts = t.raw('emailParts') as unknown as string[]
    if (Array.isArray(parts) && parts.length) return parts.join('')
  }

  const handleEmailClick = () => {
    if (!emailRevealed) {
      setEmailRevealed(true)
    }
  }

  return (
    <div className="bg-white dark:bg-[#121212] shadow-lg rounded-lg overflow-hidden w-full max-w-md">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{t('name')}</h2>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{t('degree')}</p>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Mail className="mr-4 text-gray-700 dark:text-gray-300" size={24} />
          {emailRevealed ? (
            <a
              href={`mailto:${getEmail()}`}
              className="text-gray-700 hover:text-brand-primary dark:text-gray-300 dark:hover:text-gray-200"
            >
              {getEmail()}
            </a>
          ) : (
            <button
              onClick={handleEmailClick}
              className="text-gray-700 hover:text-brand-primary dark:text-gray-300 dark:hover:text-gray-200"
            >
              {t('revealNotice')}
            </button>
          )}
        </div>
        <div className="flex items-center">
          <MapPin className="mr-4 text-gray-700 dark:text-gray-300" size={24} />
          <p className="text-gray-700 dark:text-gray-300">{t('location')}</p>
        </div>
      </div>
    </div>
  )
}

