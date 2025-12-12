"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Package } from "lucide-react"

export default function CountdownWidget() {
  const bookingOpensDate = new Date()
  bookingOpensDate.setDate(bookingOpensDate.getDate() + 7)
  bookingOpensDate.setHours(12, 0, 0, 0) // Noon on that day

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [remainingPackages] = useState(12) // Initial available packages
  const totalPackages = 20

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = bookingOpensDate.getTime() - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [bookingOpensDate])

  const percentageRemaining = (remainingPackages / totalPackages) * 100
  const isLowStock = remainingPackages <= 5

  return (
    <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/20 shadow-lg">
      <CardContent className="pt-6 space-y-6">
        {/* Countdown Timer */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock className="h-4 w-4 text-primary" />
            <span>Package Available In</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-background border-2 border-primary/30 rounded-lg p-3 shadow-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Counter */}
        <div className="space-y-3 pt-4 border-t border-primary/20">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Package className="h-4 w-4 text-primary" />
            <span>Package Availability</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-bold text-primary">{remainingPackages}</span>
              <span className="text-sm text-muted-foreground">of {totalPackages} packages remaining</span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  isLowStock
                    ? "bg-gradient-to-r from-red-500 to-orange-500"
                    : "bg-gradient-to-r from-primary to-primary/70"
                }`}
                style={{ width: `${percentageRemaining}%` }}
              />
            </div>

            {isLowStock && (
              <div className="flex items-center gap-2 text-xs font-medium text-orange-600 bg-orange-50 px-3 py-2 rounded-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Limited availability - Book soon!
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
