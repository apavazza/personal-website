"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

export default function PrivacyNotice() {
  const t = useTranslations("Privacy")
  const [emailRevealed, setEmailRevealed] = useState(false)

  function getEmail() {
    const parts = t.raw('contactEmailParts') as unknown as string[]
    if (Array.isArray(parts) && parts.length) return parts.join('')
  }

  const handleEmailClick = () => {
    if (!emailRevealed) {
      setEmailRevealed(true)
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t('title')}</h2>

      <div className="prose dark:prose-invert">
        <p>{t('intro')}</p>

        <ul className="list-disc my-4">
          <li>{t('l1')}</li>
          <li>{t('l2')}</li>
          <li>{t('l3')}</li>
          <li>{t('l4')}</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('titleHosting')}</h3>
        <p>{t('hostingText')}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Vercel Privacy Policy
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('titleExternalLinks')}</h3>
        <p>{t('externalLinksText')}</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">{t('titleContact')}</h3>
        <p>{t('contactText')}
        {emailRevealed ? (
            <a
              href={`mailto:${getEmail()}`}
              className="text-gray-700 no-underline hover:text-brand-primary dark:text-gray-300 dark:hover:text-gray-200"
            >
              {getEmail()}
            </a>
          ) : (
            <button
              onClick={handleEmailClick}
              className="text-blue-600 underline dark:text-blue-400"
            >
              {t('revealNotice')}
            </button>
          )}
        </p>
      </div>
    </div>
  )
}
  
  