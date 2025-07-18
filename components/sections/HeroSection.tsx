"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import TypewriterText from "@/components/ui/TypewriterText"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function HeroSection() {
  return (
    <AnimatedSection id="home" className="py-24 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 relative"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -left-8 w-16 h-16 border border-[#C778DD] opacity-20"
          />

          <TypewriterText text={personalInfo.name} className="text-5xl font-bold leading-tight" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-2xl"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-[#ABB2BF] text-lg"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button className="bg-transparent border-2 border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-all duration-300 text-lg px-6 py-3 transform hover:shadow-lg hover:shadow-[#C778DD]/20">
              Contact me!!
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative h-[500px]"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateY: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute right-0 w-[400px] h-[500px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#C778DD]" />
            <div className="absolute inset-0 bg-[#282C33] overflow-hidden">
              <img
                src="img/profile.png"
                alt="Vedant Tendulkar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = "/placeholder.svg?height=500&width=400"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -bottom-8 -left-8 w-16 h-16 border border-[#C778DD] opacity-20"
          />

          <motion.div
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 -right-8 w-4 h-4 bg-[#282C33] border border-[#C778DD]"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
