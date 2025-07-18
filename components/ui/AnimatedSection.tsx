"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function AnimatedSection({ children, className = "", id = "" }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`container mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
