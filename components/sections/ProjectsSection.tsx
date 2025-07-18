"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/ProjectCard"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <AnimatedSection id="works" className="scroll-mt-20">
      <div className="flex justify-between items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold flex items-center gap-4"
        >
          <span className="text-[#C778DD]">#</span>projects
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-[#C778DD]"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ x: 10 }}
        >
          <Link href="/projects" className="text-[#C778DD] hover:text-[#AB4FB6] transition-colors text-lg">
            View all →
          </Link>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  )
}
