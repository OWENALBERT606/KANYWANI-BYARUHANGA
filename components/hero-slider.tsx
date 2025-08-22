"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen, TrendingUp, Users, Lightbulb } from "lucide-react"

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  image: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Knowledge Base",
    subtitle: "Comprehensive Insights",
    description: "Access in-depth articles, research papers, and expert analysis on complex topics that matter to you.",
    icon: <BookOpen className="w-8 h-8" />,
    image: "/john/IMG-20250614-WA0129.jpg",
  },
  {
    id: 2,
    title: "Political Insights",
    subtitle: "Stay Informed",
    description: "Get the latest political analysis, policy breakdowns, and expert commentary on current events.",
    icon: <TrendingUp className="w-8 h-8" />,
    image: "/john/IMG-20250614-WA0129.jpg",
  },
  {
    id: 3,
    title: "Community Driven",
    subtitle: "Expert Contributors",
    description: "Join a community of thought leaders, researchers, and experts sharing valuable insights.",
    icon: <Users className="w-8 h-8" />,
     image: "/john/IMG-20250614-WA0129.jpg",
  },
  {
    id: 4,
    title: "Fresh Perspectives",
    subtitle: "Innovative Ideas",
    description: "Discover new viewpoints and innovative solutions to today's most pressing challenges.",
    icon: <Lightbulb className="w-8 h-8" />,
     image: "/john/IMG-20250614-WA0129.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.yellow-600)_0%,transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-24 lg:py-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-yellow-500 animate-slide-in-left">
                {slides[currentSlide].icon}
                <span className="text-sm font-medium uppercase tracking-wider">{slides[currentSlide].subtitle}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slide-in-left animation-delay-200">
                <span className="bg-gradient-to-r from-foreground to-yellow-600 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg animate-slide-in-left animation-delay-400">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animation-delay-600">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-600/90 text-yellow-600-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                N'osigaki
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-yellow-600-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Mp'omurro
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 animate-slide-in-left animation-delay-800">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-yellow-600 scale-125" : "bg-border hover:bg-yellow-600/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-slide-in-right">
            <Card className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border-0">
              <div className="aspect-[4/3] relative">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Slide Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={prevSlide}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={nextSlide}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-600/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full animate-pulse animation-delay-1000" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-card">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
