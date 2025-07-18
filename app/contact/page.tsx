"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { personalInfo } from "@/data/personal"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedBackground from "@/components/ui/AnimatedBackground"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 py-24">
        <AnimatedSection>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold flex items-center gap-4 mb-12"
          >
            <span className="text-[#C778DD]">#</span>contact
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-[#C778DD]"
            />
          </motion.h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[#ABB2BF] text-lg"
              >
                I'm interested in collaborative projects and freelance opportunities. However, if you have other
                requests or questions, don't hesitate to contact me.
              </motion.p>

              <div className="space-y-6">
                {personalInfo.contact.map((contact, index) => (
                  <motion.div
                    key={contact.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-[#282C33] border border-[#ABB2BF] rounded-lg hover:border-[#C778DD] transition-colors duration-300"
                  >
                    <div className="text-[#C778DD]">
                      {contact.type === "email" && <Mail className="w-6 h-6" />}
                      {contact.type === "phone" && <Phone className="w-6 h-6" />}
                      {contact.type === "location" && <MapPin className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="font-medium capitalize">{contact.type}</p>
                      <p className="text-[#ABB2BF]">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {personalInfo.social.map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-[#282C33] border border-[#ABB2BF] rounded-lg hover:border-[#C778DD] hover:text-[#C778DD] transition-colors duration-300"
                    >
                      {social.platform === "github" && <Github className="w-6 h-6" />}
                      {social.platform === "linkedin" && <Linkedin className="w-6 h-6" />}
                      {social.platform === "twitter" && <Twitter className="w-6 h-6" />}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-[#282C33] p-8 border border-[#ABB2BF] relative hover:border-[#C778DD] transition-colors duration-300 rounded-lg"
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

              <h3 className="font-medium text-xl mb-6">Send me a message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-[#1E1E1E] border border-[#ABB2BF] rounded-lg focus:border-[#C778DD] focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-[#1E1E1E] border border-[#ABB2BF] rounded-lg focus:border-[#C778DD] focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-[#1E1E1E] border border-[#ABB2BF] rounded-lg focus:border-[#C778DD] focus:outline-none transition-colors duration-300"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full p-3 bg-[#1E1E1E] border border-[#ABB2BF] rounded-lg focus:border-[#C778DD] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="w-full bg-transparent border-2 border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-all duration-300 text-lg py-3"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
