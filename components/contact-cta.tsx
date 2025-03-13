import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-12 lufga bg-muted text-center transition-theme">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-primary mb-4">Unclear About Your Situation?</h2>
        <Link href="/contact">
          <Button className="bg-blue-950 hover:bg-blue-900 text-amber-50 font-bold px-6">
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  )
}

