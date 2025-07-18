"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { personalInfo } from "@/data/personal"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-t border-[#282C33] bg-[#1E1E1E]"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-6">
            <span className="font-medium text-lg">{personalInfo.name}</span>
            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
              <Link
                href={personalInfo.social.find((s) => s.platform === "github")?.url || "#"}
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
          <p className="text-[#ABB2BF] text-lg">{personalInfo.tagline}</p>
          <div className="flex gap-4">
            {personalInfo.social.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors capitalize"
              >
                {social.platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
