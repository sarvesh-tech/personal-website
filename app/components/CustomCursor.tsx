"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    const checkDesktop = () => {
      setIsVisible(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over clickable elements (but exclude navigation buttons)
      const isNavigationButton = target.closest('.scroll-button') || 
                                  target.closest('[aria-label*="Previous"]') || 
                                  target.closest('[aria-label*="Next"]')
      
      if (
        !isNavigationButton &&
        (target.closest('a') || 
         target.closest('.project-card') ||
         target.closest('[role="button"]') ||
         target.classList.contains('group'))
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      window.removeEventListener('resize', checkDesktop)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {isHovering && (
          <div className="custom-cursor-icon">
            <ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>
    </>
  )
}

