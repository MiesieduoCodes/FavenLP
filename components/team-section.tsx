"use client"

import Image from "next/image";
import { useState } from "react";
import { MoveUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "ikionana Ezekiel",
    role: "Managing Partner",
    image: "/images/teamMembers/team-member2.jpg",
  },
  {
    name: "Akonani J. Kosisochukwu",
    role: "Data Protection Intern",
    image: "/images/teamMembers/team-member4.jpg",
  },
  {
    name: "Prosper I. Akinlawon",
    role: "Lead, Media & Publicity.",
    image: "/images/teamMembers/team-member1.jpg",
  },
  // {
  //   name: "Sandra Ebikeniye Best",
  //   role: "Senior Partner",
  //   image: "/images/teamMembers/team-member3.jpg",
  // },

  // {
  //   name: "Hephzibah Olutona",
  //   role: "Data Protection Intern",
  //   image: "/placeholder.svg?height=400&width=300",
  // }
];

// Custom Image Component with Fallback
function TeamImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={300}
      height={400}
      className="w-full h-[350px] object-cover"
      onError={() => setImgSrc("/images/placeholder-image.png")} // fallback path
    />
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-muted transition-theme">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Meet The Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card flex flex-col justify-between rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <TeamImage src={member.image} alt={member.name} />
              </div>
              <div className="flex flex-1 items-center justify-between p-4" style={{ background: 'rgba(201, 191, 172, 1)' }}>
                <div>
                  <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                  <p className="text-blue-950 text-sm">{member.role}</p>
                </div>
                <div className="flex justify-center items-center">
                  <MoveUpRight
                    className="bg-white text-blue-950 p-3 rounded-lg transition-all duration-300 hover:bg-secondary hover:scale-110"
                    size={40}
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
