"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FadeIn } from "../components/FadeIn"
import { useState } from "react"
import { sofiaSans } from "../utils/fonts" // Updated import statement

const projects = [
  {
    id: "trade-ai",
    date: "2023",
    title: "Trade AI: Mobile Trading Assistant",
    description: "A React Native app that helps users make informed trading decisions using AI-powered analysis.",
    stats: {
      value: "1000+",
      label: "ACTIVE USERS",
    },
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/trade-ai",
  },
  {
    id: "roblox-game",
    date: "2022",
    title: "Immersive Roblox Experience",
    description: "A multiplayer Roblox game featuring dynamic environments and interactive gameplay mechanics.",
    stats: {
      value: "10K+",
      label: "PLAYERS",
    },
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/roblox-game",
  },
]

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center max-w-[800px] mx-auto">
        <Link
          href="/"
          className={`text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity text-xl ${sofiaSans.className} flex items-center`}
        >
          <span className="block md:hidden text-3xl">SK</span>
          <span className="hidden md:block text-3xl">SARVESH K</span>
        </Link>
        <nav className="space-x-4 md:space-x-8">
          <Link
            href="/projects"
            className="text-sm text-[rgb(var(--foreground))] hover:underline transition-all duration-300"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm text-[rgb(var(--accent))] hover:underline transition-all duration-300"
          >
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12 sm:py-24 max-w-[800px] mx-auto">
        <FadeIn delay={200}>
          <h1 className="text-4xl sm:text-7xl font-normal mb-12 sm:mb-24 leading-tight flex items-center">
            Projects <ArrowUpRight className="w-8 h-8 ml-2" />
          </h1>
        </FadeIn>

        {/* Project List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={400 + index * 200}>
              <Link
                href={project.href}
                className="block group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Project Details */}
                  <div className="space-y-6">
                    <div className="text-[rgb(var(--foreground))] opacity-60">{project.date}</div>
                    <h2 className="text-4xl font-normal">{project.title}</h2>
                    <p className="text-xl text-[rgb(var(--foreground))] opacity-80">{project.description}</p>
                    <div className="pt-6">
                      <div className="text-5xl font-normal mb-2">{project.stats.value}</div>
                      <div className="text-sm text-[rgb(var(--foreground))] opacity-60">{project.stats.label}</div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={`object-cover transition-all duration-300 ${
                        hoveredProject === project.id ? "scale-105" : ""
                      }`}
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </main>
    </div>
  )
}