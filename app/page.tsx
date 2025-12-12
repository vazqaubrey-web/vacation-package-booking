import PropertyHero from "@/components/property-hero"
import PropertyGallery from "@/components/property-gallery"
import PropertyFeatures from "@/components/property-features"
import BookingSection from "@/components/booking-section"
import AmenitiesSection from "@/components/amenities-section"
import FAQSection from "@/components/faq-section"
import PolicySection from "@/components/policy-section"
import PackageDetails from "@/components/package-details"
import CountdownWidget from "@/components/countdown-widget"
import NearbyAttractions from "@/components/nearby-attractions"
import ReviewsSection from "@/components/reviews-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PropertyHero />
      <PropertyGallery />
      <PropertyFeatures />
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <PackageDetails />
            <AmenitiesSection />
            <NearbyAttractions />
            <ReviewsSection />
            <FAQSection />
            <PolicySection />
          </div>
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-6">
              <CountdownWidget />
              <BookingSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
