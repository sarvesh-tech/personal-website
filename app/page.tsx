"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, FileText, Linkedin, Github } from "lucide-react"
import { FadeIn } from "./components/FadeIn"
import { ProjectCarousel } from "./components/ProjectCarousel"
import { STIX_Two_Text } from "next/font/google"
import { Sofia_Sans_Extra_Condensed } from "next/font/google"

const stixTwoText = STIX_Two_Text({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
})

const sofiaSans = Sofia_Sans_Extra_Condensed({
  weight: "500",
  subsets: ["latin"],
})

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center max-w-[1200px] mx-auto">
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
      <main className="px-6 pt-16 pb-24 max-w-[1200px] mx-auto">
        <FadeIn delay={50}>
        <h1 className="text-5xl sm:text-7xl font-normal mb-4 sm:mb-8 leading-tight tracking-tighter">
          <span className="block">Building</span>{" "}
          <span
            className={`block ${stixTwoText.className} bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-radial`}
            style={{ backgroundSize: '53% 100%' }}
          >
            meaningful
          </span>{" "}
          <span className="block">interactions</span>
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed mb-6 max-w-[600px]">
            <p className="leading-loose">
              Howdy! I'm Sarvesh, a junior computer engineering student at{" "}
              <Link
                href="https://www.tamu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                <img
                  src="/tamu-logo.png"
                  alt="TAMU"
                  className="inline-block align-middle w-auto h-[1.5em] px-1"
                />
              </Link>{" "}
              interested in swe, pm, and ui/ux design. I've built products reaching thousands of users.
            </p>

            <p className="leading-loose">
              Currently building a AI-powered trading mobile app{" "}
              <Link href="https://github.com/sarvesh-tech" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center hover:opacity-70 transition-opacity">
                @TradeAI
              </Link>
              . Previously interned{" "}
              <Link href="https://www.lockheedmartin.com/en-us/index.html" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center hover:opacity-70 transition-opacity">
                @Lockheed Martin
              </Link>
              ,{" "}
              <Link href="https://scale.com/" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center hover:opacity-70 transition-opacity">
                @Scale AI
              </Link>
              ,{" "}
              <Link href="https://pipeiq.ai/" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center hover:opacity-70 transition-opacity">
                @PipeIQ
              </Link>
              .
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex space-x-6 mb-24">
            <Link
              href="/resume.pdf" // Replace with your resume link
              className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity"
            >
              <FileText className="w-6 h-6" />
              <span className="sr-only">Resume</span>
            </Link>
            <Link
              href="mailto:sarvesh.tech04@gmail.com"
              className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity"
              onClick={(e) => {
              e.preventDefault()
              navigator.clipboard.writeText("sarvesh.tech04@gmail.com")
              alert("Email copied to clipboard!")
              }}
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sarveshkk/" // Replace with your LinkedIn profile
              className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/sarvesh-tech" // Replace with your GitHub profile
              className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <ProjectCarousel />
        </FadeIn>
      </main>

      {/* Footer */}
      <hr className="max-w-[90%] sm:max-w-[1200px] mb-2 opacity-20 mx-auto" />
      <footer className="py-6">
        <div className="max-w-[1200px] mx-auto flex flex-col text-xs sm:text-sm text-[rgb(var(--foreground))] opacity-60 space-y-4 px-4 sm:px-0 text-center">
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