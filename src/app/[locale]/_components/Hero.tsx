"use client"

import { motion } from "framer-motion"
import { Button } from "./button"
//import { Badge } from "./_components/badge"
import StackTerminal from "./StackTerminal"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("Hero")
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              {/*<Badge>Open to Work</Badge>*/}
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white">{t("heroTitle")}</h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300">{t('tagline')}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/projects" size="large" className="group">
                {t('viewProjects')}
                <ArrowRight className="ml-3 transform group-hover:translate-x-1 transition-transform"/>
              </Button>
              <Button href="/contact" variant="secondary" size="large">
                {t('contactMe')}
              </Button>
            </div>
          </div>

          <div className="relative">
            <StackTerminal />
          </div>
        </motion.div>
      </section>
    </div>
  )
}