"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
// import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Message from Contact Form");
    const body = encodeURIComponent(
      `Hi i'm ${formData.name}\nMy Phone number is: ${formData.phone}\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:ikionanaezekiel@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-[#0C1B33] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Contact Us</h2>
            <p className="text-lg text-gray-300">
              Feel free to contact us for any business, media, or personal inquiries:
            </p>
            <p>we operate virtually and a means for them to reach us tied to
              <Link href={"mailto:ikionanaezekiel@gmail.com"} className="hover:text-blue-300"> ikionanaezekiel@gmail.com</Link>
            </p>

            <div className="space-y-4">
              <div className="w-full max-md:flex-col gap-6 flex md:gap-20">
                <h3 className="text-2xl font-semibold">Address</h3>
                <p className="text-gray-300  leading-relaxed">
                  Bayelsa Tech Hub, 4th Floor, Transperacy Plaza,
                  <br />
                  Besides CBN Headquarters,
                  <br />
                  Oxbow lake Road, Swali, Yenagoa
                  <br />
                  Bayelsa State.
                </p>
              </div>

              <div className="flex w-full max-md:flex-col gap-6 md:gap-20">
                <h3 className="text-2xl font-semibold">Hours</h3>
                <p className="text-gray-300">Monday - Saturday: 9am - 4pm</p>
              </div>

              <div className="flex w-full max-md:flex-col gap-6 md:gap-20">
                <h3 className="text-2xl font-semibold">Phone</h3>
                <div className="text-gray-300 ">
                  <p>+2349068126885</p>
                  <Link className="" href={"mailto:ikionanaezekiel@gmail.com"}> ikionanaezekiel@gmail.com</Link>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-12 h-[300px] rounded-lg overflow-hidden">
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

          {/* Right Column - Contact Form */}
          <div className="bg-white flex items-center justify-center p-4 md:p-8 w-full rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6 flex-col gap-4 w-full">
              <div className="w-full">
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#F4F4F4] border-none h-12 text-gray-900"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="w-full">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#F4F4F4] border-none h-12 text-gray-900"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="w-full">
                <Textarea
                  placeholder="Message..."
                  className="w-full bg-[#F4F4F4] border-none min-h-[250px] text-gray-900 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0C1B33] hover:bg-[#0C1B33]/90 text-white rounded-full text-lg font-medium py-3"
              >
                Submit
              </button>
            </form>
          </div>

        </div>


      </div>
    </section>
  )
}

