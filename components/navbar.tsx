"use client"

import { useState } from "react"
import Link from "next/link"
// import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/#team" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-500000 w-[100%] bg-background border-b transition-theme">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex z-50 items-center space-x-2">
            <img
              src="/images/Logos/NavyBlue/Logo3.png"
              alt="Faven LP Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden flex-1  md:flex md:items-center md:space-x-8">
            <div className="flex items-center justify-end gap-10 flex-1">
               {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm against text-nowrap font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            </div>
           
            <Link href={"/contact"}
              className=" lufga hover:bg-white  hover:border hover:border-[#003668] border border-transparent hover:text-blue-950 rounded-full py-2 px-4 w-fit  items-center justify-center flex bg-foreground transition-all ease-in-out duration-300 text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button className="ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-md py-4 transition-theme">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base against font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href={"/contact"}
              className=" rounded-full py-3 items-center justify-center flex lufga hover:bg-white hover:text-blue-950 bg-foreground text-white font-medium w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

