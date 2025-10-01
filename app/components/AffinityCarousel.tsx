"use client"

import { useState, useRef } from "react"

const cards = [
  {
    emoji: "💰",
    title: "Cost & Accessibility",
    description: "Affordable, on-demand support",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/20"
  },
  {
    emoji: "🔒",
    title: "Trust & Privacy",
    description: "AI advice & data safety",
    bgClass: "bg-green-500/10",
    borderClass: "border-green-500/20"
  },
  {
    emoji: "🎮",
    title: "Gamification",
    description: "Progress, coins & rewards",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500/20"
  },
  {
    emoji: "💙",
    title: "Companionship",
    description: "Supportive friend feeling",
    bgClass: "bg-pink-500/10",
    borderClass: "border-pink-500/20"
  },
  {
    emoji: "🔔",
    title: "Habits & Reminders",
    description: "Daily nudges & exercises",
    bgClass: "bg-orange-500/10",
    borderClass: "border-orange-500/20"
  },
  {
    emoji: "✨",
    title: "Personalization",
    description: "Tailored to mood & progress",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/20"
  },
  {
    emoji: "⚠️",
    title: "App Frustrations",
    description: "Gaps to fill with empathy",
    bgClass: "bg-red-500/10",
    borderClass: "border-red-500/20"
  },
  {
    emoji: "🎯",
    title: "Core Themes",
    description: "Actionable design directions",
    bgClass: "bg-indigo-500/10",
    borderClass: "border-indigo-500/20"
  }
]

export function AffinityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (!scrollRef.current) return
    
    // Snap to nearest card
    const cardWidth = scrollRef.current.offsetWidth
    const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth)
    setCurrentIndex(Math.min(Math.max(0, newIndex), cards.length - 1))
    
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    if (!scrollRef.current || isDragging) return
    const cardWidth = scrollRef.current.offsetWidth
    const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth)
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8"
        style={{ scrollbarWidth: 'none' }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full snap-center p-8 rounded-xl ${card.bgClass} border ${card.borderClass} transition-all`}
          >
            <div className="text-center space-y-4">
              <div className="text-4xl">{card.emoji}</div>
              <h4 className="font-medium text-base">{card.title}</h4>
              <p className="text-sm opacity-70">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              scrollRef.current?.scrollTo({
                left: index * scrollRef.current.offsetWidth,
                behavior: 'smooth'
              })
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-[rgb(var(--accent))] w-6'
                : 'bg-white/30'
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
