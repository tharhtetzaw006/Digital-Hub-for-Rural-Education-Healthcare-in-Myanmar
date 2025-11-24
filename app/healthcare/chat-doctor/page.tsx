"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Paperclip, ImageIcon, Calendar, Star, Clock, Phone } from "lucide-react"
import Link from "next/link"
import { HealthcareNav } from "@/components/healthcare-nav"

export default function ChatDoctorPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      content: "Hello! I'm Dr. Thant Zin Oo. How can I help you today? Please describe your symptoms or concerns.",
      timestamp: "2 minutes ago",
      avatar: "/caring-doctor.png",
    },
    {
      id: 2,
      sender: "user",
      content:
        "Hi Doctor, I've been having headaches for the past 3 days. They're getting worse and I'm also feeling nauseous.",
      timestamp: "1 minute ago",
    },
    {
      id: 3,
      sender: "doctor",
      content:
        "I understand your concern. Headaches with nausea can have several causes. Can you tell me:\n• Where exactly is the pain located?\n• On a scale of 1-10, how severe is the pain?\n• Any recent stress or changes in sleep?\n• Are you taking any medications?",
      timestamp: "Just now",
      avatar: "/caring-doctor.png",
    },
  ])
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Thant Zin Oo")

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        content: message,
        timestamp: "Just now",
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate doctor response after 2 seconds
      setTimeout(() => {
        const doctorResponse = {
          id: messages.length + 2,
          sender: "doctor",
          content: "Thank you for the information. Based on your symptoms, I recommend...",
          timestamp: "Just now",
          avatar: "/caring-doctor.png",
        }
        setMessages((prev) => [...prev, doctorResponse])
      }, 2000)
    }
  }

  const handleSelectDoctor = (doctorName: string, avatar: string) => {
    setSelectedDoctor(doctorName)
    // Reset chat when switching doctors
    setMessages([
      {
        id: 1,
        sender: "doctor",
        content: `Hello! I'm ${doctorName}. How can I help you today? Please describe your symptoms or concerns.`,
        timestamp: "Just now",
        avatar: avatar,
      },
    ])
  }

  return (
    <div className="min-h-screen bg-background">
      <HealthcareNav />

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/healthcare" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Healthcare Portal
            </Link>
            <h1 className="text-3xl font-bold mb-2">Chat with Doctor</h1>
            <p className="text-muted-foreground">Get quick medical advice through secure messaging</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Doctor List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Available Doctors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Active Doctor */}
                  <div
                    className={`p-3 border rounded-lg cursor-pointer ${selectedDoctor === "Dr. Thant Zin Oo" ? "bg-primary/5 border-primary/20" : "hover:bg-muted/50"}`}
                    onClick={() => handleSelectDoctor("Dr. Thant Zin Oo", "/caring-doctor.png")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/caring-doctor.png" />
                        <AvatarFallback>TZ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Dr. Thant Zin Oo</h4>
                        <p className="text-xs text-muted-foreground">General Medicine</p>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                      <Badge className="bg-green-100 text-green-800 text-xs">Online</Badge>
                    </div>
                  </div>

                  {/* Other Doctors */}
                  <div
                    className={`p-3 border rounded-lg cursor-pointer ${selectedDoctor === "Dr. Aye Aye Win" ? "bg-primary/5 border-primary/20" : "hover:bg-muted/50"}`}
                    onClick={() => handleSelectDoctor("Dr. Aye Aye Win", "/female-doctor.png")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/female-doctor.png" />
                        <AvatarFallback>AW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Dr. Aye Aye Win</h4>
                        <p className="text-xs text-muted-foreground">Pediatrics</p>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.8</span>
                      <Badge className="bg-green-100 text-green-800 text-xs">Online</Badge>
                    </div>
                  </div>

                  <div
                    className={`p-3 border rounded-lg cursor-pointer ${selectedDoctor === "Dr. Kyaw Min Thu" ? "bg-primary/5 border-primary/20" : "hover:bg-muted/50"}`}
                    onClick={() => handleSelectDoctor("Dr. Kyaw Min Thu", "/doctor-specialist.jpg")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/doctor-specialist.jpg" />
                        <AvatarFallback>KM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Dr. Kyaw Min Thu</h4>
                        <p className="text-xs text-muted-foreground">Internal Medicine</p>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                      <Badge className="bg-green-100 text-green-800 text-xs">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={
                            selectedDoctor === "Dr. Thant Zin Oo"
                              ? "/caring-doctor.png"
                              : selectedDoctor === "Dr. Aye Aye Win"
                                ? "/female-doctor.png"
                                : "/doctor-specialist.jpg"
                          }
                        />
                        <AvatarFallback>
                          {selectedDoctor.split(" ")[1]?.charAt(0)}
                          {selectedDoctor.split(" ")[2]?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{selectedDoctor}</h3>
                        <p className="text-sm text-muted-foreground">
                          {selectedDoctor === "Dr. Thant Zin Oo"
                            ? "General Medicine"
                            : selectedDoctor === "Dr. Aye Aye Win"
                              ? "Pediatrics"
                              : "Internal Medicine"}{" "}
                          • Online
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Chat Messages */}
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : ""}`}
                      >
                        {msg.sender === "doctor" && (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={msg.avatar || "/placeholder.svg"} />
                            <AvatarFallback>Dr</AvatarFallback>
                          </Avatar>
                        )}
                        <div className={`flex-1 ${msg.sender === "user" ? "text-right" : ""}`}>
                          <div
                            className={`p-3 rounded-lg ${msg.sender === "user" ? "bg-primary text-primary-foreground rounded-tr-none inline-block" : "bg-muted rounded-tl-none"}`}
                          >
                            <p className="text-sm whitespace-pre-line">{msg.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                        </div>
                        {msg.sender === "user" && (
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>You</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Chat Input */}
                <div className="border-t p-4">
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message..."
                        className="min-h-[60px] resize-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <ImageIcon className="w-4 h-4" />
                      </Button>
                      <Button size="sm" onClick={handleSendMessage} disabled={!message.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    You can attach images, documents, or medical reports to help with diagnosis
                  </p>
                </div>
              </Card>
            </div>

            {/* Chat Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Chat Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chat Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <p>• Be specific about your symptoms</p>
                    <p>• Mention duration and severity</p>
                    <p>• Share relevant medical history</p>
                    <p>• Attach photos if helpful</p>
                    <p>• Ask questions if unclear</p>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average response:</span>
                      <span className="font-medium">2-5 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Current status:</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">Emergency?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-destructive mb-3">
                    For life-threatening emergencies, call our hotline immediately.
                  </p>
                  <Link href="/healthcare/emergency">
                    <Button variant="destructive" size="sm" className="w-full">
                      Emergency Hotline
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Consultation History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Chats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <div className="p-2 border rounded">
                      <p className="font-medium">Dr. Thant Zin Oo</p>
                      <p className="text-muted-foreground text-xs">Headache consultation - Today</p>
                    </div>
                    <div className="p-2 border rounded">
                      <p className="font-medium">Dr. Aye Aye Win</p>
                      <p className="text-muted-foreground text-xs">Child fever - 2 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
