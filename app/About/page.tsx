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
  <div className="flex flex-col md:flex-row md:items-center gap-12">
    {/* Heading */}
    <h2 className="text-3xl font-bold flex items-center gap-4">
      <span className="text-[#C778DD]">#</span>about-me
      <div className="h-px w-32 bg-[#C778DD]" />
    </h2>
  </div>

  {/* Content and Main Image */}
  <div className="grid md:grid-cols-2 gap-12 items-start mt-6">
    <div className="space-y-6 self-start">
      <p className="text-2xl">Hello, I'm Vedant Tendulkar!</p>
      <p className="text-[#ABB2BF] text-lg">
        I'm a self-learned programmer based in Maharashtra, India. With a little understanding in DevOps. I have
        trained and applied relational data on complex ML models and am currently learning advanced ML and deep learning
        algorithms.
      </p>
      <p className="text-[#ABB2BF] text-lg">
        In addition to Data Science and Machine Learning, I am pursuing Cloud Computing as a minor in my academics at VIT Bhopal
        University. For over 2 years, I have been honing my skills in the use of AWS and other tools like Docker.
      </p>
      <Button
        variant="outline"
        className="text-[#C778DD] border-2 border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors text-lg px-6 py-3"
      >
        Read more →
      </Button>
    </div>

    {/* Main Image */}
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