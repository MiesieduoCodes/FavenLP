import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "5 Things To Understand Before Signing Cloud Storage Contracts",
    excerpt:
      "Uncover the critical fine print that could put your business at risk and how to ensure your data remains protected legally...",
    image: "/images/image.jpg",
  },
  {
    title: "Adoption of Technology in B2B: A Case For Online Dispute Resolution",
    excerpt:
      "Explore how digital transformation is revolutionizing conflict resolution between businesses and creating more efficient paths to resolution...",
    image: "/images/ADR.jpg",
  },
  {
    title: "The Art of Negotiating a Savings Win-Win Solution",
    excerpt:
      "Learn practical techniques that can help both parties feel satisfied with the outcome while protecting your business interests...",
    image: "/images/Lawperson.jpg",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-background transition-theme">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Blog</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={450}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">{post.title}</h3>
                <p className="text-card-foreground/80 mb-4">{post.excerpt}</p>
                <Link href="/blog">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

