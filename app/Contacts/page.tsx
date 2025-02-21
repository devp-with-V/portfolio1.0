import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactsPage() {
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
            <Link href="/Works" className="hover:text-[#C778DD] transition-colors">
              #works
            </Link>
            <Link href="/About" className="hover:text-[#C778DD] transition-colors">
              #about-me
            </Link>
            <Link href="/Contacts" className="hover:text-[#C778DD] transition-colors">
              #contacts
            </Link>
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </header>

      <section id="contacts" className="container mx-auto px-6 py-15 scroll-mt-20">
        <h2 className="text-3xl font-bold flex items-center gap-4 mb-12">
          <span className="text-[#C778DD]">#</span>contacts
          <div className="h-px w-32 bg-[#C778DD]" />
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
  {/* Text Content */}
  <div className="space-y-6 flex flex-col justify-center">
    <p className="text-2xl">Get in Touch</p>
    <p className="text-[#ABB2BF] text-lg">
      If you would like to get in touch with me, feel free to reach out via email or connect with me on social media.
    </p>
    <p className="text-[#ABB2BF] text-lg">
      Email: <a href="mailto:vedant02ms@gmail.com" className="text-[#C778DD]">vedant02ms@gmail.com</a>
    </p>
    <p className="text-[#ABB2BF] text-lg">
      LinkedIn: <a href="https://www.linkedin.com/in/vedant-tendulkar-b2231b28a/" className="text-[#C778DD]">linkedin </a>
    </p>
    <p className="text-[#ABB2BF] text-lg">
      GitHub: <a href="https://github.com/devp-with-V" className="text-[#C778DD]">github </a>
    </p>
    <Button
      variant="outline"
      className="text-[#C778DD] border-2 border-[#C778DD] hover:bg-[#C778DD] hover:text-white transition-colors text-lg px-6 py-3"
    >
      Send a Message
    </Button>
  </div>

  {/* Image Section */}
  <div className="flex justify-center">
    <Image 
      src="/contact.png" 
      alt="Contact Me" 
      width={450} 
      height={500} 
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