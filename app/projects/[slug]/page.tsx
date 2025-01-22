"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FadeIn } from "../../components/FadeIn"
import { sofiaSans } from "../../utils/fonts"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <FadeIn delay={0}>
        <header className="px-6 py-6 flex justify-between items-center max-w-[800px] mx-auto">
          <Link
            href="/"
            className={`text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity text-xl ${sofiaSans.className} flex items-center`}
          >
            SARVESH K
          </Link>
          <nav className="space-x-8">
            <Link
              href="/projects"
              className="text-[rgb(var(--foreground))] hover:underline transition-all duration-300"
            >
              Projects
            </Link>
            <Link href="/about" className="text-[rgb(var(--foreground))] hover:underline transition-all duration-300">
              About
            </Link>
          </nav>
        </header>
      </FadeIn>

      <main className="px-4 sm:px-8 py-12 sm:py-24 max-w-[1000px] mx-auto">
        <FadeIn delay={200}>
          <Link
            href="/projects"
            className="inline-flex items-center text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent))] mb-16 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </FadeIn>

        <article className="space-y-16">
          <FadeIn delay={400}>
            <div className="space-y-6">
              <div className="text-[rgb(var(--foreground))] opacity-60">2023 - PRESENT</div>
              <h1 className="text-4xl sm:text-5xl font-normal">Project Title</h1>
              <p className="text-xl text-[rgb(var(--foreground))] opacity-80 max-w-2xl">
                Detailed project description goes here. This section provides an overview of the project's goals,
                challenges, and outcomes.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=900&width=1600"
                alt="Project hero image"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl mb-4">The Challenge</h2>
                <p className="text-[rgb(var(--foreground))] opacity-80">
                  Detailed description of the problems and challenges that were addressed in this project. What were the
                  initial requirements and constraints?
                </p>
              </div>
              <div>
                <h2 className="text-2xl mb-4">The Solution</h2>
                <p className="text-[rgb(var(--foreground))] opacity-80">
                  Explanation of how the challenges were solved. What technologies and approaches were used? What were
                  the key decisions and their outcomes?
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1000}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Project detail image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Project detail image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1200}>
            <div>
              <h2 className="text-2xl mb-4">The Impact</h2>
              <p className="text-[rgb(var(--foreground))] opacity-80 mb-8">
                Discussion of the project's results and impact. What metrics were achieved? How did this project make a
                difference?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-normal mb-2">25K+</div>
                  <div className="text-sm text-[rgb(var(--foreground))] opacity-60">METRIC LABEL</div>
                </div>
                <div>
                  <div className="text-4xl font-normal mb-2">100%</div>
                  <div className="text-sm text-[rgb(var(--foreground))] opacity-60">METRIC LABEL</div>
                </div>
                <div>
                  <div className="text-4xl font-normal mb-2">24/7</div>
                  <div className="text-sm text-[rgb(var(--foreground))] opacity-60">METRIC LABEL</div>
                </div>
                <div>
                  <div className="text-4xl font-normal mb-2">1.5M+</div>
                  <div className="text-sm text-[rgb(var(--foreground))] opacity-60">METRIC LABEL</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </article>
      </main>
    </div>
  )
}

