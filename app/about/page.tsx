"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Target, Globe, BookOpen, Stethoscope, Smartphone } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { useLang } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLang()
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Digital Hub Myanmar</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are dedicated to bridging the digital divide in rural Myanmar by providing accessible, high-quality
            education and healthcare services through innovative technology solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-8 h-8 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground leading-relaxed">
                To empower rural Myanmar communities by providing accessible digital education and telemedicine services
                that overcome geographical barriers and improve quality of life for all residents.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Globe className="w-8 h-8 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground leading-relaxed">
                A connected Myanmar where every rural community has equal access to world-class education and healthcare
                services, fostering sustainable development and prosperity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Villages Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,400+</div>
              <div className="text-muted-foreground">Health Consultations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BookOpen className="w-8 h-8 text-primary" />
                  Education Portal
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Interactive courses in Myanmar language, mathematics, and digital skills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Live classes with qualified teachers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Offline learning capabilities for areas with limited internet
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Comprehensive resource library with downloadable materials
                  </li>
                </ul>
                <Link href="/education" className="inline-block mt-6">
                  <Button>Explore Education Portal</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Stethoscope className="w-8 h-8 text-primary" />
                  Healthcare Platform
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    24/7 telemedicine consultations with qualified doctors
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Mobile clinic scheduling across Myanmar states
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Emergency hotline and preparedness resources
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Health education materials and preventive care guidance
                  </li>
                </ul>
                <Link href="/healthcare" className="inline-block mt-6">
                  <Button>Access Healthcare Platform</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground">
                Optimized for smartphones and tablets, ensuring accessibility for rural users with basic devices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Offline Capabilities</h3>
              <p className="text-muted-foreground">
                Download content for offline use, ensuring learning and healthcare access even without internet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community-Centered</h3>
              <p className="text-muted-foreground">
                Built with input from rural communities to address real needs and cultural considerations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Community?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of rural Myanmar residents already benefiting from our digital education and healthcare
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
