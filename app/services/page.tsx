
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    id: "regulatory",
    title: "Regulatory Compliance & Privacy",
    description: "Navigate complex regulatory frameworks with confidence",
    image: "/images/security.jpeg",
    features: [
      "Data privacy compliance (GDPR, CCPA, etc.)",
      "Industry-specific regulatory guidance",
      "Compliance audits and risk assessments",
      "Privacy policy development and implementation",
      "Breach response planning and management",
    ],
    cta: "Ensure Your Compliance",
  },
  {
    id: "corporate",
    title: "Corporate Governance",
    description: "Build strong frameworks for effective business management",
    image: "/images/governance.jpeg",
    features: [
      "Board structure and responsibilities",
      "Executive compensation planning",
      "Shareholder agreements and relations",
      "Corporate policy development",
      "Governance audits and recommendations",
    ],
    cta: "Strengthen Your Governance",
  },
  {
    id: "ip",
    title: "Intellectual Property & Technology Law",
    description: "Protect and leverage your most valuable assets",
    image: "/images/intellectual_prop.jpeg",
    features: [
      "Patent application and enforcement",
      "Trademark and copyright protection",
      "Technology licensing agreements",
      "IP portfolio management",
      "Trade secret protection strategies",
    ],
    cta: "Protect Your Innovations",
  },
  {
    id: "contracts",
    title: "Contract Drafting & Negotiation",
    description: "Secure favorable terms that protect your interests",
    image: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Commercial contract review and drafting",
      "SaaS and technology agreements",
      "Vendor and supplier contracts",
      "Employment and consultant agreements",
      "Strategic negotiation support",
    ],
    cta: "Optimize Your Agreements",
  },
  {
    id: "dispute",
    title: "Dispute Resolution",
    description: "Resolve conflicts efficiently while preserving relationships",
    image: "https://images.pexels.com/photos/7841412/pexels-photo-7841412.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Mediation and arbitration services",
      "Pre-litigation strategy development",
      "Online dispute resolution",
      "Settlement negotiation",
      "Litigation management when necessary",
    ],
    cta: "Resolve Your Disputes",
  },
  {
    id: "digital",
    title: "Digital Transformation Advisory",
    description: "Align your technology initiatives with legal requirements",
    image: "https://images.pexels.com/photos/8867268/pexels-photo-8867268.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: [
      "Legal framework for digital products",
      "AI and automation compliance",
      "Blockchain and cryptocurrency guidance",
      "Digital contract implementation",
      "Technology procurement advice",
    ],
    cta: "Transform Legally",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive legal solutions tailored for technology-focused businesses
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 !== 0 ? "md:col-start-2" : ""}>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-700 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? "md:col-start-1" : ""}`}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {["Technology", "Finance", "Healthcare", "E-commerce", "Manufacturing", "Professional Services"].map(
              (industry, index) => (
                <div key={index} className="bg-white px-10 py-4 w-fit rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary text-nowrap">{industry}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our team to discuss your specific legal needs.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 h-auto text-lg">
            Request a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}

