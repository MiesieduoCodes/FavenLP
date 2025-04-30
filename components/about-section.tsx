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
    <section className="py-16 bg-muted relative z-100 transition-theme">
      <div className="absolute w-full  h-60 top-0 z-0 left-0">
        <Image src={"/images/Patterns/bg-pattern.png"} height={100} width={100} className="flex h-full object-cover object-bottom w-full" alt={""}></Image>
      </div>
      <div className="container relative z-10 lufga mx-auto px-4 py-10">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold lufga ">About Us</h2>

              <h3 className="text-4xl  lufga text-primary">Your case is in the right hands!</h3>
            </div>
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[500px]" : "max-h-0"
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
                className="text-primary hover:text-popover-foreground focus:outline-none"
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

        </div>
      </div>
      <div className="flex w-full ">

        <Link className="mx-auto " href="/about">
          <button className="lufga hover:bg-white rounded-full py-3 px-6  hover:text-blue-950 transition-all ease-in-out duration-200 bg-foreground text-white"> Contact Us</button>
        </Link>
      </div>
    </section>
  );
}