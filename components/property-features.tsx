import { Bed, Bath, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PropertyFeatures() {
  return (
    <section className="container mx-auto px-4 py-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-3">
              <Bed className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">3 Bedrooms</p>
                <p className="text-sm text-muted-foreground">5 beds total</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">1 Bathroom</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Sleeps 6 guests</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
