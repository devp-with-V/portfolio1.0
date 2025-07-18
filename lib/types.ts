export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: string
  status: "completed" | "in-progress" | "planned"
  featured: boolean
  github?: string
  live?: string
  image?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface DetailedSkillCategory {
  title: string
  skills: Array<{
    name: string
    level: number
  }>
}

export interface Experience {
  id: string
  position: string
  company: string
  duration: string
  location: string
  description: string
  technologies: string[]
}

export interface Testimonial {
  id: string
  content: string
  author: string
  position: string
  company: string
  rating: number
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  tagline: string
  aboutShort: string
  aboutLong: string[]
  education: {
    degree: string
    institution: string
    duration: string
  }
  interests: string[]
  quote: {
    text: string
    author: string
  }
  contact: Array<{
    type: string
    value: string
  }>
  social: Array<{
    platform: string
    url: string
  }>
}
