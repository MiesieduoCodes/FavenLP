import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Tag, Calendar, User } from "lucide-react"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: "cloud-storage-contracts",
    title: "5 Things To Understand Before Signing Cloud Storage Contracts",
    excerpt:
      "Uncover the critical fine print that could put your business at risk and how to ensure your data remains protected legally and technically when using cloud services.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Alexandra Martin",
    date: "March 15, 2023",
    category: "Data Privacy",
    tags: ["Cloud Computing", "Contracts", "Data Protection"],
  },
  {
    id: "online-dispute-resolution",
    title: "Adoption of Technology in B2B: A Case For Online Dispute Resolution",
    excerpt:
      "Explore how digital transformation is revolutionizing conflict resolution between businesses and creating more efficient paths to resolution without traditional litigation.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Daniel Roberts",
    date: "February 28, 2023",
    category: "Dispute Resolution",
    tags: ["B2B", "Legal Tech", "ODR"],
  },
  {
    id: "negotiation-win-win",
    title: "The Art of Negotiating a Savings Win-Win Solution",
    excerpt:
      "Learn practical techniques that can help both parties feel satisfied with the outcome while protecting your business interests throughout complex negotiations.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sophia Chen",
    date: "January 12, 2023",
    category: "Business Strategy",
    tags: ["Negotiation", "Strategy", "Business Relations"],
  },
  {
    id: "ai-legal-issues",
    title: "Emerging Legal Issues in Artificial Intelligence Implementation",
    excerpt:
      "A comprehensive overview of the legal challenges businesses face when implementing AI solutions and strategies for addressing these concerns proactively.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Evelyn Chambers",
    date: "December 5, 2022",
    category: "Technology Law",
    tags: ["AI", "Compliance", "Innovation"],
  },
  {
    id: "remote-work-policies",
    title: "Crafting Remote Work Policies That Protect Your Business",
    excerpt:
      "Key legal considerations for businesses transitioning to remote or hybrid work models, including privacy, security, and employment law implications.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Benjamin J. Richardson",
    date: "November 18, 2022",
    category: "Employment Law",
    tags: ["Remote Work", "Policy", "Compliance"],
  },
  {
    id: "intellectual-property-startups",
    title: "Intellectual Property Essentials for Technology Startups",
    excerpt:
      "A guide to protecting your innovations from the early stages of your business, with practical steps for startups with limited legal budgets.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Olivia Parker",
    date: "October 30, 2022",
    category: "Intellectual Property",
    tags: ["Startups", "IP Protection", "Innovation"],
  },
]

const categories = [
  "All Categories",
  "Data Privacy",
  "Technology Law",
  "Intellectual Property",
  "Compliance",
  "Dispute Resolution",
  "Business Strategy",
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights and analysis on legal technology, compliance, and business strategy
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Search */}
              <div className="rounded-lg border p-4">
                <h3 className="font-bold text-primary mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-lg border p-4">
                <h3 className="font-bold text-primary mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block py-1 hover:text-primary transition-colors ${
                          index === 0 ? "text-primary font-medium" : "text-gray-700"
                        }`}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="rounded-lg border p-4">
                <h3 className="font-bold text-primary mb-4">Popular Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex items-start space-x-3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={80}
                        height={60}
                        className="rounded w-20 h-16 object-cover"
                      />
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-56 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <h2 className="text-xl font-bold mb-3 text-primary hover:text-primary/80 transition-colors">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <Button className="bg-primary hover:bg-primary/90 text-white">Read More</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex" aria-label="Pagination">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center border-t border-b border-gray-300 bg-white px-3 py-2 text-sm font-medium text-primary"
                    aria-current="page"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center border-t border-b border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center border-t border-b border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

