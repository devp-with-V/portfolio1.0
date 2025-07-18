"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/ProjectCard"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedBackground from "@/components/ui/AnimatedBackground"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 py-24">
        <AnimatedSection>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold flex items-center gap-4 mb-12"
          >
            <span className="text-[#C778DD]">#</span>projects
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-[#C778DD]"
            />
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#ABB2BF] text-lg mb-12"
          >
            Here are some of my featured projects that showcase my skills in web development, machine learning, and
            software engineering.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
