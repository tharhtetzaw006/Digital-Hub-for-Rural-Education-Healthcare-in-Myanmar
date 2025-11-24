"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { useLang } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLang()
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Digital Hub Myanmar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team to learn more about bringing digital education and healthcare services to your
            community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <p className="text-muted-foreground">Send us a message and we'll respond within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="+95-xxx-xxx-xxxx" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Organization/Village</label>
                    <Input placeholder="Your organization or village name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="What would you like to discuss?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your community's needs and how Digital Hub can help..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">
                      Digital Hub Myanmar
                      <br />
                      123 Technology Street
                      <br />
                      Yangon, Myanmar 11181
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: +95-1-234-5678
                      <br />
                      Emergency Hotline: +95-1-234-5678
                      <br />
                      Technical Support: +95-1-234-5679
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Addresses</h3>
                    <p className="text-muted-foreground">
                      General: info@digitalhub.mm
                      <br />
                      Support: support@digitalhub.mm
                      <br />
                      Partnerships: partners@digitalhub.mm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground">
                      Office Hours: Monday - Friday, 8:00 AM - 6:00 PM
                      <br />
                      Emergency Support: 24/7 Available
                      <br />
                      Telemedicine: 24/7 Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Mandalay Region</h3>
                    <p className="text-muted-foreground text-sm">
                      Serving Upper Myanmar communities
                      <br />
                      Contact: +95-2-234-5678
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Shan State</h3>
                    <p className="text-muted-foreground text-sm">
                      Serving Eastern Myanmar communities
                      <br />
                      Contact: +95-81-234-567
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Chin State</h3>
                    <p className="text-muted-foreground text-sm">
                      Serving Western Myanmar communities
                      <br />
                      Contact: +95-70-234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
