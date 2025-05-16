import Image from "next/image"
import Link from "next/link"
// import { Button } from "@/components/ui/button"

// const blogPosts = [
//   {
//     title: "5 Things To Understand Before Signing Cloud Storage Contracts",
//     excerpt:
//       "Uncover the critical fine print that could put your business at risk and how to ensure your data remains protected legally...",
//     image: "/images/image.jpg",
//   },
//   {
//     title: "Adoption of Technology in B2B: A Case For Online Dispute Resolution",
//     excerpt:
//       "Explore how digital transformation is revolutionizing conflict resolution between businesses and creating more efficient paths to resolution...",
//     image: "/images/ADR.jpg",
//   },
//   {
//     title: "The Art of Negotiating a Savings Win-Win Solution",
//     excerpt:
//       "Learn practical techniques that can help both parties feel satisfied with the outcome while protecting your business interests...",
//     image: "/images/Lawperson.jpg",
//   },
// ]

export default function BlogSection() {
  return (
    <section className="py-20 bg-background transition-theme">
      <div className="container mx-auto px-4">

        {/* <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card"
            >
            <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={450}
            height={250}
            className="w-full h-48 object-cover"
            />
            <div className="p-6">
            <h3 className="font-bold text-xl mb-3 text-primary">{post.title}</h3>
            <p className="text-primary mb-4">{post.excerpt}</p>
                <Link className="font-semibold text-primary" href="/blog">
              Read more
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex w-full max-md:flex-col gap-12">
          <div className="flex md:w-1/2 w-full flex-col gap-4">
            <h2 className="text-3xl font-bold text-primary">Blog</h2>
            <h3 className="text-2xl font-semibold text-primary">
              Faven LP at NADPA Conference 2025
            </h3>
            <div className="space-y-4 text-base  leading-relaxed">
              <p>
                Delegates from <span style={{ color: "#003366", fontWeight: "bold" }}>Faven LP</span> were honoured to participate in the <span style={{ color: "#003366", fontWeight: "bold" }}>2025 NADPA Conference</span>, held at the prestigious Transcorp Hilton, Abuja, from the <span style={{ color: "#003366" }}>6th to 8th of May, 2025</span>.
              </p>

              <p>
                The conference proved to be an enriching experience—offering invaluable insights, engaging conversations, and strategic networking with leading figures in the global digital and data protection space.
              </p>

              <Link href={"/blog"} className="bg-primary text-lg hover:border-primary border border-transparent ease-in-out transition-all duration-300 rounded-xl text-white px-6 py-3">
                Read more
              </Link>
              {/* <p>
                Our team had the privilege of interacting with esteemed industry leaders and dignitaries, including:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li><span style={{ color: "#003366" }}>Dr. Vincent Olatunji</span>, National Commissioner/CEO, Nigeria Data Protection Commission (NDPC)</li>
                <li><span style={{ color: "#003366" }}>Immaculate Kassait</span>, Commissioner, Office of the Data Protection Commissioner (ODPC), Kenya</li>
                <li><span style={{ color: "#003366" }}>Derek Ho</span>, Deputy Chief Privacy Officer, AI & Data Responsibility, Mastercard</li>
                <li><span style={{ color: "#003366" }}>Susan</span>, Privacy Professional, Mastercard</li>
                <li><span style={{ color: "#003366" }}>Bojana Bellamy</span>, President, Centre for Information Policy Leadership (CIPL) and <span style={{ color: "#003366" }}>Mark Smith</span>, also delegate from CIPL</li>
                <li><span style={{ color: "#003366" }}>Adewale Obadare</span>, Founder and Chief Visionary Officer (CVO), Digital Encode Limited</li>
                <li><span style={{ color: "#003366" }}>Dr. Favour Femi-Oyewole</span>, Group Chief Information Security Officer, Access Bank | Forbes Best of Africa Outstanding Cybersecurity Leader | Forbes Technology Council Member</li>
              </ul>

              <p>
                Notably, <span style={{ color: "#003366", fontWeight: "bold" }}>CIPL</span> in collaboration with the <span style={{ color: "#003366", fontWeight: "bold" }}>Global System for Mobile Communication (GSMA)</span> hosted an official side event on <span style={{ color: "#003366" }}>&quot; Data Policy and Governance for AI: Fostering Responsible Innovation and Adoption.&quot;</span>
              </p>

              <p>
                Representing Faven LP were:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><span style={{ color: "#003366" }}>Ikionana Ezekiel</span>, Principal Partner</li>
                <li><span style={{ color: "#003366" }}>Oluwatoboloba Adewum</span>, Partner</li>
                <li><span style={{ color: "#003366" }}>Kosisochukwu</span>, IT Compliance and Startup Advisor</li>
                <li><span style={{ color: "#003366" }}>Prosper I. Akinlawon</span>, Media and Publicity Lead</li>
              </ul>

              <p>
                At <span style={{ color: "#003366", fontWeight: "bold" }}>Faven LP</span>, we remain committed to strengthening privacy, data protection, and regulatory compliance in Nigeria and across Africa. Participating in events like the <span style={{ color: "#003366" }}>NADPA Conference</span> allows us to stay at the forefront of conversations shaping the future of the digital economy.
              </p> */}
            </div>

          </div>
          <div className="grid grid-cols-2 md:h-[60vh] gap-4 flex-1 ">
            {/* <div className="col-span-2  rounded-2xl overflow-hidden">
              <Image src={'/images/post1.jpg'} alt="#" height={300} width={900} className=""></Image>
            </div> */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post3.jpg'} alt="#" height={100} width={800} className="w-full object-top object-cover h-full"></Image>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post6.jpg'} alt="#" height={100} width={1000} className="w-full  object-cover h-full"></Image>
            </div>
            {/* <div className="col-span-2  rounded-2xl overflow-hidden">
              <Image src={'/images/post7.jpg'} alt="#" height={300} width={900} className=""></Image>
            </div> */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post9.jpg'} alt="#" height={100} width={800} className="w-full object-top scale-150 object-cover h-full"></Image>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post10.jpg'} alt="#" height={100} width={1000} className="w-full object-cover scale-110 h-full"></Image>
            </div>
          </div>
        </div>
        {/* <div className="mt-10 text-center">
          <Link href="/blog">
            <button className="px-4 py-3 hover:bg-white hover:border-primary border border-transparent hover:text-primary bg-foreground rounded-full text-white">
              View all posts 
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}

