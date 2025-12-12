import { MapPin } from "lucide-react"

export default function PropertyHero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>Lexington & Natural Bridge, Virginia</span>
        </div>

        <p className="text-sm text-muted-foreground mb-2">Welcome to your next romantic getaway</p>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-balance">
          A peaceful escape for nature lovers, adventure seekers, & romance
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
          Private waterfront acres in beautiful Shenandoah Valley situated off the beaten path yet conveniently located
          between Lexington and Natural Bridge, VA
        </p>
      </div>
    </section>
  )
}
