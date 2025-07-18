"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal"
import { skillCategoriesDetailed } from "@/data/skills"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedBackground from "@/components/ui/AnimatedBackground"

export default function AboutPage() {
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
            <span className="text-[#C778DD]">#</span>about-me
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-[#C778DD]"
            />
          </motion.h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl"
              >
                Hello, I'm {personalInfo.name}!
              </motion.p>

              {personalInfo.aboutLong.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  className="text-[#ABB2BF] text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="pt-6"
              >
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="bg-[#282C33] p-6 border border-[#ABB2BF] rounded-lg">
                  <h4 className="text-[#C778DD] font-medium">{personalInfo.education.degree}</h4>
                  <p className="text-[#ABB2BF]">{personalInfo.education.institution}</p>
                  <p className="text-[#ABB2BF] text-sm">{personalInfo.education.duration}</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px]"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotateY: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute right-0 w-[350px] h-[400px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute -top-4 -left-4 w-full h-full border border-[#C778DD]" />
                  <div className="absolute inset-0 bg-[#282C33] overflow-hidden">
                    <img
                      src="/img/Ved6.png"
                      alt="Vedant Tendulkar - About"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = "/placeholder.svg?height=400&width=350"
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#282C33] border border-[#C778DD] px-4 py-2 rounded-lg text-[#C778DD]"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold flex items-center gap-4 mb-12 mt-20"
          >
            <span className="text-[#C778DD]">#</span>detailed-skills
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 150 }}
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
                  <div className="space-y-3">
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
      </div>
    </div>
  )
}
