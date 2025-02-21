import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
            <Link href="#contacts" className="hover:text-[#C778DD] transition-colors">
              #contacts
            </Link>
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#282C33]">
        <div className="container mx-auto px-6 py-8">
          <p className="text-[#ABB2BF] text-lg">Have fun and Enjoy what you do.....</p>
        </div>
      </footer>
    </div>
  );
}