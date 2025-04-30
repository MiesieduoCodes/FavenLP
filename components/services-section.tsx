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
    <section className="py-26 relative bg-muted transition-theme">
      <div className="absolute w-full  h-50 top-0 z-0 left-0">
        <Image src={"/images/Patterns/bg-pattern.png"} height={100} width={100} className="flex h-full object-cover object-bottom w-full" alt={""}></Image>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center lufga mb-4">
          <h3 className="text-xl font-bold text-foreground/70 mb-2">Our Practice Areas</h3>
          <h2 className="text-4xl  text-primary">What We Do</h2>
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
              <div>
                <p className="text-foreground/80 lufga text-sm flex-grow mb-4">{service.description}</p>
                <p className="text-[#1E4075]">
                  See more
                </p>
              </div>
              <div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="flex w-full  mt-10">
        <Link className="mx-auto" href="/services">
          <button className="bg-foreground hover:bg-foreground/90 text-primary-foreground py-3 px-6 lufga rounded-full text-sm">Read More</button>
        </Link>
      </div>
    </section>
  )
}

