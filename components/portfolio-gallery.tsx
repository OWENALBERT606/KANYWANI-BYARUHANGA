"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export interface PortfolioImage {
  id: string
  src: string
  alt: string
  title?: string
  category?: "campaign" | "community" | "event" | "speech" | "charity"
  date?: string
  description?: string
}

const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    id: "1",
    src: "/portfolio/WhatsApp Image 2025-11-23 at 11.58.07.jpeg",
    alt: "Campaign rally",
  },
  {
    id: "2",
    src: "/portfolio/WhatsApp Image 2025-11-23 at 11.58.08 (2).jpeg",
    alt: "Speaking engagement",
  },
  {
    id: "3",
    src: "/portfolio/WhatsApp Image 2025-11-23 at 11.58.09 (1).jpeg",
    alt: "Community engagement",
  },
  {
    id: "5",
    src: "/portfolio/WhatsApp Image 2025-11-23 at 11.58.08.jpeg",
    alt: "Campaign speech",
  },
  
]

export function PortfolioGallery() {
  const [shuffledImages, setShuffledImages] = useState<PortfolioImage[]>([])

  useEffect(() => {
    const shuffled = [...PORTFOLIO_IMAGES].sort(() => Math.random() - 0.5)
    setShuffledImages(shuffled)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffledImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg bg-muted aspect-square hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={100}
              height={80}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
