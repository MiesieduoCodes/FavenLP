import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Users, BookOpen, Award, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Faven LP</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A modern law firm focused on technology and compliance solutions for forward-thinking businesses.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Faven LP began with a simple mission: to bridge the gap between legal compliance and
                technological innovation. Our founders recognized that as technology transformed business, the legal
                frameworks supporting these businesses needed to evolve as well.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we&apos;ve grown from a small practice to a specialized firm with expertise across regulatory
                compliance, corporate governance, intellectual property, and technology law. Our approach combines deep
                legal knowledge with practical business acumen.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we serve clients ranging from startups to Fortune 500 companies, helping them navigate complex
                legal landscapes while embracing technological change.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Client-focused approach to every case",
                  "Technology-driven legal solutions",
                  "Transparent communication and pricing",
                  "Industry-specific expertise",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-secondary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our team working together"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-secondary" />,
                title: "Client Partnership",
                description:
                  "We view our client relationships as partnerships built on trust, transparency, and mutual respect.",
              },
              {
                icon: <Award className="h-10 w-10 text-secondary" />,
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in every aspect of our practice, from legal expertise to client service.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-secondary" />,
                title: "Continuous Learning",
                description:
                  "We stay at the forefront of legal and technological developments to provide cutting-edge solutions.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-secondary" />,
                title: "Integrity",
                description:
                  "We operate with unwavering ethical standards and always put our clients' best interests first.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Legal Professionals" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our legal expertise can support your business goals and technological initiatives.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 h-auto text-lg">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  )
}

