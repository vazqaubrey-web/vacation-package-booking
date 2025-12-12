import { CheckCircle2, Calendar, Users, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PackageDetails() {
  const description = `Start your day wrapped in the serenity of a trout-stocked creek, just outside your door—a peaceful retreat made for quiet moments together. End it savoring a glass of wine from a nearby winery as the sunset casts a golden glow over the majestic rock wall, creating the perfect backdrop for romance. This isn't just a getaway—it's an experience crafted for couples to reconnect, unwind, and create memories that will last a lifetime.`

  const inclusions = [
    "3-day, 2-night stay in a Creekside Bungalow",
    "2 tickets to Natural Bridge (one of the 7 natural wonders of the world)",
    "Horseback riding for two (featuring trail rides through our beautiful Virginia countryside)",
    "A catered meal specifically designed by one of our personal chefs, tailored to your family's tastes and dietary needs (choose from chicken, beef, pork, or shrimp)",
    "Self-guided waterfall tour (what better way to make memories with each other than enjoying the majesty of multiple waterfalls)",
    "Self-guided Goshen Pass tour (Goshen pass features steep rock formations offering breathtaking vista views, along with river access, showcasing beautiful rock shelves and natural rock formations in and around the winding Maury River. Perfect for picnicking, fishing, nature photography, or just enjoying one of the world's most scenic drives, just minutes from your vacation rental)",
    "Your choice of homemade brownies or cinnamon rolls (80% cooked with instructions to finish baking, for fresh out-of-the-oven goodness)",
    "House stocked with coffee, tea, and a case of bottled water (additional drinks or food can be added to your package and stocked upon arrival for your convenience)",
    "Your choice of: Dinner, Drinks and Live Music (Choose from various venues a week or two before your getaway arrival. Live music is usually available Wed, Thur, Fri evenings and Sat and Sun evening or mid-day options) OR In Vacation Rental Massage for Two",
  ]

  const finePrint = [
    "Select additional nights/attractions at discounted pricing (we will customize for you)",
    "Specify lunch or dinner for the catered meal",
    "Recommendations included for even more things to see and do and choices for dining options",
  ]

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">Romantic Getaway Package</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-background/50">
          <CardContent className="pt-6">
            <Calendar className="h-5 w-5 mb-2 text-primary" />
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-semibold">3 Days / 2 Nights</div>
          </CardContent>
        </Card>

        <Card className="bg-background/50">
          <CardContent className="pt-6">
            <Users className="h-5 w-5 mb-2 text-primary" />
            <div className="text-sm text-muted-foreground">Perfect For</div>
            <div className="font-semibold">Couples</div>
          </CardContent>
        </Card>

        <Card className="bg-background/50 col-span-2 lg:col-span-1">
          <CardContent className="pt-6">
            <Sparkles className="h-5 w-5 mb-2 text-primary" />
            <div className="text-sm text-muted-foreground">Booking & Stay</div>
            <div className="font-semibold">Period TBD</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Package Inclusions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary/30">
        <CardHeader>
          <CardTitle className="text-lg">Fine Print</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {finePrint.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
