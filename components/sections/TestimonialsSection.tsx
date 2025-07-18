"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import AnimatedSection from "@/components/ui/AnimatedSection"

export default function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold flex items-center gap-4 mb-12"
      >
        <span className="text-[#C778DD]">#</span>testimonials
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-[#C778DD]"
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-[#282C33] p-6 border border-[#ABB2BF] hover:border-[#C778DD] transition-all duration-300 rounded-lg relative"
          >
            {/* Quote icon */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              className="absolute -top-3 -left-3 w-8 h-8 bg-[#C778DD] rounded-full flex items-center justify-center"
            >
              <Quote className="w-4 h-4 text-[#1E1E1E]" />
            </motion.div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, starIndex) => (
                <motion.div
                  key={starIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + starIndex * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 72 }}
                >
                  <Star className="w-5 h-5 fill-[#C778DD] text-[#C778DD]" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              className="text-[#ABB2BF] mb-6 italic"
            >
              "{testimonial.content}"
            </motion.p>

            {/* Author info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-[#C778DD] rounded-full flex items-center justify-center font-bold text-[#1E1E1E]"
              >
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </motion.div>
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-[#ABB2BF] text-sm">{testimonial.position}</p>
                <p className="text-[#C778DD] text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
