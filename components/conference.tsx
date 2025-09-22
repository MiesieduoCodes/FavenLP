import SwiperGallery from "./swiperGallary";

export default function Conference() {
    return (
        <>
            <section id="conference" className="py-16">
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

                            <div className="md:w-1/2 rounded-2xl overflow-hidden w-full md:h-[80vh]">
                                <SwiperGallery />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}