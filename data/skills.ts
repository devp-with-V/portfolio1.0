import type { SkillCategory } from "@/lib/types"

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Databases",
    skills: ["Oracle", "DynamoDB", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Tools",
    skills: ["VSCode", "AWS", "Linux", "Figma", "Oracle CI", "Git", "Docker", "Kubernetes"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "NumPy", "Scikit-learn", "React", "Next.js", "Express", "Flask", "Django"],
  },
]

export const skillCategoriesDetailed: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Django", level: 70 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 70 },
      { name: "DynamoDB", level: 65 },
      { name: "Oracle", level: 60 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Kubernetes", level: 65 },
      { name: "Figma", level: 70 },
    ],
  },
]
