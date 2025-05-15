"use client"

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const searchParams = useSearchParams();
    const serviceTitle = searchParams.get("service") || "";

    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!formRef.current) return;

        emailjs.sendForm(
            "service_5946ay9",     // Replace with your EmailJS service ID
            "template_rm6z17f",    // Replace with your EmailJS template ID
            formRef.current,
            "zZljp-c12W6mwkno9"      // Replace with your EmailJS public key
        ).then(() => {
            setSuccessMessage("Message sent successfully!");
            formRef.current?.reset();
        }).catch((error) => {
            console.error("Email sending failed:", error);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="bg-white text-black rounded-lg p-8 h-fit shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input name="user_name" className="!py-3 !px-6 border border-gray-200 rounded-2xl" id="name" placeholder="Your name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input name="user_email" className="!py-3 !px-6 border border-gray-200 rounded-2xl" id="email" type="email" placeholder="Your email" required />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input name="user_phone" className="!py-3 !px-6 border border-gray-200 rounded-2xl" id="phone" placeholder="Your phone number" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                        name="subject"
                        className="!py-3 !px-6 border border-gray-200 rounded-2xl"
                        id="subject"
                        placeholder="How can we help you?"
                        required
                        defaultValue={serviceTitle}
                        readOnly={!!serviceTitle}
                    />
                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea name="message" id="message" placeholder="Please provide details about your inquiry..." rows={5} required />
                </div>

                <button type="submit" className="w-full py-3 rounded-2xl bg-primary hover:bg-primary/90 text-white" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                </button>

                {successMessage && (
                    <p className="text-green-600 text-sm text-center mt-2">{successMessage}</p>
                )}
            </form>
        </div>
    );
}
