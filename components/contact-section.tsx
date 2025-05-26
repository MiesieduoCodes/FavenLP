"use client"

import type React from "react"

// import { useState } from "react"
import Link from "next/link"
import ContactForm from "./contactForm"
// import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C1B33] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Contact Us</h2>
           

            <div className="space-y-4">
              <div className="w-full max-md:flex-col gap-6 flex md:gap-20">
                <h3 className="text-2xl w-[30%] font-semibold">Address</h3>
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
                <h3 className="text-2xl w-[30%] font-semibold">Hours</h3>
                <p className="text-gray-300">Monday - Saturday: 9am - 4pm</p>
              </div>

              <div className="flex w-full max-md:flex-col gap-6 md:gap-20">
                <h3 className="text-2xl w-[30%] font-semibold">Contact</h3>
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
          <ContactForm/>

        </div>


      </div>
    </section>
  )
}

