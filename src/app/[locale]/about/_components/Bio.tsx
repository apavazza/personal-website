"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function Bio() {
    const t = useTranslations('Bio')
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 max-w-3xl mx-auto"
    >
      <div className="border-l-4 border-blue-500 pl-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{t('title')}</h2>
        <p className="text-justify text-gray-600 dark:text-gray-300 italic">{t('text')}</p>
      </div>
    </motion.div>
  )
}

