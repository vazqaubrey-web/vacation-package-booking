import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "What is included in the Romantic Getaway Package?",
    answer:
      "The package includes a 3-day, 2-night stay in our Creekside Bungalow, 2 tickets to Natural Bridge, horseback riding for two, a catered meal by our personal chef (choice of chicken, beef, pork, or shrimp), self-guided waterfall and Goshen Pass tours, homemade brownies or cinnamon rolls, coffee, tea, and bottled water, plus your choice of either dinner with live music or an in-home couples massage.",
  },
  {
    question: "How many guests can the property accommodate?",
    answer:
      "The Creekside Bungalow sleeps up to 6 guests comfortably with 3 bedrooms (each with a queen bed, plus 1 twin bed in bedroom 3) and a twin sleeper sofa in the living room. The property has 1 bathroom and is perfect for couples or small families.",
  },
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. If you need flexibility with these times, please contact us and we'll do our best to accommodate your schedule based on availability.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "This Romantic Getaway Package is non-refundable. However, we understand that life happens! If you need to reschedule your stay, we're happy to accommodate as long as there is availability. A small rescheduling fee will apply. Please contact us as soon as possible to make arrangements.",
  },
  {
    question: "What attractions are nearby?",
    answer:
      "You're perfectly positioned to explore the beautiful Shenandoah Valley! Natural Bridge State Park (7.7 miles), Virginia Safari Park (4.8 miles), Caverns at Natural Bridge (7.6 miles), and Dinosaur Kingdom II (6.3 miles) are all nearby. The Blue Ridge Parkway is just 15.5 miles away, and Goshen Pass Natural Area Preserve is 20.3 miles for scenic drives and river access.",
  },
  {
    question: "Is there parking and WiFi available?",
    answer:
      "Yes! Free parking is available on the premises for your convenience. The property also includes WiFi so you can stay connected if needed, though we encourage you to unplug and enjoy the peaceful waterfront setting.",
  },
  {
    question: "What amenities does the property have?",
    answer:
      "The property is fully equipped with a complete kitchen (refrigerator, microwave, coffee makers including Keurig), washer and dryer, TV, heating and AC, 1800 thread count linens, and all essentials. Outdoors, enjoy the screened-in porch, deck with charcoal and gas grills, stone patio, wood-burning fire pit, and direct access to 2 beautiful on-site creeks on your private 2-acre property.",
  },
  {
    question: "Can I customize my package or add extra nights?",
    answer:
      "You can select additional nights and attractions at discounted pricing. We're happy to customize the package for you. You can also specify whether you'd like your catered meal for lunch or dinner, and we'll provide recommendations for even more things to see and do in the area.",
  },
  {
    question: "What makes this location special?",
    answer:
      "Your Creekside Bungalow sits on 2 private waterfront acres with amazing views of both the creek and a majestic rock wall. Wake up to the sound of the trout-stocked creek just outside your door, enjoy complete privacy on the entire property, and watch stunning sunsets while surrounded by the natural beauty of the Shenandoah Valley. It's truly a peaceful escape off the beaten path.",
  },
  {
    question: "Are pets allowed at the property?",
    answer:
      "Please contact us directly regarding our pet policy. We want to ensure all guests have the most relaxing and romantic experience possible.",
  },
]

export default function FAQSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <Card>
        <CardHeader>
          <CardTitle>Everything you need to know</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}
