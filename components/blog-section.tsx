import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "Faven LP at NADPA Conference 2025",
    description: (
      <>
        Delegates from{" "}
        <span style={{ color: "#003366", fontWeight: "bold" }}>Faven LP</span>{" "}
        were honoured to participate in the{" "}
        <span style={{ color: "#003366", fontWeight: "bold" }}>
          2025 NADPA Conference
        </span>
        , held at the prestigious Transcorp Hilton, Abuja, from the{" "}

      </>
    ),
    link: "/blog#conference",
    imageGroup: [
      { src: "/images/post3.jpg", className: "object-top" },
      { src: "/images/post6.jpg" },
      { src: "/images/post9.jpg", className: "object-top scale-150" },
      { src: "/images/post10.jpg", className: "scale-110" },
    ],
    reverse: false,
    multiImage: true,
  },
  {
    title:
      "How to register as a data controller and data processor of major important In Nigeria",
    description: (
      <>
        An organization or individual becomes a Data Controller or Processor of
        Major Importance (DCPMI) under law when its/their processing activities
        pose potential risks to personal data of Nigerian citizens
      </>
    ),
    link: "/blog#dataController",
    imageGroup: [{ src: "/images/data-collection.jpeg" }],
    reverse: true,
    multiImage: false,
  },
  {
    title:
      "NDPC Slams Multichoice with ₦766M Fine Over Data Privacy Violations",
    description: (
      <>
        Multichoice Nigeria has been fined ₦766,242,500 by the Nigeria Data
        Protection Commission for breaching key data protection laws.
      </>
    ),
    link: "/blog#dataPrivacy",
    imageGroup: [{ src: "/images/blog-news.jpeg" }],
    reverse: false,
    multiImage: false,
  },
  {
    title:
      "DATA SUBJECT ACCESS REQUESTS (DSARS): BEST PRACTICES FOR MEETING LEGAL REQUIREMENTS",
    description: (
      <>
        A Data Subject Access Request (DSAR) is a request directed to the
        organization by a data subject (individual), granting the data subject
        right to access information about his/her personal data the organization
        is processing.
      </>
    ),
    link: "/blog#dataSubject",
    imageGroup: [{ src: "/images/data-subject.jpeg" }],
    reverse: true,
    multiImage: false,
  },
  {
    title:
      "What the Nigeria Tax Act, 2025 Means for Technological Companies in Nigeria: 7 Things Every Startup Founder Needs to Know.",
    description: (
      <>
        The Nigeria Tax Act, 2025 is a major reform in Nigeria&apos;s tax
        system.
      </>
    ),
    link: "/blog#nigerianTax",
    imageGroup: [{ src: "/images/nigerian-tax.jpeg" }],
    reverse: false,
    multiImage: false,
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-background transition-theme">
      <div className="flex w-full items-center py-10 justify-center text-center">
        <h2 className="text-4xl font-bold text-primary ">Blog</h2>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 items-start  gap-16 mx-auto px-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`flex flex-1 flex-col-reverse max-md:flex-col gap-12`}
          >
            {/* Text Section */}
            <div className="flex w-full flex-col gap-4">

              <h3 className="text-xl font-semibold text-primary capitalize">
                {post.title}
              </h3>
              <div className="flex flex-col text-base leading-relaxed">
                <p>{post.description}</p>
                <Link
                  href={post.link}
                  className="text-primary cursor-pointer font-semibold text-xl mt-4 hover-text-primary/50 ease-in-out"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`flex w-full ${post.multiImage ? "grid grid-cols-2 gap-4 " : ""
                } `}
            >
              {post.imageGroup.map((img, i) => (
                <div
                  key={i}
                  className="w-full h-full rounded-2xl overflow-hidden bg-gray-100"
                >
                  <Image
                    src={img.src}
                    alt={post.title}
                    height={400}
                    width={900}
                    className={`w-full h-full object-cover ${img.className ?? ""
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
