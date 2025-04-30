import { CodeIcon as LawJustice, Users, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: <LawJustice className="h-10 w-10 text-primary mx-auto" />,
    title: "Proven Resolution",
    description:
      "Our in-depth expertise guarantees exceptional service and successful implementation to resolve your compliance or regulatory issues.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary mx-auto" />,
    title: "Client-Focused Relationships",
    description:
      "Never consider our clients as just cases or files. We create genuine connections built on trust, understanding, and mutual respect.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary mx-auto" />,
    title: "Protection & Regulatory Compliance",
    description:
      "Providing comprehensive safeguards for businesses, safeguarding your operations, and navigating regulatory landscapes.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary mx-auto" />,
    title: "Control and Flexibility",
    description:
      "We tailor our service to your specific needs. Control the scope, set your budget, and enjoy flexibility with our pricing and service options.",
  },
]

export default function FeatureSection() {
  return (
    <section className="relative py-20 bg-red-500 cursor-pointer transition-theme">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-[url('/images/choose.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/50"
      />

      <div className="relative container mx-auto px-4">
        <div className="text-center lufga mb-16">
          <h2 className="text-3xl text-amber-100 font-bold mb-4">Why Choose Us</h2>
          <p className="text-amber-100 max-w-3xl mx-auto">
            Our clients trust us with navigating complex regulatory environments. We combine industry knowledge and
            legal expertise to deliver dependable advice you can count on, customized specifically to address your
            unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lufga md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 text-center hover:shadow-md transition-shadow"
              style={{ background: 'rgba(222, 210, 188, 0.9)' }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-blue-950 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

