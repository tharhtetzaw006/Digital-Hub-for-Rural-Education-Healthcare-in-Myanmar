"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, BookOpen, Stethoscope, Clock, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { useLang } from "@/components/language-provider"

export default function SupportPage() {
  const { t } = useLang()
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Help & Support Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get help with Digital Hub Myanmar services. Our support team is here to assist rural communities 24/7.
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Education Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Get help with courses, resources, and learning platforms.</p>
                <Link href="/education">
                  <Button variant="outline" className="w-full bg-transparent">
                    Access Education Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  Healthcare Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Get assistance with telemedicine and health services.</p>
                <Link href="/healthcare">
                  <Button variant="outline" className="w-full bg-transparent">
                    Access Healthcare Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">24/7 emergency hotline for urgent medical assistance.</p>
                <a href="tel:+9512345678" className="w-full inline-flex">
                  <Button className="w-full">Call Emergency Hotline</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Emergency Hotline</p>
                    <p className="text-muted-foreground">+95-1-234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Support Email</p>
                    <p className="text-muted-foreground">support@digitalhub.mm</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Community Support</p>
                    <p className="text-muted-foreground">Local coordinators in 50+ villages</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" action="/api/feedback" method="post">
                  <div>
                    <label className="text-sm font-medium mb-2 block" htmlFor="fullName">
                      Full Name
                    </label>
                    <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block" htmlFor="email">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block" htmlFor="subject">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block" htmlFor="message">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your issue or question..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How do I access courses offline?</h3>
                  <p className="text-muted-foreground">
                    Visit the Education Portal, go to any course, and click "Download for Offline". Materials will be
                    saved to your device for offline access.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How do I book a telemedicine consultation?</h3>
                  <p className="text-muted-foreground">
                    Go to Healthcare Portal → Telemedicine, select a doctor, choose your preferred time slot, and
                    confirm your appointment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What should I do in a medical emergency?</h3>
                  <p className="text-muted-foreground">
                    Call our 24/7 emergency hotline at +95-1-234-5678 immediately. For non-urgent issues, use the
                    telemedicine chat feature.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How do I find mobile clinic schedules?</h3>
                  <p className="text-muted-foreground">
                    Visit Healthcare Portal → Mobile Clinics to see schedules for all Myanmar states. You can set
                    reminders for upcoming visits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
