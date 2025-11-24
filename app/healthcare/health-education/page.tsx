import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, ArrowRight } from "lucide-react"
import { HealthcareNav } from "@/components/healthcare-nav"

export default function HealthEducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <HealthcareNav />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/health-hero-education.jpg"
            alt="Health education session with villagers in Myanmar"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 to-background/75" />
        </div>
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

      {/* Health Education Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Comprehensive Healthcare Services</h2>
          <p className="text-muted-foreground mb-12">
            Access quality healthcare through multiple channels designed for rural communities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40">
                <img
                  src="/images/health-clean-water.jpg"
                  alt="Villagers learning about clean water and sanitation"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Clean Water & Sanitation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential practices for preventing waterborne diseases in rural areas
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>5 min</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40">
                <img
                  src="/images/health-disease-prevention.jpg"
                  alt="Health worker teaching disease prevention in Myanmar"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Common Disease Prevention</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How to prevent malaria, dengue, and other common diseases
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>7 min</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40">
                <img
                  src="/images/health-maternal.jpg"
                  alt="Maternal health awareness session for expectant mothers"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Maternal Health Care</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Important guidance for expectant mothers in rural communities
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>8 min</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40">
                <img
                  src="/images/health-child-nutrition.jpg"
                  alt="Nutrition guidance for mothers and children"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Child Nutrition</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Proper nutrition for healthy child development using local foods
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>6 min</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40">
                <img
                  src="/images/health-mental-awareness.jpg"
                  alt="Community meeting about mental health awareness"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-chart-4" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Mental Health Awareness</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Understanding and addressing mental health in rural communities
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>10 min</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40">
                <img
                  src="/images/health-first-aid.jpg"
                  alt="First aid demonstration in rural village"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-chart-5/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-chart-5" />
                </div>
                <h3 className="text-lg font-semibold mb-3">First Aid Basics</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential first aid skills every rural family should know
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">Article</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>12 min</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
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
