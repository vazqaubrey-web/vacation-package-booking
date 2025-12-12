import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah & Michael T.",
      date: "October 2024",
      rating: 5,
      text: "This was the perfect romantic getaway! The creek outside our door was so peaceful, and the sunset over the rock wall was absolutely breathtaking. The horseback riding and Natural Bridge tour were highlights. We loved every moment!",
    },
    {
      name: "Jennifer L.",
      date: "September 2024",
      rating: 5,
      text: "The Creekside Bungalow exceeded our expectations. The catered meal was delicious, and the screened-in porch became our favorite spot. The property is so private and serene. We can't wait to come back!",
    },
    {
      name: "David & Emma R.",
      date: "August 2024",
      rating: 5,
      text: "Everything was thoughtfully planned - from the fresh brownies to the waterfall tour. The location is perfect for exploring the Shenandoah Valley. Our massage experience was incredibly relaxing. Highly recommend!",
    },
    {
      name: "Amanda K.",
      date: "July 2024",
      rating: 5,
      text: "This romantic package is worth every penny. The privacy, the views, the activities - all perfect. The hosts thought of everything. We made memories that will last a lifetime. Thank you!",
    },
  ]

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Guest Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-lg font-semibold">5.0</span>
          <span className="text-muted-foreground">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{review.text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
