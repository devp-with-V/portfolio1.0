"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { personalInfo } from "@/data/personal"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function ContactSection() {
  return (
    <AnimatedSection id="contacts" className="scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold flex items-center gap-4 mb-12"
      >
        <span className="text-[#C778DD]">#</span>contacts
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-[#C778DD]"
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[#ABB2BF] text-lg">
            I'm interested in collaborative projects and freelance opportunities. However, if you have other request or
            question, don't hesitate to contact me
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-all duration-300 text-lg px-6 py-3 rounded"
            >
              Get in touch →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            rotateX: 5,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="bg-[#282C33] p-8 border border-[#ABB2BF] relative hover:border-[#C778DD] transition-colors duration-300"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -top-2 -right-2 w-4 h-4 border border-[#C778DD]"
          />

          <h3 className="font-medium text-xl mb-6">Message me here</h3>
          <div className="space-y-4">
            {personalInfo.contact
              .filter((contact) => contact.type === "email")
              .map((contact, index) => (
                <motion.div
                  key={contact.value}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <Link
                    href={`mailto:${contact.value}`}
                    className="flex items-center gap-3 text-[#C778DD] hover:text-[#AB4FB6] transition-colors text-lg"
                  >
                    <Mail className="w-5 h-5" />
                    {contact.value}
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
