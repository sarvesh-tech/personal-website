"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUp } from "lucide-react"
import { FadeIn } from "../../components/FadeIn"
import { AffinityCarousel } from "../../components/AffinityCarousel"
import { sofiaSans } from "../../utils/fonts"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // If not sprout, show coming soon
  if (params.slug !== "sprout") {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <FadeIn delay={0}>
        <header className="px-6 py-6 flex justify-between items-center max-w-[1200px] mx-auto">
          <Link
            href="/"
              className={`text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity text-3xl ${sofiaSans.className} flex items-center`}
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

      <main className="px-4 sm:px-8 py-12 sm:py-24 max-w-[1200px] mx-auto">
        <FadeIn delay={200}>
          <Link
            href="/projects"
            className="inline-flex items-center text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent))] mb-16 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </FadeIn>

          <article className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          <FadeIn delay={200}>
            <div className="space-y-8">
                <h1 className="text-5xl sm:text-7xl font-normal tracking-tight">
                  Coming Soon
                </h1>
                <p className="text-xl text-[rgb(var(--foreground))] opacity-60 max-w-2xl mx-auto">
                  Detailed case study for <span className="text-[rgb(var(--accent))]">{params.slug}</span> is currently being crafted.
                </p>
                <p className="text-sm text-[rgb(var(--foreground))] opacity-40">
                  Check back soon for in-depth project details, challenges, solutions, and impact.
                </p>
                
                {/* Until then section */}
                <div className="mt-16 pt-8 border-t border-white/10 space-y-6">
                  {/* Conditional link for Tidal live website */}
                  {params.slug === "Tidal" && (
                    <div>
                      <p className="text-lg opacity-70 mb-6">Check out the live website:</p>
                      <Link 
                        href="https://tidaltamu.com/hackathon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">
                            🌊
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-medium group-hover:text-blue-400 transition-colors">
                              Tidal Hackathon Website
                            </h3>
                            <p className="text-sm opacity-60">View the live site</p>
                          </div>
                          <ArrowLeft className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all rotate-180" />
                        </div>
                      </Link>
                    </div>
                  )}

                  <div>
                    <p className="text-lg opacity-70 mb-6">{params.slug === "Tidal" ? "Or check out my design case study:" : "Until then, check out my design case study:"}</p>
                    <Link 
                      href="/projects/sprout"
                      className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[rgb(var(--accent))]/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[rgb(var(--accent))]/20 flex items-center justify-center text-2xl">
                          🌱
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-medium group-hover:text-[rgb(var(--accent))] transition-colors">
                            Sprout Case Study
                          </h3>
                          <p className="text-sm opacity-60">AI Mental Health iOS App</p>
                        </div>
                        <ArrowLeft className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all rotate-180" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </article>
        </main>
      </div>
    )
  }

  // Sprout detailed page
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <FadeIn delay={0}>
        <header className="px-6 py-6 flex justify-between items-center max-w-[1200px] mx-auto">
          <Link
            href="/"
            className={`text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity text-3xl ${sofiaSans.className} flex items-center`}
          >
            SARVESH K
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
      </FadeIn>

      <main className="px-6 py-12 max-w-[1200px] mx-auto">
        {/* Back Button */}
        <FadeIn delay={100}>
          <Link
            href="/projects"
            className="inline-flex items-center text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent))] mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </FadeIn>

        {/* Hero Section */}
        <FadeIn delay={100}>
          <div className="mb-16 space-y-6">
            <Link 
              href="https://build4good-2025.devpost.com/?_gl=1*kln1tc*_gcl_au*MzY4Mjg4OTAzLjE3NTc0NDE3NDY.*_ga*MTExNzQ1NTE0Ny4xNzQ4OTE4NzMw*_ga_0YHJK3Y10M*czE3NTkzNTUwNzMkbzYkZzAkdDE3NTkzNTUxMzMkajYwJGwwJGgw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] text-xs font-medium mb-4 hover:bg-[rgb(var(--accent))]/20 transition-all duration-300"
            >
              🏆 1st Place Best UI/UX @ Build4Good 2025
            </Link>
            <h1 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight">
              Sprout
            </h1>
            <p className="text-sm sm:text-base text-[rgb(var(--foreground))] opacity-70 max-w-3xl">
              An innovative app that allows you to nurture your own AI-powered companion, designed to support you on your path to improved mental health, wherever and whenever you need it.
              </p>
            </div>
          </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={150}>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-24 group">
              <Image
              src="/sprout-tn.png"
              alt="Sprout App Preview"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </FadeIn>

        {/* Project Details - Horizontal Cards */}
        <div className="mb-32">
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-y border-[rgb(var(--foreground))]/10">
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-sm text-[rgb(var(--foreground))] opacity-50 uppercase tracking-wider">Role</h3>
                <p className="text-lg font-medium">Lead Designer</p>
                <p className="text-sm opacity-70">Full-Stack Developer</p>
              </div>
              
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-sm text-[rgb(var(--foreground))] opacity-50 uppercase tracking-wider">Timeline</h3>
                <p className="text-lg font-medium">Mar. 2025</p>
                <p className="text-sm opacity-70">1 day Hackathon (3 additional weeks after hackathon)</p>
              </div>
              
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-sm text-[rgb(var(--foreground))] opacity-50 uppercase tracking-wider">Team</h3>
                <p className="text-lg font-medium">2 People</p>
                <p className="text-sm opacity-70">Buildspace S5 Cohort</p>
              </div>
              
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-sm text-[rgb(var(--foreground))] opacity-50 uppercase tracking-wider">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">UX Research</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">User Personas</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Wireframing</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Prototyping</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Usability Testing</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Product Design</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">React Native</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">OpenAI API</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Node.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Figma</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Project Overview */}
        <FadeIn delay={250}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-8 tracking-tight">Project Overview</h2>
            <div className="bg-white/5 p-8 sm:p-12 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                {/* Animated Character */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-40 h-40 animate-[sway_3s_ease-in-out_infinite]">
                    <Image
                      src="/sprout-character.png"
                      alt="Sprout Character"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed opacity-80">
                    Sprout is an AI-driven mental health app that provides accessible cognitive behavioral therapy (CBT) support 
                    through interactive features reminiscent of a trusted friend. Users engage with Sprout through human-like 
                    voice and text interfaces, participating in therapy sessions and completing personalized self-care exercises 
                    tailored specifically to them.
                  </p>
                  <p className="text-sm leading-relaxed opacity-80">
                    The app employs a gamified progression system, guiding users from basic levels to advanced stages as they 
                    achieve mental health milestones and collect "coins" that can be redeemed for mental health services in an 
                    innovative in-app marketplace. Built during Build4Good 2025, Sprout won 1st place among 89+ participants 
                    and was selected for the prestigious Buildspace S5 Cohort.
                  </p>
                </div>
              </div>
            </div>
          </section>
          </FadeIn>

        {/* I. Defining the Problem Space */}
        <FadeIn delay={300}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">I.</span> Defining the Problem Space
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[rgb(var(--accent))]/30 transition-all duration-300">
                <h3 className="text-base font-medium">The Challenge</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  Approximately 20% of the population deals with mental health challenges each year, with 42 million 
                  people seeking treatment or counseling in 2021 alone. However, traditional therapy presents significant 
                  barriers:
                </p>
                <ul className="text-sm opacity-80 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Months-long wait times for therapy appointments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Session fees upwards of $100, making it inaccessible to many</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Limited availability during crisis moments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Stigma preventing people from seeking help</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[rgb(var(--accent))]/30 transition-all duration-300">
                <h3 className="text-base font-medium">The Opportunity</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  In 2021, adults aged 18-44 had the highest rate of mental health treatment at 23.2%, indicating 
                  a growing demand for accessible support that continues to rise annually.
                </p>
                <p className="text-sm opacity-80 leading-relaxed">
                  With AI-driven cognitive behavioral therapy (CBT), we can democratize mental health care by providing 
                  immediate support directly from users' devices, anytime, anywhere, and at a fraction of the cost—making 
                  mental wellness accessible to everyone who needs it.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* II. Competitive Analysis */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">II.</span> Competitive Analysis
            </h2>
            
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-base font-medium mb-4">Existing Solutions</h3>
                <div className="aspect-video relative rounded-xl overflow-hidden bg-white/5">
                  <Image
                    src="/sprout-comp.png"
                    alt="Competitive Analysis Chart"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[rgb(var(--accent))]/20 to-[rgb(var(--accent))]/5 border border-[rgb(var(--accent))]/20 hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-base font-medium mb-4">Key Competitors</h3>
                <div className="space-y-3 text-xs opacity-80">
                  <div>
                    <p className="font-medium opacity-100 mb-1">Headspace & Calm</p>
                    <p className="text-xs">Meditation/mindfulness only</p>
                  </div>
                  <div>
                    <p className="font-medium opacity-100 mb-1">Talkspace & BetterHelp</p>
                    <p className="text-xs">Human therapists, 2-day waits</p>
                  </div>
                  <div>
                    <p className="font-medium opacity-100 mb-1">Woebot & Wysa</p>
                    <p className="text-xs">AI chatbots, limited features</p>
                  </div>
                  <div>
                    <p className="font-medium opacity-100 mb-1">Youper</p>
                    <p className="text-xs">AI therapy, no gamification</p>
                  </div>
                  <div>
                    <p className="font-medium opacity-100 mb-1">Sanvello</p>
                    <p className="text-xs">Mood tracking, basic CBT tools</p>
                  </div>
                  <div>
                    <p className="font-medium opacity-100 mb-1">Traditional Therapy</p>
                    <p className="text-xs">Months waits, $100+/session</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-medium mb-6">Sprout's Competitive Advantages</h3>
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-2">🎮</div>
                  <h4 className="font-medium text-sm">Gamification</h4>
                  <p className="text-xs opacity-70">Progression system & rewards</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-2">🤖</div>
                  <h4 className="font-medium text-sm">AI-Powered CBT</h4>
                  <p className="text-xs opacity-70">Human-like conversations in seconds</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-2">🪙</div>
                  <h4 className="font-medium text-sm">Rewards Marketplace</h4>
                  <p className="text-xs opacity-70">Redeem coins for real services</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-2">💰</div>
                  <h4 className="font-medium text-sm">Affordable Access</h4>
                  <p className="text-xs opacity-70">Fraction of traditional therapy cost</p>
                </div>
              </div>
            </div>
          </section>
          </FadeIn>

        {/* III. Contextual Inquiry */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">III.</span> Contextual Inquiry
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <Image
                  src="/sprout-context.png"
                  alt="User Interview and Contextual Inquiry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-sm opacity-80 leading-relaxed">
                  Through interviews with 15+ potential users aged 18-44 (our primary demographic representing 23.2% 
                  of mental health treatment seekers), we discovered critical insights about accessibility barriers 
                  and engagement preferences.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="italic opacity-70 text-sm">"I need support now, not in three months when I finally get an appointment."</p>
                    <p className="text-xs mt-2 opacity-50">- College Student, Age 22</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="italic opacity-70 text-sm">"I can't afford $100+ per session every week, but I still need help managing my anxiety."</p>
                    <p className="text-xs mt-2 opacity-50">- Working Professional, Age 28</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="italic opacity-70 text-sm">"I wish there was something more engaging than just meditation apps that would actually help me work through my problems."</p>
                    <p className="text-xs mt-2 opacity-50">- Graduate Student, Age 25</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* IV. Affinity Mapping */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">IV.</span> Affinity Mapping
            </h2>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.01] transition-transform duration-500 mb-8" style={{ backgroundColor: '#1E1E1E' }}>
              <Image
                src="/sprout-affinity-map.png"
                alt="Affinity Map - User Research Synthesis"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Insights Blurb */}
            <div className="mb-8 p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-medium mb-4">Key Insights</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Affinity mapping helped us synthesize user feedback for Sprout by clustering raw statements into themes that revealed core needs. Users consistently spoke about <span className="font-medium text-[rgb(var(--accent))]">cost & accessibility</span> ("I can't afford $100 therapy sessions"), showing the need for affordable, on-demand support. <span className="font-medium text-[rgb(var(--accent))]">Trust & privacy</span> emerged as another cluster, reflecting fears about AI advice and data safety. <span className="font-medium text-[rgb(var(--accent))]">Gamification & motivation</span> highlighted how progress tracking, coins, and rewards keep users engaged. <span className="font-medium text-[rgb(var(--accent))]">Companionship & human-like interaction</span> showed the desire for Sprout to feel like a supportive friend rather than a clinical tool. <span className="font-medium text-[rgb(var(--accent))]">Habits & reminders</span> revealed the importance of simple daily nudges and flexible exercises, while <span className="font-medium text-[rgb(var(--accent))]">personalization & adaptability</span> emphasized tailoring experiences to mood and progress. Finally, <span className="font-medium text-[rgb(var(--accent))]">frustrations with existing apps</span> underscored gaps Sprout can fill with instant, empathetic support. These clusters matter because they transform scattered feedback into actionable design directions, ensuring Sprout's features directly answer user needs.
              </p>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">💰 Cost & Accessibility</h4>
                <p className="text-xs opacity-70">Affordable, on-demand support</p>
              </div>
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">🔒 Trust & Privacy</h4>
                <p className="text-xs opacity-70">AI advice & data safety</p>
              </div>
              <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">🎮 Gamification</h4>
                <p className="text-xs opacity-70">Progress, coins & rewards</p>
              </div>
              <div className="p-6 rounded-xl bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">💙 Companionship</h4>
                <p className="text-xs opacity-70">Supportive friend feeling</p>
              </div>
              <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">🔔 Habits & Reminders</h4>
                <p className="text-xs opacity-70">Daily nudges & exercises</p>
              </div>
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">✨ Personalization</h4>
                <p className="text-xs opacity-70">Tailored to mood & progress</p>
              </div>
              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">⚠️ App Frustrations</h4>
                <p className="text-xs opacity-70">Gaps to fill with empathy</p>
              </div>
              <div className="p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all">
                <h4 className="font-medium mb-2 text-sm">🎯 Core Themes</h4>
                <p className="text-xs opacity-70">Actionable design directions</p>
              </div>
            </div>

            {/* Mobile: Swipeable Carousel */}
            <div className="md:hidden">
              <AffinityCarousel />
            </div>
          </section>
          </FadeIn>

        {/* V. User Personas */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">V.</span> User Personas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[rgb(var(--accent))]/30 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-white/10 mb-6 overflow-hidden relative">
                  <Image
                    src="/sarah.jpg"
                    alt="Sarah - College Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Sarah</h3>
                <p className="text-xs opacity-70 mb-4">College Student, 21 | Part of 23.2% aged 18-44 seeking mental health support</p>
                <p className="text-sm opacity-80 mb-6">
                  Struggles with anxiety and depression from academic pressure. Can't afford $100+ therapy sessions 
                  or wait months for appointments. Needs engaging, immediate support that fits her budget and lifestyle.
                </p>
                <div className="space-y-2 text-xs">
                  <p><span className="opacity-50">Goals:</span> Accessible therapy, gamified engagement, immediate crisis support</p>
                  <p><span className="opacity-50">Frustrations:</span> 3-month wait times, $100+ sessions, boring meditation apps</p>
                  <p><span className="opacity-50">Why Sprout:</span> Instant AI therapy, rewards system, affordable freemium model</p>
                </div>
              </div>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[rgb(var(--accent))]/30 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-white/10 mb-6 overflow-hidden relative">
                  <Image
                    src="/alex.jpeg"
                    alt="Alex - Working Professional"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Alex</h3>
                <p className="text-xs opacity-70 mb-4">Working Professional, 28 | Managing chronic stress & anxiety</p>
                <p className="text-sm opacity-80 mb-6">
                  Experiences work-related burnout and chronic stress. Tried Headspace/Calm but needs more than 
                  meditation. Looking for proactive mental wellness tools that provide real therapeutic value 
                  without professional therapy costs.
                </p>
                <div className="space-y-2 text-xs">
                  <p><span className="opacity-50">Goals:</span> CBT-based therapy, stress management, mental wellness tracking</p>
                  <p><span className="opacity-50">Frustrations:</span> High therapy costs, limited meditation app effectiveness, stigma</p>
                  <p><span className="opacity-50">Why Sprout:</span> Human-like AI therapy, personalized exercises, privacy</p>
                </div>
              </div>
            </div>
          </section>
          </FadeIn>

        {/* VI. Our Proposed Solution */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">VI.</span> Our Proposed Solution
            </h2>
            <div className="p-12 rounded-2xl bg-gradient-to-br from-[rgb(var(--accent))]/10 to-transparent border border-[rgb(var(--accent))]/20">
              <h3 className="text-lg font-medium mb-6">Introducing Sprout</h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Think about a time you stayed up with your best friend talking about life's ups and downs, but in a 
                completely safe space. Sprout is exactly that, except it uses AI trained on cognitive behavioral therapy 
                (CBT) datasets. It feels remarkably human-like, providing support and guidance every step of the way.
              </p>
              <p className="text-sm opacity-80 mb-8 leading-relaxed">
                What sets Sprout apart is our unique gamified approach to mental wellness. Users grow their Sprout from 
                plant to tree to forest, earning coins that can be redeemed for real mental health services in our 
                innovative marketplace.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">🌱 Gamified Growth</h4>
                  <p className="text-xs opacity-70">Progress from plant to forest while achieving mental health milestones</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">💬 Voice & Text Therapy</h4>
                  <p className="text-xs opacity-70">Human-like AI conversations trained on CBT principles</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">🎯 Personalized Exercises</h4>
                  <p className="text-xs opacity-70">Daily self-care activities tailored to your needs</p>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-medium mb-3 text-sm">Freemium Business Model</h4>
                <p className="text-xs opacity-70 leading-relaxed">
                  Basic features free, premium subscription for unlimited voice/text access. Users earn coins through 
                  engagement that can customize their companion or redeem mental health services from partnering 
                  businesses in our marketplace—creating multiple revenue streams while incentivizing mental wellness.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* VII. Hopping into Figma */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">VII.</span> Hopping into Figma
            </h2>
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.01] transition-transform duration-300 mb-8" style={{ backgroundColor: '#1E1E1E' }}>
              <Image
                src="/sprout-wireframe.png"
                alt="Sprout Wireframes - User Flow Design"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm opacity-80">
              Starting with low-fidelity wireframes, we mapped out the core user flows and interaction patterns. 
              The design evolved through multiple iterations based on user feedback and usability testing.
            </p>
          </section>
        </FadeIn>

        {/* VIII. Usability Tests */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">VIII.</span> Usability Tests
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="aspect-video relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/sprout-use.png"
                  alt="Usability Test Session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-base font-medium">Understanding User Behaviors and Patterns</h3>
                <p className="text-sm opacity-80">
                  Conducted 10+ usability tests with target users to validate design decisions and identify 
                  pain points in the user experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent))] mt-2"></div>
                    <p className="text-sm opacity-80">95% task completion rate on core flows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent))] mt-2"></div>
                    <p className="text-sm opacity-80">Average session duration: 12 minutes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent))] mt-2"></div>
                    <p className="text-sm opacity-80">High satisfaction with conversation quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights Bento */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">95%</div>
                <p className="text-sm opacity-70">Found the AI responses helpful</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">90%</div>
                <p className="text-sm opacity-70">Felt comfortable sharing emotions</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">4.9/5</div>
                <p className="text-sm opacity-70">Average UX rating</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">95%</div>
                <p className="text-sm opacity-70">Would recommend to a friend</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* IX. Final Prototype */}
        <FadeIn delay={100}>
          <section className="mb-32">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">IX.</span> Final Prototype
            </h2>
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-8">Introducing the Sprout Mobile Companion!</h3>
              
              {/* Demo Video */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12" style={{ backgroundColor: '#1E1E1E' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/nReKcaI3tAM"
                  title="Sprout Demo - Build4Good 2025 Winner"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <p className="text-sm opacity-70 text-center mb-8">
                🏆 Winner: <a href="https://build4good-2025.devpost.com/?_gl=1*kln1tc*_gcl_au*MzY4Mjg4OTAzLjE3NTc0NDE3NDY.*_ga*MTExNzQ1NTE0Ny4xNzQ4OTE4NzMw*_ga_0YHJK3Y10M*czE3NTkzNTUwNzMkbzYkZzAkdDE3NTkzNTUxMzMkajYwJGwwJGgw" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--accent))] hover:opacity-70 transition-opacity">1st Place Best UI/UX at Build4Good 2025</a> | <a href="https://devpost.com/software/sprout-lu7sh9" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--accent))] underline hover:opacity-70 transition-opacity">View on Devpost</a> • <a href="https://www.figma.com/design/OFSuiWvj3UBh0uaoNFaWuY/Sprout---AI-Wellbeing-Mobile-App?node-id=35-97&t=Hpr3bie1Vb4mffkp-0" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--accent))] underline hover:opacity-70 transition-opacity">View on Figma</a>
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                <h4 className="text-sm font-medium mb-4">🌱 Plant to Forest Progression</h4>
                <p className="opacity-80 text-xs">
                  Watch your companion grow from plant to tree to forest as you achieve mental health milestones
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <h4 className="text-sm font-medium mb-4">🪙 Rewards Marketplace</h4>
                <p className="opacity-80 text-xs">
                  Earn coins through engagement to customize your companion or redeem real mental health services
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <h4 className="text-sm font-medium mb-4">📝 Personalized Self-Care</h4>
                <p className="opacity-80 text-xs">
                  Daily exercises, meditation reminders, journaling prompts, and habit tracking tailored to you
                </p>
              </div>
            </div>
          </section>
          </FadeIn>

        {/* X. Thank You / What's Next */}
        <FadeIn delay={100}>
          <section className="mb-24">
            <h2 className="text-xl sm:text-2xl font-normal mb-12 tracking-tight">
              <span className="text-[rgb(var(--accent))]">X.</span> Thank You
            </h2>
            
            {/* Winner Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-12">
              <Image
                src="/sprout-winner.jpeg"
                alt="Sprout - 1st Place Winner at Build4Good 2025"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-12 rounded-2xl bg-gradient-to-br from-[rgb(var(--accent))]/20 via-[rgb(var(--accent))]/10 to-transparent border border-[rgb(var(--accent))]/30">
              <h3 className="text-lg font-medium mb-6 text-center">What's Next on the Horizon</h3>
              <p className="text-sm opacity-80 mb-8 text-center max-w-2xl mx-auto">
                With a completed prototype and back-end development, Sprout is on track to launch in 3-4 months. 
                Currently in development as part of the Buildspace S5 Cohort, here's our strategic roadmap:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">📊 User Research & Testing</h4>
                  <p className="text-xs opacity-70">Conduct thorough testing to gather insights into user preferences, pain points, and usability issues</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">🚀 Launch Strategy</h4>
                  <p className="text-xs opacity-70">App store optimization, social media marketing, and partnerships with mental health organizations</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">🤝 Affiliate Marketing</h4>
                  <p className="text-xs opacity-70">Partner with influencers focused on self-growth and mental wellness to drive awareness</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-medium mb-3 text-sm">🔄 Iterative Improvement</h4>
                  <p className="text-xs opacity-70">Continuous user feedback integration and feature optimization post-launch</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Back to Top */}
        <FadeIn delay={100}>
          <div className="text-center py-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent))] transition-colors group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </button>
            </div>
          </FadeIn>
      </main>
    </div>
  )
}

