import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function QualitySection() {
  return (
    <section id="quality" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src="https://res.cloudinary.com/dtifkfdmk/image/upload/v1753268055/community_nl5jpa.png?height=400&width=600"
              alt="Quality and Infrastructure"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Commitment to Quality</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Garvin Pumps, quality is not just a promise — it's the core of our engineering. We follow strict
              manufacturing standards and leverage advanced technology to ensure every pump delivers unmatched
              performance, durability, and efficiency.
            </p>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Precision-engineered submersible and centrifugal pumps built for high performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Corrosion-resistant stainless steel components for long-lasting durability.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Energy-efficient motors designed to minimize power consumption while maximizing output.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Comprehensive quality checks at every stage — from casting to final assembly.</span>
              </li>
            </ul>
            {/* Removed the stray </ul> tag here */}
          </div>
        </div>
      </div>
    </section>
  )
}
