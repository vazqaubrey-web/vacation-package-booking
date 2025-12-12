import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export default function PolicySection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Cancellation Policy</h2>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Non-Refundable with Rescheduling Option
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            We understand that life happens! This special offer Romantic Getaway package is non-refundable; however, if
            you need to reschedule your stay, we're happy to accommodate as long as there is availability.
          </p>

          <div className="bg-secondary/30 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Rescheduling Policy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• A small rescheduling fee will apply</li>
              <li>• Rescheduling is subject to availability</li>
              <li>• Please contact us as soon as possible to make the necessary arrangements</li>
            </ul>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground italic">
              For questions or to reschedule your stay, please reach out to us at your earliest convenience.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
