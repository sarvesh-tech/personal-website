"use client"

import { useEffect, useState } from "react"

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  delay?: number // Add a delay prop for staggered animations
}

export function BentoCard({ children, className = "", size = "sm", delay = 0 }: BentoCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 row-span-2",
    lg: "col-span-2 row-span-1",
  }

  return (
    <div
      className={`
        rounded-3xl bg-neutral-900/50 p-6 
        backdrop-blur-md transition-all 
        hover:bg-neutral-900/70 
        ${sizeClasses[size]} 
        ${className}
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.7s ease-in-out", // Smooth fade-in transition
      }}
    >
      {children}
    </div>
  )
}