"use client"
// import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"



export default function ContactComponent() {

    const searchParams = useSearchParams()
    const serviceTitle = searchParams.get("service") || ""
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto">Get in touch with our team to discuss your legal needs</p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg p-8 h-fit shadow-md">
                            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input className="!py-3 !px-6 border border-gray-200 rounded-2xl" id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input className="!py-3 !px-6 border border-gray-200 rounded-2xl" id="email" type="email" placeholder="Your email" required />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                    <input className="!py-3 !px-6 border border-gray-200 rounded-2xl" id="phone" placeholder="Your phone number" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <input
                                        className="!py-3 !px-6 border border-gray-200 rounded-2xl"
                                        id="subject"
                                        placeholder="How can we help you?"
                                        required
                                        value={serviceTitle}
                                        readOnly
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={5} required />
                                </div>

                                <button type="submit" className="w-full py-3 rounded-2xl bg-primary hover:bg-primary/90 text-white">
                                    Submit
                                </button>
                            </form>

                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                                <p className="text-gray-700 mb-8">
                                    Feel free to contact us for any inquiries or to schedule a consultation. Our team is ready to assist
                                    you with your legal needs.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                                            <p className="  leading-relaxed">
                                                Bayelsa Tech Hub, 4th Floor, Transperacy Plaza,
                                                <br />
                                                Besides CBN Headquarters,
                                                <br />
                                                Oxbow lake Road, Swali, Yenagoa
                                                <br />
                                                Bayelsa State.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                                            <p>+2349068126885</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                                            <Link className="" href={"mailto:ikionanaezekiel@gmail.com"}> ikionanaezekiel@gmail.com</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="h-6 w-6 text-primary mr-4 mt-0.5" />
                                        <div>
                                            <h3 className="text-2xl w-[30%] font-semibold">Hours</h3>
                                            <p className="">Monday - Saturday: 9am - 4pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-lg overflow-hidden shadow-md h-80 bg-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5325287543586!2d6.2917568!3d4.9076056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a05622743bcc3%3A0xaa026f4b0cafb83a!2sBayelsa+Tech+Hub!5e0!3m2!1sen!2sng!4v1635789072963!5m2!1sen!2sng"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: "What areas of law does your firm practice?",
                                answer:
                                    "We specialize in technology law, regulatory compliance, corporate governance, intellectual property, and privacy law.",
                            },
                            {
                                question: "How do I schedule a consultation?",
                                answer:
                                    "You can schedule a consultation by filling out our contact form, calling our office, or sending us an email. We'll get back to you within 24 hours to arrange a meeting.",
                            },
                            {
                                question: "Do you offer virtual consultations?",
                                answer:
                                    "Yes, we offer virtual consultations via video conference for clients who prefer remote meetings or are located outside our immediate geographic area.",
                            },
                            {
                                question: "What are your fees?",
                                answer:
                                    "Our fee structure varies based on the services required. We offer hourly rates, flat fees for certain services, and retainer arrangements. We'll discuss fees during your initial consultation.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-primary mb-3">{faq.question}</h3>
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

