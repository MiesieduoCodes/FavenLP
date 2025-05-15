"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "We just want to say a big thank you for your amazing work.  From handling our NDPC, Korapay legal document and SCUML licenses to delivering a top-notch Data Protection Awareness Training, everything was done with so much professionalism and dedication. Your work ethic and attention to detail made the whole process smooth, and we truly appreciate you. We wouldn’t have had anyone else handle it better. Looking forward to working with you again!",
    author: "Abdullateef Abiodu",
    title: "Head of Operations Gold Elite Innovative Deals Limited (Gold Elite Deals)  Fintech/Edu tech.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Ikionana Ezekiel, You excedded our expectations with your training. Thank you so much.",
    author: "",
    title: "The Practice Manager of a renounced DPCO",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "When Ikionana Ezekiel took the Data Protection Awareness Training at Golearn, I walked into the room feeling confident that I wasn't going to hear something new. I was well acquainted with Data and the Nigerian Law. She however fired in every possible direction, brought many new perspectives, showed possible pitfalls and overall upped my knowledge of Data Issues in Nigeria. She was succinct!",
    author: "Israel Akinola",
    title: "Head, Golearn Campus Ambassadors' Program. Golearn",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "I learnt a lot from your training. I want to thank you for educating us on the new trends and development in the technological spaces, especially on data Protection and Privacy. ",
    author: "",
    title: "Student Trainee, Benny International High School.",
    image: "/placeholder.svg?height=60&width=60",
  },
];

// Custom Image Component with Fallback
function TeamImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt || "User image"}
      width={40}
      height={40}
      className="w-full h-full object-cover rounded-full"
      onError={() => setImgSrc("/images/placeholder-image.png")} // fallback path
    />
  );
}

// ... rest of your imports and code unchanged

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20 transition-theme">
      <div className="absolute inset-0 bg-[url('/images/Testimonial.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60"></div>

      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Opinions About Us
        </h2>
        <h3 className="text-xl text-gray-200 text-center mb-12">
          What Our Clients Say About Us
        </h3>

        <div className="relative max-w-6xl mx-auto">
          {/* Swiper Container */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => {
              const isExpanded = expanded === index;
              const previewLength = 130;

              return (
                <SwiperSlide key={index}>
                  <div className="p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                    <p className="text-lg text-gray-700 italic mb-4">
                      &quot;
                      {isExpanded
                        ? testimonial.quote
                        : testimonial.quote.length > previewLength
                        ? testimonial.quote.slice(0, previewLength) + "..."
                        : testimonial.quote}
                      &quot;
                    </p>

                    {testimonial.quote.length > previewLength && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold mb-6 self-start transition-colors"
                        aria-expanded={isExpanded}
                        aria-controls={`testimonial-text-${index}`}
                      >
                        {isExpanded ? "Show Less ▲" : "Read More ▼"}
                      </button>
                    )}

                    <div className="flex border-t-2 border-t-gray-400 pt-4 items-center mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <TeamImage src={testimonial.image} alt={testimonial.author} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.author || "Anonymous"}
                        </h4>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* NEW: Navigation Buttons outside swiper, centered below */}
          <div className="flex justify-center space-x-6 mt-8">
            <button
              className="custom-swiper-button-prev bg-white text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="custom-swiper-button-next bg-white text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

