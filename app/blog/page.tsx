'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import SwiperGallery from "@/components/swiperGallary"
import Link from 'next/link'
import DataProtectionArticle from '@/components/data-privacy'
import DataSubjectAccessRequests from '@/components/data-structure'


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
          <div  className="text-sm flex flex-wrap gap-1 italic text-gray-500 mb-6">
            <Link className=" underline hover:text-primary transition-all ease-in-out duration-300 " href={"https://www.linkedin.com/in/ikionana-ezekiel-"}>
            Ikionana Ezekiel</Link>,
            <Link className=" underline hover:text-primary transition-all ease-in-out duration-300 " href={"https://www.linkedin.com/in/akonanikosi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
            Kosisochukwu J Akonani
            </Link>, 
             <Link className=" underline hover:text-primary transition-all ease-in-out duration-300 " href={"https://www.linkedin.com/in/hephzibah-olutona-aicmc-237aa5227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
             Hephzibah Olutona.
             </Link>
          </div>

          <h2 className="text-2xl  font-semibold text-yellow-600 mb-4">
            How to Register as a Data Controller and Data Processor of Major Importance in Nigeria
          </h2>

          <p className="text-gray-700 mb-4">
            An organization or individual becomes a Data Controller or Processor of Major Importance (DCPMI) under law when its/their processing activities pose potential risks to personal data of Nigerian citizens under its/their disposal and where such processing of personal data is of particular value or significance to the economy, society or security of Nigeria as determined by the Nigeria Data Protection Commission (“Commission”). Hence, organizations or individuals are categorized into different risk levels based on the risk level associated with such processing activities. These categories are a creation of various data protection laws and guidelines in Nigeria. Specifically, Sections 5(d), 6(c), 44, and 66 of the Nigeria Data Protection Act (NDPA) 2023, Article 8 and Schedule 7 of the General Application and Implementation Directive (GAID), 2025, alongside the Data Controller or Data Processor Registration Guidance Notice provides for the designation and registration as DCPMI.
          </p>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Who is a Data Controller or Processor of Major Importance (DCPMI) in Nigeria?
            </h3>
            <p>
              Under the relevant privacy laws in Nigeria, you attain the status of a DCPMI if you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Are domicile, resident, or operating in Nigeria who processes or;</li>
              <li>Intends to process personal data of data subjects of more than such number within Nigeria as the Commission may prescribe,</li>
              <li>One who processes personal data of particular significance to the economy, society or security of Nigeria as the commission may designate. (Section 65 NDPA). These cut across various industries such as; Financial, Communication, Health, Education, Insurance, Export and Import, Aviation, Tourism, Oil and Gas, Electric Power.</li>
              <li>Has access to a filing system that process personal data of more than more than 200 data subject in 6 months.</li>
              <li>Under a fiduciary relationship with a data subject by reason of which it is expected to keep confidential information based on the harm that can be done to the data subject if such data controller or processor is not under the obligation imposed under the DCPMIs. (Section 1, 1(2) of Guidance Notice).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Classification of Data Controllers/Processors of Major Importance
            </h3>
            <p>
              Organizations that process personal data at various levels of risk are classified into
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">1. Major Data Processing – Ultra High Level (MDP – UHL ): Examples of organization under this include:  </h4>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li> Commercial Banks operating at national and regional levels,</li>
                <li>Telecommunication Companies</li>
                <li>Insurance Companies</li>
                <li>Multinational companies</li>
                <li>Public social media app developers and proprietors</li>
                <li>Electricity distribution companies</li>
                <li>Oil and Gas companies</li>
                <li>Public email App developers and proprietors</li>
                <li>Communication devices manufacturers</li>
                <li> Payment gateway service providers</li>
                <li> Process over 5000 data subjects within six months</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">2. Major Data Processing – Extra High Level (MDP – EHL): You are likely under this category if you are:</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Ministries, Department and Agencies (MDAs) of government</li>
                <li>Micro Finance Banks</li>
                <li>High Institutions</li>
                <li>Hospitals providing tertiary or secondary medical services</li>
                <li>Mortgage Banks.</li>
                <li>Process personal data of over 1000 data subjects within 6 months.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">3. Major Data Processing - Ordinary High levels (MDP –EHL): organization under this category include:</h4>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Small and Medium Scale Enterprises (that have access to personal data which they may share transfer, analyze, copy, compute or store in the course of carrying out their individual businesses)</li>
                <li>Primary and Secondary School</li>
                <li>Primary Health Centers</li>
                <li> Agents, contractors and vendors who engage with data subjects on behalf of the other organizations that are in the categories of MDL-UHL AND MDP-EHL</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              WHY IS REGISTRATION WITH THE NIGERIA DATA PROTECTION COMMISSION IMPORTANT?
            </h3>
            <p>
              Registering as a Data Controller or Processor of Major Importance serves the following purposes:
            </p>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Evidence of Compliance: Registration with the NDPC demonstrates your organization&apos;s compliance with the relevant laws. It provides verifiable and rebuttable evidence that your organization adheres to mandatory regulatory requirement, helping establish your business as trustworthy and accountable.</li>
              <li>Build Customer Trust and Confidence: In today&apos;s digital world, trust is everything. Customers are more likely to interact with businesses that take proactive organizational, technical and regulatory measures to protect their personal data. Registration signals that your organization values data privacy and security, building long-term confidence with clients, users and partners.</li>
              <li>Avoid Regulatory Fines and penalties: Failure to comply with the NDPA 2023, NDPC guidelines or other relevant data protection regulation can result in significant fines and penalties. Registration ensures that your organization is aligned with the regulatory framework, mitigating risks and non-compliance.</li>
              <li>Secure Business Continuity: Compliance is key to long-term business success. Organization with a strong regulatory framework can navigate Nigeria&apos;s evolving data protection landscape more effectively, ensuring continuous relevance and competitive while safeguarding their operations against legal risks.</li>
              <li> It Facilitates Supervision and Guidance: Registration and licensing gives the relevant data protection authorities&apos; visibility into the processing activities of an organization and enables easier communication with the Commission in the event of liaising with the commission. This can also provide tailored guidance and monitor compliance effectively. It equally shows commitment to accountability and prima facie good faith in data processing.</li>
              <li>Appointment of Data Protection Officer: In Nigeria, a requirement of successful registration is the appointment of a Data Protection Officer who must be a citizen of Nigeria. This in turn assists the organization with the mandatory provision to designate a data protection officer. The DPO may be a member of staff with recognized certification or fulfil the tasks on the basis of a service contract.</li>
              <li>Entry into the Commission&apos;s Register for Data Controllers or Processor of Major Importance: Successfully registered and licensed businesses or institutions are entered into the register of data controllers and processors of major importance with the Commission, thereby demonstrating accountability, transparency and trust with both partners, customers and the regulators. The Commission publishes on its website the register of data controllers and data processors of major importance that may have duly registered with it and updates the register a least once annually.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              REQUIREMENTS FOR REGISTRATION OF DATA CONTROLLERS/ PROCESSORS OF MAJOR IMPORTANCE WITH THE NIGERIA DATA PROTECTION COMMISSION
            </h3>
            <p>
              Registration as a DCPMI follows a series steps with questions and details to be filled out on the forms provided on the Commission&apos;s website on opening an account on the registration portal. These steps include the following;
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-4">
              <li>
                <span className="font-medium text-gray-800">STEP 1: Data Controller/Processor Information:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>What type of business do you run?</li>
                  <li>What is your Corporate Affairs Commission (CAC) RC number? If you are an individual provide your National Identification Number (NIN).</li>
                  <li>What is your name (individual) or the name of the Organization?</li>
                  <li>What is your official Contact Address?</li>
                  <li>What is your official Phone number?</li>
                  <li>What is your official Email Address?</li>
                  <li>What is your operational Sector?</li>
                  <li>What state in the country do you function in?</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">STEP 2: Data Processing Details:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>What is the number of data subjects?</li>
                  <li>What are the categories of data recipients? That is, organizations you share personal data with?</li>
                  <li>Do you transfer data to other countries?</li>
                  <li>What are your purposes for data processing?</li>
                  <li>Describe personal data processed by the organization? (sensitive or non-sensitive personal data)</li>
                  <li>What is the Category of data processed?</li>
                  <li></li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">STEP 3: Data Protection Officer Details:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>National Identification Number (NIN)</li>
                  <li> First name</li>
                  <li> Last name</li>
                  <li> Official email Address</li>
                  <li>Official phone number</li>
                  <li> Official Contact Address</li>
                  <li>Certificate (Evidence of certified training as a data protection officer)</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">STEP 4: Data Controller/Processor Representative(s):</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>First name</li>
                  <li>Last name</li>
                  <li>Official email address</li>
                  <li>Official phone number</li>
                  <li> Official contact address</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-gray-800">STEP 5: Safety Precautions:</span>
                <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                  <li>What is the risk level of data processing activities within your organization?</li>
                  <li>What security measures does your organizations adopt? (Safeguards & security Measures)</li>
                </ul>
              </li>
              <li className='font-medium '>Technical measures: Please tick which measure (s) you have in place</li>
              <p>
                Network security and firewalls,
                Data security systems,
                Data loss prevention solutions,
                Data recovery systems,
                Data encryption,
                Audit trail and loggings,
                Data access authorization,
                Data minimization
              </p>
              <li className='font-medium '>Organizational measures: Please tick which measure(s) you have in place </li>
              <p>
                Data retention policies,
                Data protection policies,
                Remediation and incidence response systems,
                Specialized trainings,
                Publicity of data subject rights,
                Active grievance redress Mechanism,
                Cooke Consent DPO Designation,
                Regular Security Audits,
                Vendor and Third-Party Agreement,
                Data Privacy Impact Assessment (DPIAs)
              </p>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Step 7: Verify Information:
            </h3>
            <p className="text-gray-700">
              Check relevant information before submission and payment.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Step 8: Payment:
            </h3>
            <p>
              Depending on your answers to assessment provided in your Data Inventory and the

              NDPC DC/PC Registration Guideline Notice.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Step 9: Finish
            </h3>
            <p>
              After payment is made, the registration must be submitted and concluded by clicking on &quot;finish&quot;. Upon successful registration it registered name is published on the website as a DCPMI.
            </p>
          </section>


          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              SEIZURE AND REMOVAL AS DATA CONTROLLER OR PROCESSOR OF MAJOR IMPORTANCE
            </h3>
            <p>
              Where a data controller or processor no longer qualifies as a data controller or data processor of major importance, they can request removal from the register by providing the information required by the Commission through any electronic submission system provided by the commission, or in the absence of which email to an address that the Commission shall publish on its website. However, such seizure or removal from the register does not preclude the former data controller and processor of paying any outstanding fees from the then- current or any prior annual registration periods.
            </p>
          </section>
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              WHO ARE NOT DATA CONTROLLER OR PROCESSOR OF MAJOR IMPORTANCE?
            </h3>
            <p>
              The GAID provides a list of institutions that are not DCPMI. These include:
            </p>
            <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
              <li>Traders or artisans who do not transmit personal data as a trade or business object to other data controllers or processors that may process the transmitted personal data for their business goals.</li>
              <li>Traders with less than fifteen (15) employees, or Artisans who do not keep any specific filing system of personal data relating to their customers except routine phone contacts files, receipts data, contact addresses and electronic mail addresses.</li>
              <li>A Community of Friends, Professionals or People of Common Interest who interact on Social Media Platforms.</li>
            </ul>
          </section>


          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              WHICH INSTITUTIONS ARE EXEMPTED FROM REGISTRATION AS DATA CONTROLLERS OR DATA PROCESSORS OF MAJOR IMPORTANCE?
            </h3>
            <p>
              In line with section 44(6) of the NDP Act, the Commission exempts the following categories of data controllers of major importance from registration:
            </p>
            <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
              <li>Community-Based Associations;</li>
              <li>Faith-Based Organizations;</li>
              <li>Foreign Embassies and High Commissions;</li>
              <li>Judicial establishments or bodies carrying out adjudicatory functions; and</li>
              <li>Multi-governmental Organizations.</li>
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

        <DataProtectionArticle/>
        <DataSubjectAccessRequests/>
      </section>
    </>

  )
}

