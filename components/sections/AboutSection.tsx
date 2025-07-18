"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/personal"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function AboutSection() {
  return (
    <AnimatedSection id="about-me" className="scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold flex items-center gap-4 mb-12"
      >
        <span className="text-[#C778DD]">#</span>about-me
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-[#C778DD]"
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl"
          >
            Hello, I'm {personalInfo.name}!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#ABB2BF] text-lg"
          >
            {personalInfo.aboutShort}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Link href="/about">
              <Button
                variant="outline"
                className="text-[#C778DD] border-2 border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-all duration-300 text-lg px-6 py-3 hover:shadow-lg hover:shadow-[#C778DD]/20"
              >
                Read more →
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px]"
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
            className="absolute right-0 w-[400px] h-[500px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C778DD]" />
            <div className="absolute inset-0 bg-[#282C33] overflow-hidden">
              <img
                src="img/about.png"
                alt="About Vedant Tendulkar"
                className="w-full h-500 object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = "/placeholder.svg?height=500&width=400"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
