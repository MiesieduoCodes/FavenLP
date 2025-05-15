'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const images = [
  '/images/post1.jpg',
  '/images/post3.jpg',
  '/images/post6.jpg',
  '/images/post9.jpg',
  '/images/post10.jpg',
  '/images/post7.jpg',
]

export default function SwiperGallery() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  // Trigger a re-render after refs are set
  const [navigationReady, setNavigationReady] = useState(false)

  useEffect(() => {
    setNavigationReady(true)
  }, [])

  return (
    <div className="w-full h-full">
      {navigationReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="h-full rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={900}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="mt-4 flex gap-4">
        <button ref={prevRef} className="p-4 bg-gray-300 rounded-full hover:bg-gray-400">
          <ArrowLeft />
        </button>
        <button ref={nextRef} className="p-4 bg-gray-300 rounded-full hover:bg-gray-400">
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
