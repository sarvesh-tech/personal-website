"use client"

import { useEffect, useState } from "react"

export function BirthdayCountdown() {
  const [daysUntilBirthday, setDaysUntilBirthday] = useState<number>(0)

  useEffect(() => {
    const calculateDaysUntilBirthday = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const birthday = new Date(currentYear, 8, 8) // September is month 8 (0-based)

      // If birthday has passed this year, use next year's birthday
      if (now > birthday) {
        birthday.setFullYear(currentYear + 1)
      }

      const diffTime = birthday.getTime() - now.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      setDaysUntilBirthday(diffDays)
    }

    calculateDaysUntilBirthday()
    const timer = setInterval(calculateDaysUntilBirthday, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-4xl font-bold">{daysUntilBirthday}</div>
      <div className="text-sm text-neutral-400">days until birthday</div>
    </div>
  )
}

