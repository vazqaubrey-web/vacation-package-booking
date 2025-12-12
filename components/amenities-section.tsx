"use client"

import { useState } from "react"
import {
  Wifi,
  Wind,
  Utensils,
  Waves,
  Car,
  Coffee,
  Tv,
  Snowflake,
  Eraser as Dryer,
  Flame,
  Home,
  Shield,
  UtensilsCrossed,
  TreePine,
  Droplet,
  Shirt,
  MonitorPlay,
  Bed,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Fence,
  Eye,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const propertyHighlights = [
  { icon: Sparkles, label: "Screened in Porch" },
  { icon: Fence, label: "2 acres with amazing water access" },
  { icon: Eye, label: "Amazing View of Creek and Rock wall" },
  { icon: Flame, label: "Wood-burning fire pit" },
  { icon: Home, label: "Deck with Grill" },
  { icon: Shield, label: "Complete Privacy on entire property" },
]

const beddingArrangement = [
  { room: "Bedroom 1", beds: "Queen Bed" },
  { room: "Bedroom 2", beds: "Queen Bed" },
  { room: "Bedroom 3", beds: "Queen Bed, Twin Bed" },
  { room: "Living Room", beds: "Twin Sleeper Sofa" },
]

const outdoorFeatures = [
  { icon: Flame, label: "Charcoal and gas grills" },
  { icon: TreePine, label: "Stone patio with outdoor seating" },
  { icon: Waves, label: "Two on-site creeks" },
  { icon: Flame, label: "Fire pit" },
  { icon: Waves, label: "Amazing creek with beautiful views" },
]

const amenitiesByCategory = [
  {
    category: "Bathroom",
    items: [
      { icon: Droplet, label: "Hair dryer" },
      { icon: Droplet, label: "Shampoo" },
      { icon: Droplet, label: "Body soap" },
    ],
  },
  {
    category: "Bedroom and laundry",
    items: [
      { icon: Dryer, label: "Washer" },
      { icon: Dryer, label: "Free dryer – In unit" },
      { icon: Shirt, label: "Clothing storage: closet and dresser" },
    ],
  },
  {
    category: "Essentials",
    items: [
      { icon: Home, label: "Towels, bed sheets, soap, and toilet paper" },
      { icon: Home, label: "Cotton 1800 thread count linens" },
    ],
  },
  {
    category: "Entertainment",
    items: [{ icon: Tv, label: "TV" }],
  },
  {
    category: "Heating and cooling",
    items: [
      { icon: Wind, label: "Window AC unit" },
      { icon: Flame, label: "Central heating" },
    ],
  },
  {
    category: "Home safety",
    items: [
      { icon: Shield, label: "Smoke alarm" },
      { icon: Shield, label: "Carbon monoxide alarm" },
      { icon: Shield, label: "Fire extinguisher" },
      { icon: Shield, label: "First aid kit" },
    ],
  },
  {
    category: "Internet and office",
    items: [{ icon: Wifi, label: "Wifi" }],
  },
  {
    category: "Kitchen and dining",
    items: [
      { icon: Utensils, label: "Full kitchen" },
      { icon: Snowflake, label: "Refrigerator" },
      { icon: MonitorPlay, label: "Microwave" },
      { icon: UtensilsCrossed, label: "Cooking basics (pots and pans, oil, salt and pepper)" },
      { icon: UtensilsCrossed, label: "Dishes and silverware" },
      { icon: Coffee, label: "Coffee maker: drip coffee maker & Keurig" },
      { icon: UtensilsCrossed, label: "Dining table" },
    ],
  },
  {
    category: "Location features",
    items: [
      { icon: Waves, label: "Waterfront – Right next to a body of water" },
      { icon: Home, label: "Private entrance" },
    ],
  },
  {
    category: "Outdoor",
    items: [
      { icon: TreePine, label: "Private backyard" },
      { icon: Flame, label: "BBQ grill" },
    ],
  },
  {
    category: "Parking and facilities",
    items: [{ icon: Car, label: "Free parking on premises" }],
  },
]

export default function AmenitiesSection() {
  const [showAllAmenities, setShowAllAmenities] = useState(false)

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Property Highlights & Amenities</h2>

      <Card className="mb-4">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-4 text-primary">Property Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {propertyHighlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-4 text-primary">Bedding Arrangement</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {beddingArrangement.map(({ room, beds }) => (
              <div key={room} className="flex items-start gap-3">
                <Bed className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{room}</p>
                  <p className="text-sm text-muted-foreground">{beds}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-4 text-primary">Outdoor Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outdoorFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-primary">All Amenities</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowAllAmenities(!showAllAmenities)} className="gap-2">
              {showAllAmenities ? (
                <>
                  Hide <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show all <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {showAllAmenities && (
            <div className="space-y-6">
              {amenitiesByCategory.map(({ category, items }) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg mb-3 text-primary">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                    {items.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
