'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import SwiperGallery from "@/components/swiperGallary"


export default function BlogPage() {


  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 50) // give Next.js time to mount the DOM
      }
    }
  }, [pathname])
  return (

    <>
      <section className="flex flex-col w-full gap-10">
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <section className="bg-primary text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Insights and analysis on legal technology, compliance, and business strategy
              </p>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16">
            <div className="md:px-20 mx-auto px-4">
              <div className="gap-8">
                <div className="flex w-full max-md:flex-col gap-12">
                  <div className="flex md:w-1/2 w-full flex-col gap-4">
                    {/* <h2 className="text-3xl font-bold text-primary">Blog</h2> */}
                    <h3 className="text-3xl font-semibold text-primary">
                      Faven LP at NADPA Conference 2025
                    </h3>
                    <div className="space-y-4 text-base leading-relaxed">
                      <p>
                        Delegates from <span style={{ color: "#003366", fontWeight: "bold" }}>Faven LP</span> were honoured to participate in the <span style={{ color: "#003366", fontWeight: "bold" }}>2025 NADPA Conference</span>, held at the prestigious Transcorp Hilton, Abuja, from the <span style={{ color: "#003366" }}>6th to 8th of May, 2025</span>.
                      </p>

                      <p>
                        The conference proved to be an enriching experience—offering invaluable insights, engaging conversations, and strategic networking with leading figures in the global digital and data protection space.
                      </p>

                      <p>
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
                      </p>
                    </div>
                    {/* Blog Posts */}
                  </div>

                  <div className="md:w-1/2 w-full md:h-[80vh]">
                    <SwiperGallery />
                  </div>
                </div>


              </div>
            </div>
          </section>
        </div>

        <section id="dataController" className="py-16 md:px-20 px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Privacy Compliance Series 1.2
          </h1>
          <p className="text-sm italic text-gray-500 mb-6">
            Courtesy: Ikionana Ezekiel, Esq.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            How to Register as a Data Controller and Data Processor of Major Importance in Nigeria
          </h2>

          <p className="text-gray-700 mb-4">
            An organization or individual becomes a Data Controller or Processor of Major Importance (DCPMI)
            when their processing activities pose risks to personal data of Nigerian citizens, or are significant
            to the economy, society, or national security. These categories stem from the Nigeria Data Protection Act (NDPA) 2023,
            GAID 2025, and other guidelines from the Nigeria Data Protection Commission.
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Who is a Data Controller or Processor of Major Importance (DCPMI) in Nigeria?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Domiciled, resident, or operating in Nigeria and processes personal data</li>
              <li>Processes personal data of data subjects exceeding thresholds set by the Commission</li>
              <li>Processes data of significance to the economy, society, or security of Nigeria</li>
              <li>Accesses personal data of more than 200 data subjects within 6 months</li>
              <li>Has fiduciary duties requiring data confidentiality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Classification of Data Controllers/Processors of Major Importance
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">1. MDP – UHL (Ultra High Level):</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Commercial Banks (national & regional)</li>
                <li>Telecommunication Companies</li>
                <li>Insurance & Multinational Companies</li>
                <li>Public app developers (social media, email)</li>
                <li>Electricity, Oil & Gas Companies</li>
                <li>Payment gateways, device manufacturers</li>
                <li>Process over 5000 data subjects in 6 months</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">2. MDP – EHL (Extra High Level):</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>MDAs of government</li>
                <li>Microfinance and Mortgage Banks</li>
                <li>Hospitals, Higher Institutions</li>
                <li>Process over 1000 data subjects in 6 months</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">3. MDP – OHL (Ordinary High Level):</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>SMEs handling and sharing personal data</li>
                <li>Primary/Secondary Schools & Health Centers</li>
                <li>Vendors/contractors handling data for higher-tier organizations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Why Register with the NDPC?
            </h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Proof of legal compliance and trustworthiness</li>
              <li>Builds customer confidence</li>
              <li>Avoid regulatory fines and penalties</li>
              <li>Ensures business continuity and relevance</li>
              <li>Facilitates supervision and tailored guidance</li>
              <li>Requires appointment of a certified Nigerian DPO</li>
              <li>Entry into NDPC&apos;s official public register</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Registration Requirements & Steps
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-4">
              <li>
                <span className="font-medium text-gray-800">Data Controller/Processor Information:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>Business type, CAC RC/NIN</li>
                  <li>Name, contact, email, phone, sector, and state</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">Data Processing Details:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>Volume, purpose, and category of personal data</li>
                  <li>Data transfers and recipient organizations</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">Data Protection Officer Details:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>NIN, name, contact, certificate</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">Representative(s):</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>Name, email, phone, address</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">Safety Precautions:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>Risk level, technical & organizational safeguards</li>
                  <li>Security audits, consent systems, DPO designation, DPIAs</li>
                </ul>
              </li>
              <li>Review and verify all information</li>
              <li>Make payment based on category</li>
              <li>Click &quot;Finish&quot; to complete and appear in public register</li>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Removal from Register
            </h3>
            <p className="text-gray-700">
              If you no longer qualify as a DCPMI, you may request removal through the Commission&apos;s portal or published email.
              However, outstanding fees must still be paid for prior registration periods.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Entities NOT Considered DCPMI
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Traders/artisans not transmitting personal data to others</li>
              <li>Businesses with less than 15 staff and no formal data system</li>
              <li>Social groups on media platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Exempt Institutions
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Community-Based Associations</li>
              <li>Faith-Based Organizations</li>
              <li>Foreign Embassies & High Commissions</li>
              <li>Judicial establishments</li>
              <li>Multigovernmental organizations</li>
            </ul>
          </section>

          <p className="text-gray-800 font-medium flex flex-col gap-4 mt-10">
            <span>
              Registration as a data controller or processor of major importance with the Nigeria Data Protection Commission (NDPC) not only shows adherence to legal obligations but also gains a competitive edge in building trust, avoiding sanctions and sustaining growth in an increasingly data-driven economy.
            </span>

            <span>
              At Faven LP, our expert team of data protection and privacy compliance help organizations like yours stay compliance with relevant privacy legislations and keeps you ahead of the curve. Click here to begin your registration as a data controller or processor of major importance with the Commission.
            </span>
          </p>
        </section>
      </section>
    </>

  )
}

