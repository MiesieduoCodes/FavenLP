"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="bg-[#0C1B33] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Contact Us</h2>
            <p className="text-lg text-gray-300">
              Feel free to contact us for any business, media, or personal inquiries:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Address</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bayelsa Tech Hub, 4th Floor, Transperacy Plaza,
                  <br />
                  Besides CBN Headquarters,
                  <br />
                  Oxbow lake Road, Swali, Yenagoa
                  <br />
                  Bayelsa State.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Hours</h3>
                <p className="text-gray-300">Monday - Saturday: 9am - 4pm</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Contact</h3>
                <div className="text-gray-300 space-y-1">
                  <p>+2349068126885</p>
                  <p>info@favenlp.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-[#F4F4F4] border-none h-12 text-gray-900"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#F4F4F4] border-none h-12 text-gray-900"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#F4F4F4] border-none h-12 text-gray-900"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message..."
                  className="w-full bg-[#F4F4F4] border-none min-h-[150px] text-gray-900 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0C1B33] hover:bg-[#0C1B33]/90 text-white h-12 text-lg font-medium rounded"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

    {/* Map Section */}
    <div className="mt-12 h-[400px] rounded-lg overflow-hidden">
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
    </section>
  )
}

