import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">About Garvin Pumps</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Garvin Pumps is a leading manufacturer of high-performance water pumps, serving the needs of agriculture, industry, and households across India. With a focus on reliability, efficiency, and durability, we specialize in <b> Submersible, Centrifugal,</b> and <b>Monoblock</b> pumps that are built to handle even the toughest conditions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our pumps are engineered using premium materials like <b>corrosion-resistant stainless steel</b> and are powered
              by energy-efficient motors to ensure consistent water flow and long-term performance. Whether it’s drawing
              water from deep borewells, irrigating farmlands, or supplying water to homes and factories, Garvin Pumps
              delivers results that customers trust.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Garvin Pumps, we don’t just move water. We deliver <b>confidence, reliability,</b> and <b>peace</b> of mind with
              every pump.
            </p>
          </div>
          <div className="flex justify-center font-bold">
            <Image
              src="https://res.cloudinary.com/dtifkfdmk/image/upload/v1753277939/About_it33cz.png"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
