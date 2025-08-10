"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

interface EducationItem {
  year: string
  degree: string
  institution: string
  faculty?: string
}

export default function EducationCard() {
  const t = useTranslations("Education")
  const educationList = t.raw("educationList") as EducationItem[]

  return (
    <div className="min-h-screen py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-20 text-neutral-900 dark:text-white"
      >
        {t("title")}
      </motion.h2>

      <div className="max-w-3xl mx-auto px-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 via-purple-500 to-pink-500" />

          {/* Education items */}
          <div className="space-y-16">
            {educationList.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Station dot */}
                <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-4 border-blue-500 -translate-x-1/2" />

                {/* Content */}
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
                  <div className="absolute left-0 top-8 w-[calc(2rem+1px)] h-px bg-linear-to-r from-blue-500 to-purple-500" />

                  <div className="space-y-4">
                    {/* Year tag */}
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                      {education.year}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{education.degree}</h3>
                      <p className="text-neutral-600 dark:text-neutral-300">{education.institution}</p>
                      {education.faculty && (
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">{education.faculty}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}