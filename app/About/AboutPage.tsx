import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-[#282C33]">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white text-lg">
            <span className="font-medium">Vedant T</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#home" className="text-[#C778DD] hover:text-[#AB4FB6] transition-colors">
              home
            </Link>
            <Link href="./Works" className="hover:text-[#C778DD] transition-colors">
              #works
            </Link>
            <Link href="./About" className="hover:text-[#C778DD] transition-colors">
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

      <footer className="border-t border-[#282C33]">
        <div className="container mx-auto px-6 py-8">
          <p className="text-[#ABB2BF] text-lg">Have fun and Enjoy what you do.....</p>
        </div>
      </footer>
    </div>
  );
}