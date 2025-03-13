import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-full bg-primary text-primary-foreground overflow-hidden transition-theme">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/bgimage.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 py-24 mx-auto">
        <div className="max-w-3xl ">
          <h1 className="font-bold against text-4xl leading-tight mb-8">
            <span className="block lufga text-2xl mb-6 text-primary-foreground/80 ">Welcome to Faven LP </span>
            Achieving lasting technological solutions through legal compliance
          </h1>
          <p className="text-lg lufga md:text-xl mb-8 text-primary-foreground/80">
          We bridge the Gap between law, business and technology - delivering practical legal guidance that drives result
          </p>
          <Button className="bg-amber-200 mb-4 rounded-full hover:text-amber-200 hover:bg-black text-black font-bold h-auto duration-500 p-3">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

