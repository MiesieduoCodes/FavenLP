import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground transition-theme flex flex-col items-center">
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8 text-center">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Faven LP</h3>
            <p className="text-primary-foreground/80 mb-4">
              Achieving lasting technological solutions through legal compliance
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
        <p>&copy; {new Date().getFullYear()} Faven LP. All rights reserved.</p>
      </div>
    </footer>
  );
}
