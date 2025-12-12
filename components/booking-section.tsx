"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Users, Info } from "lucide-react"
import { format } from "date-fns"
import { Alert, AlertDescription } from "@/components/ui/alert"
import ReservationModal from "./reservation-modal"

export default function BookingSection() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState("2")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const packagePrice = 899
  const packageNights = 2
  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0

  // Check if dates match package duration
  const isPackageDuration = nights === packageNights
  const needsExtension = nights > packageNights

  return (
    <>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${packagePrice}</span>
            </div>
            <p className="text-sm text-muted-foreground">3 Days, 2 Nights Package</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "MMM d") : "Check-in"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start text-left font-normal bg-transparent">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "MMM d") : "Check-out"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date <= (checkIn || new Date())}
                />
              </PopoverContent>
            </Popover>
          </div>

          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <Users className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "guest" : "guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {needsExtension && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This package is for 2 nights. For extended stays, please contact us for details.
              </AlertDescription>
            </Alert>
          )}

          {isPackageDuration && (
            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between font-bold">
                <span>Package Total</span>
                <span>${packagePrice}</span>
              </div>
              <p className="text-xs text-muted-foreground">All-inclusive romantic getaway package</p>
            </div>
          )}

          <Button
            size="lg"
            className="w-full"
            disabled={!checkIn || !checkOut || needsExtension}
            onClick={() => setIsModalOpen(true)}
          >
            {needsExtension ? "Contact Us for Extension" : "Reserve Package"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">You won&apos;t be charged yet</p>
        </CardContent>
      </Card>

      <ReservationModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        packagePrice={packagePrice}
      />
    </>
  )
}
