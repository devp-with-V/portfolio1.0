"use client"

import HeroSection from "@/components/sections/HeroSection"
import QuoteSection from "@/components/sections/QuoteSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import AnimatedBackground from "@/components/ui/AnimatedBackground"
import FloatingParticles from "@/components/ui/FloatingParticles"
import LoadingScreen from "@/components/ui/LoadingScreen"
import ScrollProgress from "@/components/ui/ScrollProgress"
import BackToTop from "@/components/ui/BackToTop"
import CustomCursor from "@/components/ui/CustomCursor"
import PageTransition from "@/components/ui/PageTransition"

import { useState, useEffect } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
        <CustomCursor />
        <ScrollProgress />
        <AnimatedBackground />
        <FloatingParticles />

        <HeroSection />
        <QuoteSection />
        <ProjectsSection />
        {/* <SkillsSection /> */}
        {/* <ExperienceSection /> */}
        <AboutSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />

        <BackToTop />
      </div>
    </PageTransition>
  )
}
