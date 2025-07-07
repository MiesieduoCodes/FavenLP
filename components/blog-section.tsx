import Image from "next/image"
import Link from "next/link"



export default function BlogSection() {
  return (
    <section className="py-20 bg-background transition-theme">
      <div className="container flex flex-col gap-10 mx-auto px-4">

        <div className="flex w-full max-md:flex-col gap-12">
          <div className="flex md:w-1/2 w-full flex-col gap-4">
            <h2 className="text-3xl font-bold text-primary">Blog</h2>
            <h3 className="text-2xl font-semibold text-primary">
              Faven LP at NADPA Conference 2025
            </h3>
            <div className="flex flex-col text-base  leading-relaxed">
              <p>
                Delegates from <span style={{ color: "#003366", fontWeight: "bold" }}>Faven LP</span> were honoured to participate in the <span style={{ color: "#003366", fontWeight: "bold" }}>2025 NADPA Conference</span>, held at the prestigious Transcorp Hilton, Abuja, from the <span style={{ color: "#003366" }}>6th to 8th of May, 2025</span>.
              </p>

              <p>
                The conference proved to be an enriching experience—offering invaluable insights, engaging conversations, and strategic networking with leading figures in the global digital and data protection space.
              </p>

              <Link href={"/blog"} className="bg-primary mt-8 w-fit text-lg hover:border-primary border border-transparent ease-in-out transition-all duration-300 rounded-xl text-white px-6 py-3">
                Read more
              </Link>

            </div>

          </div>
          <div className="grid grid-cols-2 md:h-[60vh] gap-4 flex-1 ">
            {/* <div className="col-span-2  rounded-2xl overflow-hidden">
              <Image src={'/images/post1.jpg'} alt="#" height={300} width={900} className=""></Image>
            </div> */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post3.jpg'} alt="#" height={100} width={800} className="w-full object-top object-cover h-full"></Image>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post6.jpg'} alt="#" height={100} width={1000} className="w-full  object-cover h-full"></Image>
            </div>
            {/* <div className="col-span-2  rounded-2xl overflow-hidden">
              <Image src={'/images/post7.jpg'} alt="#" height={300} width={900} className=""></Image>
            </div> */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post9.jpg'} alt="#" height={100} width={800} className="w-full object-top scale-150 object-cover h-full"></Image>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <Image src={'/images/post10.jpg'} alt="#" height={100} width={1000} className="w-full object-cover scale-110 h-full"></Image>
            </div>
          </div>
        </div>


        <div className="flex w-full md:flex-row-reverse max-md:flex-col gap-12">
          <div className="flex md:w-1/2 w-full flex-col gap-4">
            <h3 className="text-2xl font-semibold text-primary capitalize">
              how to register as a data controller and data processor of major important In Nigeria
            </h3>
            <div className="flex flex-col text-base  leading-relaxed">
              <p>
                An organization or individual becomes a Data Controller or Processor of Major Importance (DCPMI) under law when its/their processing activities pose potential risks to personal data of Nigerian citizens under its/their disposal and where such processing of personal data is of particular value or significance to the economy, society or security of Nigeria as determined by the Nigeria Data Protection Commission (“Commission”).
              </p>

              <Link href={"/blog#dataController"} className="bg-primary mt-8 w-fit text-lg hover:border-primary border border-transparent ease-in-out transition-all duration-300 rounded-xl text-white px-6 py-3">
                Read more
              </Link>

            </div>

          </div>
          <div className="flex md:h-[50vh] gap-4 flex-1 ">
            <div className="w-full h-full  rounded-2xl overflow-hidden">
              <Image src={'/images/data-collection.jpeg'} alt="#" height={300} width={900} className="w-full h-full"></Image>
            </div>
            
          </div>
        </div>

        <div className="flex w-full md:flex-row pt-10 max-md:flex-col gap-12">
          <div className="flex md:w-1/2 w-full flex-col gap-4">
            <h3 className="text-2xl font-semibold text-primary capitalize">
             NDPC Slams Multichoice with ₦766M Fine Over Data Privacy Violations
            </h3>
            <div className="flex flex-col text-base  leading-relaxed">
              <p>
                Multichoice Nigeria has been fined ₦766,242,500 by the Nigeria Data Protection Commission for breaching key data protection laws. From mishandling personal information to cross-border data transfers without consent, this case sets a precedent for how seriously data privacy is now being enforced in Nigeria. The article explores what went wrong, why it matters, and the lessons every company should learn.
              </p>

              <Link href={"/blog#dataPrivacy"} className="bg-primary mt-8 w-fit text-lg hover:border-primary border border-transparent ease-in-out transition-all duration-300 rounded-xl text-white px-6 py-3">
                Read more
              </Link>

            </div>

          </div>
          <div className="flex md:h-[50vh] gap-4 flex-1 ">
            <div className="w-full h-full  rounded-2xl overflow-hidden">
              <Image src={'/images/data-privacy.jpeg'} alt="#" height={300} width={900} className="w-full h-full"></Image>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

