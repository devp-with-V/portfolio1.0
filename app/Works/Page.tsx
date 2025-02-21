import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

export default function NewPage() {
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

      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">My Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example project card */}
          <Card className="bg-[#282C33] border-[#ABB2BF] group hover:border-[#C778DD] transition-colors">
            <CardHeader className="p-0">
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-[#2C333B]" />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="border-b border-[#ABB2BF] pb-4 mb-4">
                <h3 className="text-xl font-medium">Project Title</h3>
              </div>
              <p className="text-[#ABB2BF]">Project description goes here.</p>
              <div className="text-sm text-[#ABB2BF] mt-6 space-x-2">
                <span className="border border-[#ABB2BF] px-3 py-1 rounded">Tech 1</span>
                <span className="border border-[#ABB2BF] px-3 py-1 rounded">Tech 2</span>
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
          {/* Add more project cards as needed */}
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