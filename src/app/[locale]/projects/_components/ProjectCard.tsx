import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import type { MouseEvent } from "react"

interface Project {
  name: string
  description: string
  url: string
  icon: string
  tags: string[]
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      className="group relative rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
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
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block p-8">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">{project.name}</h3>
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-500 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="relative overflow-hidden rounded-full px-3 py-1 text-sm 
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
      </a>
    </motion.div>
  )
}