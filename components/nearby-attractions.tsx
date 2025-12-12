import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"

export default function NearbyAttractions() {
  const attractions = [
    { name: "Layne's Country Store", distance: "1.4 miles" },
    { name: "Virginia Safari Park", distance: "4.8 miles" },
    { name: "Dinosaur Kingdom II", distance: "6.3 miles" },
    { name: "Caverns at Natural Bridge", distance: "7.6 miles" },
    { name: "Natural Bridge State Park", distance: "7.7 miles" },
    { name: "Blue Ridge Parkway", distance: "15.5 miles" },
    { name: "Goshen Pass Natural Area Preserve", distance: "20.3 miles" },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Nearby Attractions</h2>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-primary" />
            Things to See & Do
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium">{attraction.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{attraction.distance}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
