import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ikionana Ezekiel",
    role: "Managing Partner",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sandra Ebikeniye Best",
    role: "Senior Partner",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dumebi Eriobunah",
    role: "Senior Partner",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Akonani J. Kosisochukwu",
    role: "Data Protection Intern",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Hephzibah Olutona",
    role: "Data Protection Intern",
    image: "/placeholder.svg?height=400&width=300",
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-muted transition-theme">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Meet The Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="flex items-center justify-between p-4" style={{ background: 'rgba(201, 191, 172, 1)' }}>
                <div>
                  <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                  <p className="text-blue-950 text-sm">{member.role}</p>
                </div>
                {/* Larger and more pronounced arrow */}
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
