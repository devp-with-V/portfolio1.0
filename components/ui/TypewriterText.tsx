"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  className: string
}

export default function TypewriterText({ text, className }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.h1 className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="text-[#C778DD]"
      >
        |
      </motion.span>
    </motion.h1>
  )
}
