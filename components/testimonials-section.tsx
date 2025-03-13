"use client"; // Ensure this is a client component

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Faven LP provided exceptional guidance through our corporate restructuring. Their expertise in technology law made complex decisions straightforward.",
    author: "Sarah Johnson",
    title: "CEO, TechVision Inc.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Working with the Faven team transformed our approach to compliance. They understood our needs and delivered practical solutions that work in the real world.",
    author: "Michael Chen",
    title: "CTO, Dataflow Systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The regulatory landscape seemed overwhelming until we partnered with Faven. Their team made compliance manageable and helped us navigate through challenging legal waters.",
    author: "Emily Rodriguez",
    title: "COO, FinSec Partners",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The regulatory landscape seemed overwhelming until we partnered with Faven. Their team made compliance manageable and helped us navigate through challenging legal waters.",
    author: "Emily Rodriguez",
    title: "COO, FinSec Partners",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The regulatory landscape seemed overwhelming until we partnered with Faven. Their team made compliance manageable and helped us navigate through challenging legal waters.",
    author: "Emily Rodriguez",
    title: "COO, FinSec Partners",
    image: "/placeholder.svg?height=60&width=60",
  },
];

export default function TestimonialsSection() {
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
          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
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
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
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
          </button>

          {/* Swiper Container */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                  <p className="text-lg text-gray-700 italic mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}