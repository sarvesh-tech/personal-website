"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react" // Import icons
import { FadeIn } from "../components/FadeIn"
import { useState, useRef, useEffect } from "react"
import { sofiaSans } from "../utils/fonts"

const projects = [
  {
    id: "lockheed",
    date: "2024",
    title: "SWE Intern @ Lockheed Martin",
    description: "Developed a full-stack CRUD application for executive teams, enabling efficient management of aircraft parts. Leveraged modern frontend frameworks and backend tools, while using scalable cloud infrastructure. Built data pipelines with Alteryx and integrated Tableau dashboards to visualize key metrics, which significantly improved operational decision-making!",
    tech: ["React.js", "GraphQL", "SQL", "AWS", "Alteryx", "Tableau", "DBeaver"],
    image: "/lockheed-tn.png", // Updated image path
    video: "/lockheedvid.mp4", // Video to play on hover
    github: "https://github.com/sarvesh-tech", // Add GitHub link
    web: "https://www.lockheedmartin.com/"
  },
  {
    id: "trade-ai",
    date: "2025",
    title: "Trade AI: Mobile Trading Assistant",
    description: "Built an AI-powered mobile app for stock and crypto analysis, providing instant technical insights using finance models. Integrated FastAPI and Microsoft Azure for secure API hosting, and Docker for scalable deployment. Designed an intuitive UI/UX to deliver seamless trading experiences for users.",
    tech: ["React Native", "FastAPI", "Microsoft Azure", "Docker", "Supabase", "UI/UX Design", "Python"],
    image: "/trade-tn.png", // Updated image path
    video: "/tradevid.mp4", // Video to play on hover
    github: "https://github.com/sarvesh-tech/trade-ai", // Add GitHub link
    web: "https://github.com/sarvesh-tech/trade-ai" // Add web link
  },
  {
    id: "pipeiq",
    date: "2023",
    title: "SWE Intern @ PipeIQ",
    description: "Created an AI sales co-pilot using Python, large language models (LLMs), and natural language processing (NLP), boosting accuracy by *27%*. Developed reusable Next.js components, reducing load times by *42%* and enhancing the sales pipeline experience. Worked with PostgreSQL and AWS to ensure robust backend functionality.",
    tech: ["Next.js", "Python", "PostgreSQL", "AWS", "LLM", "NLP", "UI/UX Design"],
    image: "/pipeiq-tn.png", // Updated image path
    video: "/pipeiq-vid.mp4", // Video to play on hover
    github: "https://github.com/sarvesh-tech", // Add GitHub link
    web: "https://pipeiq.ai" // Add web link
  },
  {
    id: "roblox-game",
    date: "2022",
    title: "Cross-Platform Roblox Game",
    description: "Designed and developed a multiplayer horror game with over *200,000+ users*. Optimized mobile gameplay with efficient algorithms, achieving a *400%* performance improvement. Focused on creating an immersive UI/UX design to enhance player engagement.",
    tech: ["Lua", "Roblox Studio", "Game Development", "UI/UX Design", "Algorithm Optimization"],
    image: "/Roblox.jpg", // Updated image path
    video: "/roblox.gif", // GIF to play on hover
    github: "https://github.com/sarvesh-tech", // Add GitHub link
    web: "https://www.roblox.com/discover/" // Add web link
  },
]

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

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
      video.currentTime = 0 // Reset video to the beginning
    }
  }

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
          <h1 className="text-4xl sm:text-5xl font-normal mb-6 sm:mb-12 leading-tight flex items-center">
            Work <ArrowUpRight className="w-6 h-6 ml-2" />
          </h1>
          <hr className="max-w-[100%] sm:max-w-[100%] mb-6 sm:mb-12 opacity-20 mx-auto" />
        </FadeIn>

        {/* Project List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={100 + index * 200}>
              <div
                className="block group"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Project Details */}
                  <div className="space-y-4">
                    <div className="text-sm text-[rgb(var(--foreground))] opacity-60">{project.date}</div>
                    <h2 className="text-xl font-normal flex items-center gap-2">
                      {project.title}
                      {/* GitHub and Web Links */}
                        <div className="flex items-center gap-2 ml-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </h2>
                    <p className="text-xs text-[rgb(var(--foreground))] opacity-80">
                      {project.description.split('*').map((part, idx) => (
                        idx % 2 === 1 ? (
                          <span key={idx} className="font-medium italic">{part}</span>
                        ) : (
                          part
                        )
                      ))}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs text-[rgb(var(--foreground))] opacity-60 border border-[rgb(var(--foreground))] px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Image */}
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
                            playsInline
                            preload="auto" // Preload the video
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
              </div>
            </FadeIn>
          ))}
        </div>
      </main>
            {/* Footer */}
            <hr className="max-w-[90%] sm:max-w-[740px] mb-2 opacity-20 mx-auto" />
      <footer className="py-6">
        <div className="max-w-[750px] mx-auto flex flex-col text-xs sm:text-sm text-[rgb(var(--foreground))] opacity-60 space-y-4 px-4 sm:px-0 text-center">
          <div className="text-sm font-semibold">Thanks for visiting :)</div>
          <div>
        Reach me at{" "}
        <Link
          href="mailto:sarvesh.tech04@gmail.com"
          className="underline hover:opacity-70 transition-opacity"
        >
          sarvesh.tech04@gmail.com
        </Link>
          </div>
          <div className="flex justify-center space-x-4">
        <Link
          href="/resume.pdf"
          className="underline hover:opacity-70 transition-opacity"
        >
          Resume
        </Link>
        <Link
          href="https://www.linkedin.com/in/sarveshkk"
          className="underline hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/sarvesh-tech"
          className="underline hover:opacity-70 transition-opacity"
        >
          Github
        </Link>
          </div>
          <div>
        Made with <span className="text-red-500">&hearts;</span> by Sarvesh Karunakaran ©
          </div>
        </div>
      </footer>
    </div>
  )
}