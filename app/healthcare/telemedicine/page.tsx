"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Video, MessageCircle, Star, Languages, Send, X, Phone } from "lucide-react"
import { HealthcareNav } from "@/components/healthcare-nav"
import { useState } from "react"

interface Message {
  id: string
  text: string
  sender: "user" | "doctor"
  timestamp: Date
  doctorName?: string
}

interface Doctor {
  id: string
  name: string
  specialty: string
  rating: number
  consultations: number
  experience: number
  languages: string[]
  avatar: string
  status: string
}

export default function TelemedicinePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [showChat, setShowChat] = useState(false)

  const doctors: Doctor[] = [
    {
      id: "1",
      name: "Dr. Thant Zin Oo",
      specialty: "General Medicine",
      rating: 4.9,
      consultations: 1250,
      experience: 12,
      languages: ["Myanmar", "English"],
      avatar: "DT",
      status: "Available Now",
    },
    {
      id: "2",
      name: "Dr. Aye Aye Win",
      specialty: "Pediatrics",
      rating: 4.8,
      consultations: 890,
      experience: 8,
      languages: ["Myanmar"],
      avatar: "AA",
      status: "Available Now",
    },
    {
      id: "3",
      name: "Dr. Kyaw Min Thu",
      specialty: "Internal Medicine",
      rating: 4.9,
      consultations: 1550,
      experience: 15,
      languages: ["Myanmar", "English"],
      avatar: "KM",
      status: "Available Now",
    },
    {
      id: "4",
      name: "Dr. Khin Mya Mya",
      specialty: "Women's Health",
      rating: 4.7,
      consultations: 1210,
      experience: 10,
      languages: ["Myanmar"],
      avatar: "KM",
      status: "Available Now",
    },
  ]

  const handleStartChat = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setShowChat(true)
    // Initialize with welcome message from doctor
    setMessages([
      {
        id: "1",
        text: `Hello! I'm ${doctor.name}. How can I help you today?`,
        sender: "doctor",
        timestamp: new Date(),
        doctorName: doctor.name,
      },
    ])
  }

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedDoctor) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simulate doctor response
    setTimeout(
      () => {
        const responses = [
          "Thank you for your message. Can you tell me more about your symptoms?",
          "I understand your concern. Let me help you with that.",
          "Based on what you've described, I'd recommend scheduling a video consultation.",
          "That's a good question. Let me provide you with some guidance.",
          "I see. Have you experienced this before?",
          "Let me check your medical history and get back to you.",
        ]

        const doctorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "doctor",
          timestamp: new Date(),
          doctorName: selectedDoctor.name,
        }

        setMessages((prev) => [...prev, doctorResponse])
      },
      1000 + Math.random() * 2000,
    )
  }

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

      {/* Available Doctors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Doctors List */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Available Doctors</h2>

              <div className="space-y-6">
                {doctors.map((doctor, index) => (
                  <Card key={doctor.id} className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-16 h-16 ${index === 0 ? "bg-primary/10" : index === 1 ? "bg-accent/10" : index === 2 ? "bg-secondary/10" : "bg-chart-4/10"} rounded-full flex items-center justify-center`}
                        >
                          <span
                            className={`text-lg font-bold ${index === 0 ? "text-primary" : index === 1 ? "text-accent-foreground" : index === 2 ? "text-secondary" : "text-chart-4"}`}
                          >
                            {doctor.avatar}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{doctor.name}</h3>
                          <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-accent text-accent" />
                              <span>
                                {doctor.rating} ({doctor.consultations.toLocaleString()} consultations)
                              </span>
                            </div>
                            <span>{doctor.experience} years experience</span>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <Languages className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{doctor.languages.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <Badge className="bg-primary/10 text-primary">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {doctor.status}
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm">
                              <Video className="w-4 h-4 mr-2" />
                              Video Call
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleStartChat(doctor)}>
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Chat
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Appointment Booking */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-6">Book Consultation</h3>

                  <div className="mb-6">
                    <h4 className="font-medium mb-4">September 2025</h4>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Morning</h4>
                      <p className="text-sm text-muted-foreground mb-2">12:00 AM - 12:00 PM</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="text-xs bg-transparent">
                          2 slots
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Afternoon</h4>
                      <p className="text-sm text-muted-foreground mb-2">2:00 PM - 5:00 PM</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="text-xs bg-transparent">
                          2 slots
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Evening</h4>
                      <p className="text-sm text-muted-foreground mb-2">6:00 PM - 8:00 PM</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="text-xs bg-transparent">
                          2 slots
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6">Book Consultation</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {showChat && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl h-[600px] flex flex-col">
            <CardContent className="p-0 flex flex-col h-full">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{selectedDoctor.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedDoctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedDoctor.specialty}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setShowChat(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

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
