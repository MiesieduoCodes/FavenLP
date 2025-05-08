// import { Button } from "@/components/ui/button"
import Link from "next/link"
// import Image from "next/image"

export default function ContactCta() {
  return (
    <section className="py-12 bg-[url('/images/Patterns/bg-pattern.png')] bg-cover bg-center bg-no-repeat   relative text-center transition-theme">

      <div className="container z-10 mx-auto px-4">
        <h2 className="text-4xl font-medium text-primary mb-4">Unclear About Your Situation?</h2>
        <Link className="z-100" href="/contact">
          <button className="px-4 py-3  border border-transparent hover:border-primary hover:text-primary hover:bg-transparent rounded-full bg-foreground text-white">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  )
}

