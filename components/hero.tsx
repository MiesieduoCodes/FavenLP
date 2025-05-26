"use client"
import { useRouter } from "next/navigation"

export default function Hero() {
  const title = "book consultation"

  const router = useRouter()

  const handleNavigate = (title: string) => {
    const encodedTitle = encodeURIComponent(title)
    router.push(`/contact?service=${encodedTitle}`)
  }
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
        <div className="max-w-3xl  ">
          <span className="block lufga text-2xl mb-6 text-[#9B7F4E] ">Welcome to Faven LP </span>
          <h1 className="font-bold against flex  text-4xl leading-tight mb-8">
            <div className="flex w-full flex-wrap">
              Achieving
              <span className="mx-2 w-fit text-[#9B7F4E]">
                lasting
              </span>
              technological
              <span className="mr-2 w-fit text-[#9B7F4E]">
                solutions
              </span>
              through legal compliance
            </div>

          </h1>
          <p className="text-lg lufga md:text-xl mb-8 text-primary-foreground/80">
            We bridge the gap between law, business and technology - delivering practical legal guidance that drives result
          </p>
          <button onClick={() => handleNavigate(title)} className="border cursor-pointer hover:bg-[#9b7f3e] hover:text-white transition-all ease-in-out duration-200  border-[#9B7F4E] text-[#9B7F4E] rounded-full py-4 px-6 bg-white">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

