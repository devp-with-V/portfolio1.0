import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-40 left-4 w-2 h-2 bg-[#C778DD]" />
        <div className="absolute top-60 left-8 w-2 h-2 bg-[#C778DD]" />
        <div className="absolute top-80 left-6 w-2 h-2 bg-[#C778DD]" />
        <div className="absolute top-[500px] right-20 w-2 h-2 bg-[#C778DD]" />
        <div className="absolute top-[600px] right-40 w-2 h-2 bg-[#C778DD]" />
        <div className="grid grid-cols-2 gap-40 opacity-5 absolute inset-0">
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-[#282C33]">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white text-lg">
            <span className="font-medium">Vedant T</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#home" className="text-[#C778DD] hover:text-[#AB4FB6] transition-colors">
              home
            </Link>
            <Link href="#works" className="hover:text-[#C778DD] transition-colors">
              #works
            </Link>
            <Link href="#about-me" className="hover:text-[#C778DD] transition-colors">
              #about-me
            </Link>
            <Link href="#contacts" className="hover:text-[#C778DD] transition-colors">
              #contacts
            </Link>
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative">
            <div className="absolute -top-4 -left-8 w-16 h-16 border border-[#C778DD] opacity-20" />
            <h1 className="text-5xl font-bold leading-tight">Vedant Tendulkar</h1>
            <p className="text-2xl">
              I am a Enthusiastic <span className="text-[#C778DD]">CSE Student</span> with a knack for{" "}
              <span className="text-[#C778DD]">Data Science and ML</span>. This is my portfolio website.
            </p>
            <p className="text-2xl"></p>
            <p className="text-[#ABB2BF] text-lg">
              My passion lies in learning about new Technologies and Sciences and their real world application.
            </p>
            <Button className="bg-transparent border-2 border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors text-lg px-6 py-3">
              Contact me!!
            </Button>
          </div>
          <div className="relative h-[500px]">
          <Image src="profile.png" alt="Vedant Tendulkar" width={1000} height={1000} className="rounded-lg object-cover" />
           
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6 relative">
          <div className="absolute -top-8 left-0 w-8 h-8 border-t border-l border-[#C778DD]" />
          <div className="absolute -bottom-8 right-0 w-8 h-8 border-b border-r border-[#C778DD]" />
          <p className="text-3xl italic">"Anyone can do my job, but no ones me........."</p>
          <p className="text-right text-[#ABB2BF] text-xl">- Someone.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-4">
            <span className="text-[#C778DD]">#</span>projects
            <div className="h-px w-32 bg-[#C778DD]" />
          </h2>
          <Link href="#" className="text-[#C778DD] hover:text-[#AB4FB6] transition-colors text-lg">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-[#282C33] border-[#ABB2BF] group hover:border-[#C778DD] transition-colors"
            >
              <CardHeader className="p-0">
                <div className="h-64 relative">
                  <div className="absolute inset-0 bg-[#2C333B]" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="border-b border-[#ABB2BF] pb-4 mb-4">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                </div>
                <p className="text-[#ABB2BF]">{project.description}</p>
                <div className="text-sm text-[#ABB2BF] mt-6 space-x-2">
                  {project.tech.split(" ").map((tech) => (
                    <span key={tech} className="border border-[#ABB2BF] px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="text-[#C778DD] border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors"
                >
                  Live →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-24 relative scroll-mt-20">
        <div className="absolute -left-4 top-1/2 w-2 h-2 bg-[#C778DD]" />
        <div className="absolute -right-4 top-1/3 w-2 h-2 bg-[#C778DD]" />
        <h2 className="text-3xl font-bold flex items-center gap-4 mb-12">
          <span className="text-[#C778DD]">#</span>skills
          <div className="h-px w-32 bg-[#C778DD]" />
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="font-medium text-xl">{category.title}</h3>
              <div className="bg-[#282C33] p-6 border border-[#ABB2BF] relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 border border-[#C778DD]" />
                {category.skills.map((skill, index) => (
                  <p key={index} className="text-[#ABB2BF] text-lg">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="container mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold flex items-center gap-4 mb-12">
          <span className="text-[#C778DD]">#</span>about-me
          <div className="h-px w-32 bg-[#C778DD]" />
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-2xl">Hello, I'm Vedant Tendulkar !</p>
            <p className="text-[#ABB2BF] text-lg">
              I'm a self-leaned programmer based in Maharashtra, India. With a little understanding in DevOps. I have
              Trained and Applied Relational data on complex ML models and currently Learning Advance ML and Deep Learning
              Algorithms.
            </p>
            <p className="text-[#ABB2BF] text-lg">
              With Addition to Data Science and Machine Learning, I am persuing Cloud Computing as a minor in my Academics at VIT Bhopal
              University, for Over 2 year i have been honing my skills in the use of AWS and other tools like Docker.
            </p>
            <Button
              variant="outline"
              className="text-[#C778DD] border-2 border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors text-lg px-6 py-3"
            >
              Read more →
            </Button>
          </div>
          <div className="relative h-[600px]">
          <Image 
            src="/about.png" 
            alt="About Me" 
            width={450} 
            height={600} 
            className="rounded-lg shadow-lg"
          />

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="container mx-auto px-6 py-24 scroll-mt-20">
        <h2 className="text-3xl font-bold flex items-center gap-4 mb-12">
          <span className="text-[#C778DD]">#</span>contacts
          <div className="h-px w-32 bg-[#C778DD]" />
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-[#ABB2BF] text-lg">
              I would love to collaborative on projects and freelance opportunities. However, if you have other request
              or question, don't hesitate to contact me......
            </p>
          </div>
          <div className="bg-[#282C33] p-8 border border-[#ABB2BF] relative">
            <div className="absolute -top-2 -right-2 w-4 h-4 border border-[#C778DD]" />
            <h3 className="font-medium text-xl mb-6">Message me here</h3>
            <div className="space-y-4">
              <Link
                href="mailto:vedant02ms@gmail.com"
                className="flex items-center gap-3 text-[#C778DD] hover:text-[#AB4FB6] transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                vedant02ms@gmail.com
              </Link>
              <Link
                href="mailto:vatendulkar2005@gmail.com"
                className="flex items-center gap-3 text-[#C778DD] hover:text-[#AB4FB6] transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                vatendulkar2005@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#282C33]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="font-medium text-lg">Vedant Tendulkar</span>
              <Link
                href="https://github.com/devp-with-v"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-[#ABB2BF] text-lg">Have fun and Enjoy what you do.....</p>
            <p className="text-lg">Media</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "Portfolio",
    description: "My personal portifolio website",
    tech: "Typescript CSS Figma JS",
  },
  {
    title: "AI generated Data Model Traning. ",
    description: "Experinmental Project to use Weather Dection Model on Data Generaated by AI, to find the capabilaties and extent of ai generation with respect to real world Data.",
    tech: "Python JupyterNotebook Sklearn",
  },
  {
    title: "DSA Developer",
    description: " A DSA giude for Student, with all the required material in one place.",
    tech: "React typescript JS v0",
  },
]

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++ Java", "Python JavaScript"],
  },
  {
    title: "Databases",
    skills: ["Oracle DynamoDB", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["VSCode AWS Linux", "Figma Oracle CI", "Git Docker"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "NumPy Scikit-learn"],
  },
]



