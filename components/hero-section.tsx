"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const images = [
  "https://res.cloudinary.com/dtifkfdmk/image/upload/v1753266992/Garvin_Fles_nyjprr.png",
  "https://res.cloudinary.com/dtifkfdmk/image/upload/v1753266993/flex_2_zphpru.png",
  "https://res.cloudinary.com/dtifkfdmk/image/upload/v1753277939/About_it33cz.png",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
  {/* Background slideshow - wrap each Image in a padded div */}
  {images.map((src, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        i === currentIndex ? "opacity-100 z-0" : "opacity-0"
      } p-4 md:p-8`} // ✅ Add padding here
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={`Slide ${i + 1}`}
        fill
        quality={100}
        priority={i === 0}
        className="object-cover object-center rounded-xl" // Optional rounded corners
      />
    </div>
  ))}
</section>

  )
}
