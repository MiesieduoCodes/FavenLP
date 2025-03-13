"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // Import useState for toggling text

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage text expansion

  // Function to toggle text visibility
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-16 bg-muted transition-theme">
      <div className="container lufga mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 lufga text-blue-900 text-center">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold lufga text-primary">Your case is in the right hands!</h3>
            <p className="text-foreground/80">
              At Faven LP, we pursue the highest quality legal solutions for our clients. As a specialized law firm, we
              combine expert legal insights with innovative technology strategy to deliver results that elevate your
              business.
            </p>
            <p className="text-foreground/80">
              Our team consists of knowledgeable attorneys who understand the challenges of modern business. We focus on
              enabling growth while maintaining compliance and minimizing risk.
            </p>

            {/* Accordion Section */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p className="text-foreground/80">
                We are dedicated to building constructive relationships founded on trust, genuine interest in
                client&apos;s goals, and establishing sustainable practices and thoughtful execution.
              </p>
              <p className="text-foreground/80">
                Our approach is tailored to meet the unique needs of each client, ensuring that we provide the best
                possible outcomes for your legal challenges.
              </p>
            </div>

            <div className="flex gap-4">
              {/* Toggle link for "See More/See Less" */}
              <button
                onClick={toggleText}
                className="text-yellow-300 hover:text-blue-700 focus:outline-none"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/aboutimage.jpg"
              alt="Legal team meeting"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <Link href="/about">
                <Button className="lufga hover:bg-white hover:text-blue-950 bg-blue-900 text-white"> Contact Us</Button>
              </Link>
        </div>
      </div>
    </section>
  );
}