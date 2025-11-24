import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Download } from "lucide-react"
import { HealthcareNav } from "@/components/healthcare-nav"

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <HealthcareNav />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-destructive/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Healthcare at Your Fingertips</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with qualified doctors, access health education, and schedule mobile clinic visits. Quality
            healthcare for every rural community in Myanmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Book Consultation</Button>
            <Button variant="outline" size="lg" className="bg-transparent">
              Find Mobile Clinic
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Hotline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Emergency Hotline */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Emergency Hotline</h2>
              <Card className="p-8 border-destructive/20 bg-destructive/5">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-destructive" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">24/7 Emergency Medical Support</h3>
                    <Badge className="bg-destructive/10 text-destructive mb-4">Call Immediately</Badge>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-3xl font-bold text-destructive mb-2">+95-1-234-5678</div>
                    <p className="text-sm text-muted-foreground">Free from all networks</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-4">When to Call</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Severe injury or accident</li>
                      <li>• Difficulty breathing</li>
                      <li>• Chest pain or heart problems</li>
                      <li>• Severe bleeding</li>
                      <li>• Loss of consciousness</li>
                      <li>• Poisoning or overdose</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-destructive hover:bg-destructive/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Emergency Preparedness */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Emergency Preparedness</h2>
              <p className="text-muted-foreground mb-6">Be ready for medical emergencies</p>

              <Card className="p-6 mb-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4">Emergency Kit Essentials</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Basic first aid supplies</li>
                    <li>• Emergency medications</li>
                    <li>• Clean water and food</li>
                    <li>• Flashlight and batteries</li>
                    <li>• Important phone numbers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 mb-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4">Nearest Hospital</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Taunggyi General Hospital</h4>
                      <p className="text-sm text-muted-foreground mb-1">Distance: 45 km</p>
                      <p className="text-sm text-muted-foreground">Phone: +95-81-21234</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-transparent" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Emergency Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Healthcare Impact</h2>
            <p className="text-muted-foreground">Real results from our healthcare services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,400+</div>
              <div className="text-sm text-muted-foreground">Consultations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Villages Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
