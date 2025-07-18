"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/data/experience"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold flex items-center gap-4 mb-12"
      >
        <span className="text-[#C778DD]">#</span>experience
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-[#C778DD]"
        />
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-8 top-0 w-0.5 bg-[#C778DD] opacity-30"
        />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative flex gap-8"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.5, backgroundColor: "#C778DD" }}
                className="w-4 h-4 bg-[#282C33] border-2 border-[#C778DD] rounded-full mt-2 flex-shrink-0 relative z-10"
              />

              {/* Content */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex-1 bg-[#282C33] p-6 border border-[#ABB2BF] hover:border-[#C778DD] transition-all duration-300 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#C778DD]">{experience.position}</h3>
                    <h4 className="text-lg font-medium">{experience.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-[#ABB2BF]">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#ABB2BF]">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#ABB2BF] mb-4">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "#C778DD", color: "#1E1E1E" }}
                      className="px-3 py-1 bg-[#1E1E1E] border border-[#C778DD] text-[#C778DD] rounded-full text-sm transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
