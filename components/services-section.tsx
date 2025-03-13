import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "REGULATORY COMPLIANCE & PRIVACY",
    description:
      "We help protect your organization's interests through proactive regulatory compliance strategies and privacy frameworks, ensuring your business stays ahead of legal requirements.",
    image: "/images/ServiceOne.png",
  },
  {
    title: "CORPORATE GOVERNANCE",
    description:
      "Our corporate governance services guide businesses through the complexities of board responsibilities, executive compensation, and shareholder relations to establish effective oversight structures.",
    image: "/images/ServiceTwo.png",
  },
  {
    title: "INTELLECTUAL PROPERTY & TECHNOLOGY LAW",
    description:
      "Helping high-tech companies protect and leverage their intellectual property assets through comprehensive legal protection strategies and technology transfer agreements.",
    image: "/images/ServiceThree.png",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background transition-theme">
      <div className="container mx-auto px-4">
        <div className="text-center lufga mb-4">
          <h3 className="text-base text-foreground/70 mb-2">Our Practice Areas</h3>
          <h2 className="text-3xl font-bold text-primary">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-lg font-bold lufga text-primary mb-3">{service.title}</h3>
              <p className="text-foreground/80 lufga text-sm flex-grow mb-4">{service.description}</p>
              <div>
                <Link href="/services">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground lufga rounded-full text-sm">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

