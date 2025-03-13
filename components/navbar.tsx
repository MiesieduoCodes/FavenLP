"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b transition-theme">
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

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm against font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="ml-4 bg-blue-900 text-white lufga rounded-full hover:bg-white hover:text-blue-950 font-medium">
              Contact Us
            </Button>
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
            <Button
              className=" lufga hover:bg-white hover:text-blue-950 bg-blue-900 text-white font-medium w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

