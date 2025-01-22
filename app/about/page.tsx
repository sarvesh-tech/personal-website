"use client"

import Link from "next/link"
import { MapPin, Github, Mail, FileText, Linkedin, Twitter } from "lucide-react"
import { FadeIn } from "../components/FadeIn"
import { BentoCard } from "../components/BentoCard"
import { BentoImage } from "../components/BentoImage"
import { BirthdayCountdown } from "../components/BirthdayCountdown"
import { TechStack } from "../components/TechStack"
import { sofiaSans } from "../utils/fonts"

export default function About() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      
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
      <Link href="/about" className="text-sm text-[rgb(var(--accent))] hover:underline transition-all duration-300">
      About
      </Link>
      </nav>
      </header>


      <main className="px-6 py-12 max-w-[800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {/* Introduction */}
          <BentoCard size="lg" className="md:col-span-2 md:row-span-2">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-neutral-300 leading-relaxed">
              Hey, I'm Sarvesh. I'm a software engineer building human-centered interfaces and digital experiences. With
              a background in computer science and a keen eye for design, I strive to create innovative solutions that
              make a real impact.
            </p>
          </BentoCard>

          {/* Picture */}
          <BentoImage className="md:col-span-1 md:row-span-2">
            <div className="flex items-center justify-center h-full">
              <img src="/Sarvesh-Picture.jpg" alt="Sarvesh" className="object-cover rounded-xl" />
            </div>
          </BentoImage>

          {/* Location */}
          <BentoImage className="md:col-span-1 md:row-span-1 relative">
            <div
              className="flex items-center justify-center h-full space-x-2 p-4 rounded-xl"
              style={{
                backgroundImage: "url('/map.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backgroundBlendMode: "darken",
              }}
            >
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white">Dallas, TX</span>
            </div>
          </BentoImage>

          <BentoImage className="col-span-2 md:col-span-2 md:row-span-1">
            <div className="flex items-center justify-center h-full">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5msILdMXEjnANsifZnpifJ?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </BentoImage>

          {/* Tech Stack */}
          <BentoCard size="lg" className="md:col-span-3 md:row-span-2">
            <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
            <TechStack />
          </BentoCard>

          {/* Past Work */}
          <BentoCard size="lg" className="md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">Past Work</h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-medium">Software Engineer Intern @ Lockheed Martin</h3>
                  <p className="text-sm text-neutral-400">Developed aerospace software solutions</p>
                </div>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">June 2021 - Aug 2021</span>
              </div>
              <hr className="border-dotted border-neutral-400 opacity-30" />
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-medium">Software Engineer Intern @ PipeIQ</h3>
                  <p className="text-sm text-neutral-400">Built infrastructure management solutions</p>
                </div>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">Jan 2022 - May 2022</span>
              </div>
            </div>
          </BentoCard>

          {/* Projects */}
          <BentoCard size="lg" className="md:col-span-3">
            <h2 className="text-lg font-semibold mb-4">Featured Projects</h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-medium">Trade AI</h3>
                  <p className="text-sm text-neutral-400">Mobile trading assistant with AI-powered analysis</p>
                </div>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">Jan 2023 - Present</span>
              </div>
              <hr className="border-dotted border-neutral-400 opacity-30" />
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-medium">Immersive Roblox Experience</h3>
                  <p className="text-sm text-neutral-400">Multiplayer game with dynamic environments</p>
                </div>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">Sep 2022 - Dec 2022</span>
              </div>
              <hr className="border-dotted border-neutral-400 opacity-30" />
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-medium">Portfolio Website</h3>
                  <p className="text-sm text-neutral-400">Personal portfolio showcasing my projects and skills</p>
                </div>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">Jun 2022 - Aug 2022</span>
              </div>
              <hr className="border-dotted border-neutral-400 opacity-30" />
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-medium">E-commerce Platform</h3>
                  <p className="text-sm text-neutral-400">Online store with a seamless shopping experience</p>
                </div>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">Mar 2022 - May 2022</span>
              </div>
            </div>
          </BentoCard>

          {/* Social Links */}
          <div className="flex items-center justify-center col-span-full">
            <div className="flex items-center justify-center space-x-6">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Mail className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <FileText className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}