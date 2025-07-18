"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/personal"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function QuoteSection() {
  return (
    <AnimatedSection>
      <div className="max-w-3xl mx-auto text-center space-y-6 relative">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-8 left-0 w-8 h-8 border-t border-l border-[#C778DD]"
        />

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl italic"
        >
          "{personalInfo.quote.text}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-right text-[#ABB2BF] text-xl"
        >
          - {personalInfo.quote.author}
        </motion.p>

        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2.5,
          }}
          className="absolute -bottom-8 right-0 w-8 h-8 border-b border-r border-[#C778DD]"
        />
      </div>
    </AnimatedSection>
  )
}
