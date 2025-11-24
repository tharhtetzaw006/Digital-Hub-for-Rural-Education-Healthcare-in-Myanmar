import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Bell } from "lucide-react"
import { HealthcareNav } from "@/components/healthcare-nav"

export default function MobileClinicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HealthcareNav />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
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

      {/* Mobile Clinics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Mobile Clinic</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Clinic 1 - Active */}
            <Card className="p-6 border-primary/20 bg-primary/5">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Mobile Clinic</h3>
                  <Badge className="bg-primary/10 text-primary">Active Now</Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Shan State - Taunggyi</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Today 9:00 AM - 4:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dr. Thant Zin Oo</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• General Check-up</li>
                    <li>• Vaccinations</li>
                    <li>• Basic Surgery</li>
                  </ul>
                </div>
                <Button className="w-full">Get Directions</Button>
              </CardContent>
            </Card>

            {/* Clinic 2 - Scheduled */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Mobile Clinic</h3>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Chin State - Hakha</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Tomorrow 10:00 AM - 3:30 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dr. Aye Aye Win</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Maternal Care</li>
                    <li>• Child Health</li>
                    <li>• Health Education</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>

            {/* Clinic 3 - Scheduled */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Mobile Clinic</h3>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Kayah State - Loikaw</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Dec 28 - 8:00 AM - 5:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dr. Kyaw Min Thu</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Dental Care</li>
                    <li>• Eye Examination</li>
                    <li>• Chronic Disease</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>

            {/* Clinic 4 - Scheduled */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Mobile Clinic</h3>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Mon State - Mawlamyine</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Dec 30 - 9:30 AM - 4:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dr. Khin Mya Mya</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Women's Health</li>
                    <li>• Family Planning</li>
                    <li>• Vaccination</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>

            {/* Clinic 5 - Scheduled */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Mobile Clinic</h3>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Rakhine State - Sittwe</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Jan 2 - 10:00 AM - 3:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dr. Thant Zin Oo</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• General Medicine</li>
                    <li>• Emergency Care</li>
                    <li>• Pediatrics</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>

            {/* Clinic 6 - Scheduled */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Mobile Clinic</h3>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Kachin State - Myitkyina</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Jan 5 - 8:30 AM - 4:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dr. Aye Aye Win</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Services:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Immunization</li>
                    <li>• Growth Monitoring</li>
                    <li>• Health Screening</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>
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
