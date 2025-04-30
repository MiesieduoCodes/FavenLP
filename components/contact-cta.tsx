// import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ContactCta() {
  return (
    <section className="py-12 relative lufga bg-muted text-center transition-theme">
      <div className="absolute w-full  h-50 top-0 z-0 left-0">
              <Image src={"/images/Patterns/bg-pattern.png"} height={100} width={100} className="flex h-full object-cover object-bottom w-full" alt={""}></Image>
            </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-primary mb-4">Unclear About Your Situation?</h2>
        <Link href="/contact">
         <button className="px-4 py-3 rounded-full bg-foreground text-white">
          Contact Us
         </button>
        </Link>
      </div>
    </section>
  )
}

