"use client"

import { motion } from "framer-motion"

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C778DD] rounded-full"
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
        />
      ))}
    </div>
  )
}
