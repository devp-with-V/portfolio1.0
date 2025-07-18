"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="bg-[#282C33] border-[#ABB2BF] group hover:border-[#C778DD] transition-all duration-300 hover:shadow-xl hover:shadow-[#C778DD]/10">
        <CardHeader className="p-0">
          <motion.div whileHover={{ scale: 1.05 }} className="h-64 relative overflow-hidden">
            {project.image ? (
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to animated background if image doesn't exist
                  e.currentTarget.style.display = "none"
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="absolute inset-0 bg-[#2C333B]"></div>
                      <div class="absolute inset-0 bg-gradient-to-br from-[#2C333B] to-[#3C434B]"></div>
                    `
                  }
                }}
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-[#2C333B]" />
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, #2C333B, #3C434B)",
                      "linear-gradient(45deg, #3C434B, #2C333B)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                />
              </>
            )}
          </motion.div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="border-b border-[#ABB2BF] pb-4 mb-4">
            <h3 className="text-xl font-medium">{project.title}</h3>
          </div>
          <p className="text-[#ABB2BF] mb-4">{project.description}</p>
          <div className="text-sm text-[#ABB2BF] space-x-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="border border-[#ABB2BF] px-3 py-1 rounded inline-block mb-2"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-3">
          {project.live && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="text-[#C778DD] border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#C778DD]/20"
                onClick={() => window.open(project.live, "_blank")}
              >
                Live →
              </Button>
            </motion.div>
          )}
          {project.github && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="text-[#ABB2BF] border-[#ABB2BF] hover:bg-[#ABB2BF] hover:text-[#1E1E1E] transition-all duration-300"
                onClick={() => window.open(project.github, "_blank")}
              >
                Code
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
