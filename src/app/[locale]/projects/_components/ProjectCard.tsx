import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import type { MouseEvent } from "react"
import type { Project } from "../types"
import ProjectLink from "./ProjectLink"
import { useTranslations } from "next-intl";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations("Projects")
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 xl:pl-8 xl:pt-8 xl:pb-8 flex flex-col xl:flex-row gap-6 min-h-[250px] xl:min-h-[200px]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Left Column: Project Info & Tags */}
      <div className="grow flex flex-col justify-between xl:w-2/3">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">{project.name}</h3>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="relative overflow-hidden rounded-full px-3 py-1 text-xs
                bg-neutral-100 text-neutral-700
                dark:bg-neutral-800 dark:text-neutral-300
                group-hover:bg-blue-100 group-hover:text-blue-700
                dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-300
                transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: Links */}
      <div className="xl:w-1/3 flex flex-col border-t xl:border-t-0 xl:border-l border-neutral-200 dark:border-neutral-700 xl:pl-6">
        {/* Repository Link - Upper Half */}
        <ProjectLink href={project.repositoryUrl} text={t('repository')} />

        {/* Divider (optional, more prominent on mobile) */}
        {project.webAppUrl && <div className="border-t border-neutral-200 dark:border-neutral-700"></div>}

        {/* Web App URL Link - Bottom Half (optional) */}
        {project.webAppUrl ? (
          <ProjectLink href={project.webAppUrl} text={t('webApp')} />
        ) : ( // Placeholder if no Web App URL to maintain structure
          <div className="flex-1 flex items-center py-3 xl:py-2 pr-6 xl:pr-16 invisible">
            &nbsp; {/* Mimic text span, &nbsp; ensures it takes up line height */}
          </div>
        )}
      </div>
    </motion.div>
  )
}