import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "My professional and personal bio showcasing my skills and projects",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and Framer Motion. Features include smooth animations, dark theme, and mobile-first design approach.",
    technologies: ["HTML", "CSS", "Figma", "JS", "Next.js", "Framer Motion"],
    category: "Web Development",
    status: "completed",
    featured: true,
    github: "https://github.com/devp-with-V/portfolio1.0",
    live: "https://vedantportiflio.vercel.app/",
    image: "/images/portfolio-screenshot.jpg",
  },
{
  id: "vpn-aws-wireguard",
  title: "Secure VPN Solution on AWS",
  description: "Personal WireGuard VPN server deployed on AWS EC2 for secure, unrestricted internet access.",
  longDescription:
    "Designed and deployed a personal WireGuard VPN server on an AWS EC2 instance to bypass network restrictions and secure internet traffic. Utilized systematic command-line diagnostics (wg show, iptables, ufw status) to identify and resolve complex network issues. Demonstrated strong capabilities in cloud networking and Linux system administration.",
  technologies: ["AWS EC2", "WireGuard", "Ubuntu Linux", "Networking", "SSH"],
  category: "Cloud & Networking",
  status: "completed",
  featured: false,
  github: "", // Add if public
  live: "",   // Not applicable
  image: "/images/vpn-aws-wireguard.jpg",
},
{
  id: "gpt2-text-api",
  title: "Personalized GPT-2 Text Generation API",
  description: "GPU-accelerated FastAPI serving Hugging Face GPT-2 with Dockerized deployment and web UI.",
  longDescription:
    "Developed and deployed a GPU-accelerated text generation API using FastAPI to serve a Hugging Face GPT-2 model, enabling efficient local inference. Engineered a Docker container for the application, optimizing the build process for seamless GPU access on NVIDIA RTX 3050 hardware. Demonstrated proficiency in MLOps, containerization, and full-stack API development.",
  technologies: ["FastAPI", "Docker", "PyTorch", "CUDA", "Hugging Face", "NVIDIA RTX 3050"],
  category: "Machine Learning",
  status: "completed",
  featured: false,
  github: "", // Add if public
  live: "",   // Add web UI link if available
  image: "/images/gpt2-text-api.jpg",
},
{
  id: "ai-data-modeling",
  title: "AI Generated Data Modeling and Testing",
  description: "Research project on predictive modeling using AI-generated and semi-original data.",
  longDescription:
    "Developed a comprehensive ML project exploring AI-generated and semi-original data for predictive modeling across domains like weather detection, diabetes, and stock market analysis. Focused on building efficient ways to find and test readily available data without special filtering. Used Python, Jupyter Notebook, and sklearn (Random Forest, Logistic Regression, Linear Regression).",
  technologies: ["Python", "Jupyter Notebook", "scikit-learn", "Random Forest", "Logistic Regression", "Linear Regression"],
  category: "Research",
  status: "in-progress",
  featured: false,
  github: "", // Add if public
  live: "",   // Add link if available
  image: "/images/ai-data-modeling.jpg",
},
{
  id: "fx-scale",
  title: "F(x) Scale - Image Transformation Platform",
  description: "Open-source, privacy-focused image transformation platform with real-time previews.",
  longDescription:
    "Implemented a client-side processing architecture to ensure user privacy by keeping all image data within the browser. Developed seven specialized image converters, including ASCII Art, Braille Art, Pixel Art, and Text Portrait Generation, with real-time previews. Built with Next.js 14, Tailwind CSS, and the HTML5 Canvas API.",
  technologies: ["Next.js 14", "Tailwind CSS", "HTML5 Canvas API", "JavaScript"],
  category: "Web Application",
  status: "completed",
  featured: true,
  github: "", // Add if public
  live: "",   // Add link if available
  image: "/images/fx-scale.jpg",
},
{
  id: "olden-days",
  title: "OldenDays - Retro Games",
  description: "Classic arcade games (Tetris, Pac-Man) with modern, responsive design.",
  longDescription:
    "Developed classic arcade games (Tetris, Pac-Man) with a modern, responsive, and mobile-friendly design. Implemented keyboard controls and score tracking for an engaging user experience. Utilized Next.js 14, TypeScript, Tailwind CSS, UI Components, and React Hooks.",
  technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Hooks"],
  category: "Game Development",
  status: "completed",
  featured: false,
  github: "", // Add if public
  live: "",   // Add link if available
  image: "/images/olden-days.jpg",
},
{
  id: "moments",
  title: "Moments",
  description: "Modern web app for taking filtered pictures without sign-in.",
  longDescription:
    "A modern web application for taking filtered pictures without any sign in. Built with React, TypeScript, Vite, and Tailwind CSS. Designed and implemented a responsive, user-friendly interface. Deployed on Vercel for fast, reliable access.",
  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  category: "Web Application",
  status: "completed",
  featured: false,
  github: "", // Add if public
  live: "",   // Add Vercel link if available
  image: "/images/moments.jpg",
},
]
