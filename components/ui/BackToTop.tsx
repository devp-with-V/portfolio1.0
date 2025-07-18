"use client"

import { motion, useScroll } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 300)
    })
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 360,
        backgroundColor: "#C778DD",
      }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-[#282C33] border-2 border-[#C778DD] text-[#C778DD] rounded-full shadow-lg hover:shadow-[#C778DD]/20 transition-all duration-300 z-40"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  )
}
