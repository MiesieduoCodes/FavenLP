"use client";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
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

              {/* <h3 className="text-4xl  lufga text-primary">Your case is in the right hands!</h3> */}
            </div>
            <div className={`text-gray-800 pt-10 space-y-4 ${isExpanded ? "pt-20" : ""}`}>
              <p>
                At <span className="font-bold italic text-[#0a3d62]">FAVEN LP</span>, we understand the intersection of
                <span className="font-bold italic text-[#0a3d62]"> technology, law, and business</span>.
                As a <span className="font-bold italic text-[#0a3d62]">premier IT law firm</span>, we specialize in providing
                expert legal counsel to clients navigating the complexities of the digital world.
              </p>

              <p>
                With a strong focus on <span className="font-bold italic text-[#0a3d62]">tech, law, and representation</span>,
                our firm delivers <span className="font-bold italic text-[#0a3d62]">strategic solutions</span> with a soft touch —
                ensuring every client feels <span className="font-bold italic text-[#0a3d62]">heard, valued, and understood</span>.
              </p>


            </div>

            {/* Accordion Section */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[500px]" : "max-h-0"
                }`}
            >
              <p>
                We are committed to building <span className="font-bold italic text-[#0a3d62]">lasting relationships</span> based on trust,
                guiding our clients through challenges with
                <span className="font-bold italic text-[#0a3d62]"> unwavering support</span> and
                <span className="font-bold italic text-[#0a3d62]"> unparalleled expertise</span>.
              </p>

              <p>
                Whether you&apis;re a <span className="font-bold italic text-[#0a3d62]">startup</span>, a
                <span className="font-bold italic text-[#0a3d62]"> growing business</span>, or a
                <span className="font-bold italic text-[#0a3d62]"> seasoned tech leader</span>,
                <span className="font-bold italic text-[#0a3d62]"> FAVEN LP</span> is your
                <span className="font-bold italic text-[#0a3d62]"> safe and reliable legal partner</span> — empowering you to
                <span className="font-bold italic text-[#0a3d62]"> innovate and thrive</span> in today’s fast-paced, tech-driven world.
              </p>

              <p>
                Let us provide the <span className="font-bold italic text-[#0a3d62]">comfort and security</span> you need to
                <span className="font-bold italic text-[#0a3d62]"> move forward — with confidence</span>.
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

        <Link className="mx-auto " href="/contact">
          <button className="lufga hover:bg-white border border-transparent hover:border-primary rounded-full py-3 px-6  hover:text-blue-950 transition-all ease-in-out duration-200 bg-foreground text-white"> Contact Us</button>
        </Link>
      </div>
    </section>
  );
}