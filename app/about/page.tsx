import Image from "next/image"
// import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"

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
          <div className="grid md:grid-cols-2 gap-12 h-full items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="text-gray-800 space-y-4">
                <p>
                  At <span className="font-bold italic text-[#0a3d62]">FAVEN LP</span>, we understand the intersection of
                  <span className="font-bold italic text-[#0a3d62]"> technology, law, and business</span>.
                  As a <span className="font-bold italic text-[#0a3d62]">premier IT law firm</span>, we specialize in providing
                  expert legal counsel to clients navigating the complexities of the digital world.
                </p>

                <p>
                  With a strong focus on <span className="font-bold italic text-[#0a3d62]">tech, law, and representation</span>,
                  our firm delivers <span className="font-bold italic text-[#0a3d62]">strategic solutions</span> with a soft touch —
                  ensuring every client feels <span className="font-bold italic text-[#0a3d62]">heard, valued, and understood</span>.
                </p>

                <p>
                  We are committed to building <span className="font-bold italic text-[#0a3d62]">lasting relationships</span> based on trust,
                  guiding our clients through challenges with
                  <span className="font-bold italic text-[#0a3d62]"> unwavering support</span> and
                  <span className="font-bold italic text-[#0a3d62]"> unparalleled expertise</span>.
                </p>

                <p>
                  Whether you&apis;re a <span className="font-bold italic text-[#0a3d62]">startup</span>, a
                  <span className="font-bold italic text-[#0a3d62]"> growing business</span>, or a
                  <span className="font-bold italic text-[#0a3d62]"> seasoned tech leader</span>,
                  <span className="font-bold italic text-[#0a3d62]"> FAVEN LP</span> is your
                  <span className="font-bold italic text-[#0a3d62]"> safe and reliable legal partner</span> — empowering you to
                  <span className="font-bold italic text-[#0a3d62]"> innovate and thrive</span> in today’s fast-paced, tech-driven world.
                </p>

                <p>
                  Let us provide the <span className="font-bold italic text-[#0a3d62]">comfort and security</span> you need to
                  <span className="font-bold italic text-[#0a3d62]"> move forward — with confidence</span>.
                </p>
              </div>

            </div>
            <div className="relative rounded-lg h-[60%] overflow-hidden">
              <Image
                src="/images/team.jpeg"
                alt="Our team working together"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-14 w-14 text-secondary" />,
                title: "Trust",
                description:
                  "As a virtual-first firm, we engage with clients without physical contact. That’s why trust is at the heart of everything we do. We are committed to transparency, integrity, and reliability in every interaction.",
              },
              {
                icon: <Award className="h-14 w-14 text-secondary" />,
                title: "Excellence",
                description:
                  "We do not just meet expectations—we exceed them. Excellence is our standard, driving us to deliver top-tier services with precision and professionalism.",
              },
              {
                icon: <BookOpen className="h-14 w-14 text-secondary" />,
                title: "Collaboration & Partnership",
                description:
                  "No one thrives in isolation, and no great system is built alone. We believe in the power of strategic partnerships, fostering collaborations rooted in trust to achieve long-term success.",
              },
              // {
              //   icon: <Briefcase className="h-10 w-10 text-secondary" />,
              //   title: "Integrity",
              //   description:
              //     "We operate with unwavering ethical standards and always put our clients' best interests first.",
              // },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600 italic">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      {/* <section className="py-16 bg-primary text-white">
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
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our legal expertise can support your business goals and technological initiatives.
          </p>
          <Link href="/contact" className="bg-secondary hover:bg-secondary/90 rounded-xl text-primary font-bold px-8 py-6 h-auto text-lg">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}

