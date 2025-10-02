"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Smartphone, Plane, Wrench, Gamepad, Brain, Heart } from "lucide-react"

const projects = [
  {
    id: "sprout",
    icon: <Heart className="w-6 h-6" />,
    title: "Sprout – AI Mental Health iOS App",
    description: "1st Place @ Build4Good 2025",
    categories: ["React Native", "OpenAI API", "FastAPI"],
    image: "/sprout-tn.png", // Thumbnail image
    // video: "", // No video for now
    href: "/projects/sprout",
  },
  {
    id: "lockheed-2025",
    icon: <Plane className="w-6 h-6" />,
    title: "SWE Intern @ Lockheed Martin",
    description: "Built scalable software solutions for teams",
    categories: ["Angular.js", "C#", "TypeScript"],
    image: "/lockheed-tn2.png", // Thumbnail image
    // video: "/lockheedvid.mp4", Video to play on hover
    href: "/projects/lockheed-2025",
  },
  {
    id: "scale-ai-2025",
    icon: <Brain className="w-6 h-6" />,
    title: "Technical Advisor Intern @ Scale AI",
    description: "Improved LLM reasoning & performance",
    categories: ["AI/ML", "C++", "Python"],
    image: "/scaleai.png", // Thumbnail image
    video: "", // No video for now
    href: "/projects/scale-ai-2025",
  },
  {
    id: "lockheed",
    icon: <Plane className="w-6 h-6" />,
    title: "SWE Intern @ Lockheed Martin",
    description: "Full-Stack CRUD tool for aircraft parts management",
    categories: ["React.js", "AWS", "Alteryx", "SQL"],
    image: "/lockheed-tn.png", // Thumbnail image
    video: "/lockheedvid.mp4", // Video to play on hover
    href: "/projects/lockheed",
  },
  {
    id: "trade-ai",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Trade AI: Mobile Trading Assistant",
    description: "AI-powered instant technical analysis for trading",
    categories: ["React Native", "AI/ML", "Azure"],
    image: "/trade-tn.png", // Thumbnail image
    video: "/tradevid.mp4", // Video to play on hover
    href: "/projects/trade-ai",
  },
  {
    id: "pipeiq",
    icon: <Wrench className="w-6 h-6" />,
    title: "SWE Intern @ PipeIQ",
    description: "Building software for AI-powered sales pipelines",
    categories: ["Next.js", "AI/ML", "AWS", "Python"],
    image: "/pipeiq-tn.png", // Thumbnail image
    video: "/pipeiq-vid.mp4", // Video to play on hover
    href: "/projects/pipeiq",
  },
  {
    id: "roblox-game",
    icon: <Gamepad className="w-6 h-6" />,
    title: "Cross-Platform Roblox Game",
    description: "A Multiplayer Horror game built in Roblox Studio",
    categories: ["Lua", "Game Dev", "UI/UX Design"],
    image: "/Roblox.jpg", // Thumbnail image
    video: "/roblox.gif", // GIF to play on hover
    href: "/projects/roblox-game",
  },
]

export function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [cardWidth, setCardWidth] = useState(0)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
  
  // Track scroll position for preventing navigation during drag
  const scrollStartPos = useRef<number>(0)
  const touchStartTime = useRef<number>(0)
  const [hasDragged, setHasDragged] = useState(false)

  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.project-card')
      if (card) {
        setCardWidth(card.clientWidth + 24) // 24 is the gap between cards
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      const isMobile = window.innerWidth <= 768
      const scrollByAmount = isMobile ? scrollAmount - 4 : scrollAmount + 100 // Scroll more for desktop

      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" })

      setTimeout(() => {
        if (scrollRef.current) {
          setCanScrollLeft(scrollRef.current.scrollLeft > 0)
          setCanScrollRight(
            scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
          )
        }
      }, 300)
    }
  }

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id]
    if (video) {
      video.play()
    }
  }

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id]
    if (video) {
      video.pause()
      video.currentTime = 0 // Restart the video
    }
  }

  const handleTouchStart = () => {
    if (!scrollRef.current) return
    scrollStartPos.current = scrollRef.current.scrollLeft
    touchStartTime.current = Date.now()
    setHasDragged(false)
  }

  const handleTouchEnd = () => {
    if (!scrollRef.current) return
    const scrollDiff = Math.abs(scrollRef.current.scrollLeft - scrollStartPos.current)
    const touchDuration = Date.now() - touchStartTime.current
    
    // Consider it a drag if scroll position changed by more than 5px
    // or if the touch lasted more than 200ms (likely a scroll gesture)
    if (scrollDiff > 5 || touchDuration > 200) {
      setHasDragged(true)
      // Reset after a short delay to allow next interaction
      setTimeout(() => setHasDragged(false), 100)
    }
  }

  return (
    <div className="relative project-section">
      {/* Header and buttons */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl tracking-tight">Featured work</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className={`scroll-button p-2 rounded-full transition-colors ${canScrollLeft ? 'bg-white/15' : 'bg-white/5'}`}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`scroll-button p-2 rounded-full transition-colors ${canScrollRight ? 'bg-white/10' : 'bg-white/5'}`}
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <hr className="mb-8 opacity-20" />

      {/* Project cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto project-scroll pb-4 snap-x snap-mandatory"
        onScroll={(e) => {
          const target = e.target as HTMLDivElement
          setCanScrollLeft(target.scrollLeft > 0)
          setCanScrollRight(target.scrollLeft < target.scrollWidth - target.clientWidth)
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ 
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch' // Smooth momentum scrolling on iOS
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <Link 
              href={project.href}
              onClick={(e) => {
                if (hasDragged) {
                  e.preventDefault()
                }
              }}
            >
              <div
                className="space-y-4 group" // Apply group class here
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                <div className="flex items-center gap-2">
                  <div className="text-[rgb(var(--accent))]">{project.icon}</div>
                  <h3 className="text-sm font-medium tracking-tight">{project.title}</h3>
                </div>

                <p className="text-2xl font-regular tracking-tight leading-tight">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span key={category} className="px-3 py-1 text-sm rounded-full bg-white/10">
                      {category}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  {project.video ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-2xl transition-opacity duration-300 group-hover:opacity-0"
                      />
                      {project.video.endsWith('.gif') ? (
                        <img
                          src={project.video}
                          alt={project.title}
                          className="object-cover w-full h-full rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      ) : (
                        <video
                          ref={(el: HTMLVideoElement | null) => {
                            if (el) {
                              videoRefs.current[project.id] = el
                            } else {
                              delete videoRefs.current[project.id]
                            }
                          }}
                          src={project.video}
                          loop
                          muted
                          className="object-cover w-full h-full rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      )}
                    </>
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .project-card {
          flex: 0 0 auto;
          width: 350px; /* Fixed width for project cards */
        }

        .project-scroll {
          scroll-snap-type: x mandatory;
          user-select: none; /* Prevent text selection while dragging */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .project-scroll:active {
          cursor: grabbing;
        }

        @media (hover: none) {
          .project-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}