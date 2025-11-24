"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Video, Calendar, Star, Users, FileText, Camera, Mic, CheckCircle } from "lucide-react"
import Link from "next/link"
import { HealthcareNav } from "@/components/healthcare-nav"

export default function VideoConsultationPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [isScheduling, setIsScheduling] = useState(false)
  const [scheduledAppointment, setScheduledAppointment] = useState<any>(null)

  const handleScheduleAppointment = (doctorName: string) => {
    if (selectedDate && selectedTime) {
      setScheduledAppointment({
        doctor: doctorName,
        date: selectedDate,
        time: selectedTime,
      })
      setIsScheduling(false)
      setSelectedDate("")
      setSelectedTime("")
    }
  }

  const handleVideoCall = (doctorName: string) => {
    alert(`Starting video call with ${doctorName}. Please ensure your camera and microphone are enabled.`)
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
            <h1 className="text-3xl font-bold mb-2">Video Consultation</h1>
            <p className="text-muted-foreground">Connect with qualified doctors through secure video calls</p>
          </div>

          {scheduledAppointment && (
            <Card className="mb-6 border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">
                      Appointment scheduled with {scheduledAppointment.doctor}
                    </p>
                    <p className="text-sm text-green-600">
                      {scheduledAppointment.date} at {scheduledAppointment.time}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Available Doctors */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Doctors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Doctor 1 */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/caring-doctor.png" />
                      <AvatarFallback>TZ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">Dr. Thant Zin Oo</h3>
                          <p className="text-sm text-muted-foreground">General Medicine</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm ml-1">4.9</span>
                            </div>
                            <span className="text-sm text-muted-foreground">(1,250 consultations)</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Available Now</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        12 years experience • Languages: Myanmar, English
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleVideoCall("Dr. Thant Zin Oo")}>
                          <Video className="w-4 h-4 mr-2" />
                          Video Call
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedDoctor("Dr. Thant Zin Oo")}>
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Schedule Appointment with Dr. Thant Zin Oo</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="date">Select Date</Label>
                                <Input
                                  id="date"
                                  type="date"
                                  value={selectedDate}
                                  onChange={(e) => setSelectedDate(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              <div>
                                <Label htmlFor="time">Select Time</Label>
                                <Select value={selectedTime} onValueChange={setSelectedTime}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose time slot" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="09:00">9:00 AM</SelectItem>
                                    <SelectItem value="10:00">10:00 AM</SelectItem>
                                    <SelectItem value="11:00">11:00 AM</SelectItem>
                                    <SelectItem value="14:00">2:00 PM</SelectItem>
                                    <SelectItem value="15:00">3:00 PM</SelectItem>
                                    <SelectItem value="16:00">4:00 PM</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button
                                onClick={() => handleScheduleAppointment("Dr. Thant Zin Oo")}
                                disabled={!selectedDate || !selectedTime}
                                className="w-full"
                              >
                                Confirm Appointment
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>

                  {/* Doctor 2 */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/female-doctor.png" />
                      <AvatarFallback>AW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">Dr. Aye Aye Win</h3>
                          <p className="text-sm text-muted-foreground">Pediatrics</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm ml-1">4.8</span>
                            </div>
                            <span className="text-sm text-muted-foreground">(890 consultations)</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Available Now</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">8 years experience • Languages: Myanmar</p>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleVideoCall("Dr. Aye Aye Win")}>
                          <Video className="w-4 h-4 mr-2" />
                          Video Call
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedDoctor("Dr. Aye Aye Win")}>
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Schedule Appointment with Dr. Aye Aye Win</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="date">Select Date</Label>
                                <Input
                                  id="date"
                                  type="date"
                                  value={selectedDate}
                                  onChange={(e) => setSelectedDate(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              <div>
                                <Label htmlFor="time">Select Time</Label>
                                <Select value={selectedTime} onValueChange={setSelectedTime}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose time slot" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="09:00">9:00 AM</SelectItem>
                                    <SelectItem value="10:00">10:00 AM</SelectItem>
                                    <SelectItem value="11:00">11:00 AM</SelectItem>
                                    <SelectItem value="14:00">2:00 PM</SelectItem>
                                    <SelectItem value="15:00">3:00 PM</SelectItem>
                                    <SelectItem value="16:00">4:00 PM</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button
                                onClick={() => handleScheduleAppointment("Dr. Aye Aye Win")}
                                disabled={!selectedDate || !selectedTime}
                                className="w-full"
                              >
                                Confirm Appointment
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>

                  {/* Doctor 3 */}
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/doctor-specialist.jpg" />
                      <AvatarFallback>KM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">Dr. Kyaw Min Thu</h3>
                          <p className="text-sm text-muted-foreground">Internal Medicine</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm ml-1">4.9</span>
                            </div>
                            <span className="text-sm text-muted-foreground">(1,550 consultations)</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Available Now</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        15 years experience • Languages: Myanmar, English
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleVideoCall("Dr. Kyaw Min Thu")}>
                          <Video className="w-4 h-4 mr-2" />
                          Video Call
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedDoctor("Dr. Kyaw Min Thu")}>
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Schedule Appointment with Dr. Kyaw Min Thu</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="date">Select Date</Label>
                                <Input
                                  id="date"
                                  type="date"
                                  value={selectedDate}
                                  onChange={(e) => setSelectedDate(e.target.value)}
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                              <div>
                                <Label htmlFor="time">Select Time</Label>
                                <Select value={selectedTime} onValueChange={setSelectedTime}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose time slot" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="09:00">9:00 AM</SelectItem>
                                    <SelectItem value="10:00">10:00 AM</SelectItem>
                                    <SelectItem value="11:00">11:00 AM</SelectItem>
                                    <SelectItem value="14:00">2:00 PM</SelectItem>
                                    <SelectItem value="15:00">3:00 PM</SelectItem>
                                    <SelectItem value="16:00">4:00 PM</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button
                                onClick={() => handleScheduleAppointment("Dr. Kyaw Min Thu")}
                                disabled={!selectedDate || !selectedTime}
                                className="w-full"
                              >
                                Confirm Appointment
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Preparation */}
              <Card>
                <CardHeader>
                  <CardTitle>Prepare for Your Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="reason">Reason for consultation</Label>
                    <Textarea id="reason" placeholder="Briefly describe your symptoms or concerns..." />
                  </div>
                  <div>
                    <Label htmlFor="duration">How long have you had these symptoms?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-day">Less than 1 day</SelectItem>
                        <SelectItem value="1-3-days">1-3 days</SelectItem>
                        <SelectItem value="1-week">About 1 week</SelectItem>
                        <SelectItem value="2-weeks">2 weeks</SelectItem>
                        <SelectItem value="1-month">About 1 month</SelectItem>
                        <SelectItem value="longer">Longer than 1 month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="medications">Current medications (if any)</Label>
                    <Textarea id="medications" placeholder="List any medications you're currently taking..." />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Video Call Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Video Call Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Camera className="w-5 h-5 text-primary" />
                    <span className="text-sm">Camera enabled</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mic className="w-5 h-5 text-primary" />
                    <span className="text-sm">Microphone enabled</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Stable internet connection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm">Medical documents ready</span>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How It Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Choose Doctor</p>
                      <p className="text-xs text-muted-foreground">Select available doctor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Join Waiting Room</p>
                      <p className="text-xs text-muted-foreground">Wait for doctor to join</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Video Consultation</p>
                      <p className="text-xs text-muted-foreground">Discuss your health concerns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-sm">Receive Prescription</p>
                      <p className="text-xs text-muted-foreground">Get digital prescription</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Consultation Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">General Medicine</span>
                    <span className="font-medium">15,000 MMK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Specialist</span>
                    <span className="font-medium">25,000 MMK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Follow-up</span>
                    <span className="font-medium">10,000 MMK</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Payment accepted: Mobile banking, Cash on mobile clinic visit
                    </p>
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
