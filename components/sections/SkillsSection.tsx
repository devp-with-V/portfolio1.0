"use client"

import { motion } from "framer-motion"
import { skillCategoriesDetailed } from "@/data/skills"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="relative scroll-mt-20">
      <motion.div
        animate={{
          x: [0, 10, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -left-4 top-1/2 w-2 h-2 bg-[#C778DD]"
      />

      <motion.div
        animate={{
          x: [0, -10, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -right-4 top-1/3 w-2 h-2 bg-[#C778DD]"
      />

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold flex items-center gap-4 mb-12"
      >
        <span className="text-[#C778DD]">#</span>skills
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-[#C778DD]"
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategoriesDetailed.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
              rotateY: 5,
              scale: 1.02,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="space-y-4"
          >
            <h3 className="font-medium text-xl text-[#C778DD]">{category.title}</h3>
            <div className="bg-[#282C33] p-6 border border-[#ABB2BF] relative hover:border-[#C778DD] transition-colors duration-300 rounded-lg">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute -top-2 -right-2 w-4 h-4 border border-[#C778DD]"
              />
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#ABB2BF]">{skill.name}</span>
                      <span className="text-[#C778DD] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1E1E1E] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
                        className="bg-gradient-to-r from-[#C778DD] to-[#AB4FB6] h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
