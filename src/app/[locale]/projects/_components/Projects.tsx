"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import ProjectCard from "./ProjectCard"
import type { Project } from "../types"

export default function Projects() {
  const t = useTranslations("Projects")
  const projects = t.raw("projectsList") as Project[]

  return (
    <div className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">{t("title")}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('tagline')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}