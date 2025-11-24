import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Stethoscope, Heart, Thermometer, Activity, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { HealthcareNav } from "@/components/healthcare-nav"

export default function QuickHealthCheckPage() {
  return (
    <div className="min-h-screen bg-background">
      <HealthcareNav />

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/healthcare" className="text-primary hover:underline mb-4 inline-block">
              ← Back to Healthcare Portal
            </Link>
            <h1 className="text-3xl font-bold mb-2">Quick Health Check</h1>
            <p className="text-muted-foreground">Complete a comprehensive health assessment in just 15 minutes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Assessment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter your age" />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" placeholder="Enter height" />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" placeholder="Enter weight" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vital Signs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Vital Signs (Optional)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="blood-pressure">Blood Pressure (mmHg)</Label>
                      <Input id="blood-pressure" placeholder="e.g., 120/80" />
                    </div>
                    <div>
                      <Label htmlFor="heart-rate">Heart Rate (bpm)</Label>
                      <Input id="heart-rate" type="number" placeholder="e.g., 72" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="temperature">Temperature (°C)</Label>
                      <Input id="temperature" type="number" step="0.1" placeholder="e.g., 36.5" />
                    </div>
                    <div>
                      <Label htmlFor="blood-sugar">Blood Sugar (mg/dL)</Label>
                      <Input id="blood-sugar" type="number" placeholder="e.g., 100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Symptoms Checker */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Current Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Fever",
                      "Headache",
                      "Cough",
                      "Sore throat",
                      "Nausea",
                      "Fatigue",
                      "Chest pain",
                      "Shortness of breath",
                      "Dizziness",
                      "Joint pain",
                      "Skin rash",
                      "Stomach pain",
                    ].map((symptom) => (
                      <div key={symptom} className="flex items-center space-x-2">
                        <Checkbox id={symptom.toLowerCase().replace(" ", "-")} />
                        <Label htmlFor={symptom.toLowerCase().replace(" ", "-")}>{symptom}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="other-symptoms">Other symptoms or concerns</Label>
                    <Textarea id="other-symptoms" placeholder="Describe any other symptoms..." />
                  </div>
                </CardContent>
              </Card>

              {/* Medical History */}
              <Card>
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Do you have any chronic conditions?</Label>
                    <div className="grid md:grid-cols-2 gap-2 mt-2">
                      {[
                        "Diabetes",
                        "Hypertension",
                        "Heart disease",
                        "Asthma",
                        "Kidney disease",
                        "Liver disease",
                        "Cancer",
                        "Mental health conditions",
                      ].map((condition) => (
                        <div key={condition} className="flex items-center space-x-2">
                          <Checkbox id={condition.toLowerCase().replace(" ", "-")} />
                          <Label htmlFor={condition.toLowerCase().replace(" ", "-")}>{condition}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="medications">Current medications</Label>
                    <Textarea id="medications" placeholder="List any medications you're currently taking..." />
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg">
                <CheckCircle className="w-5 h-5 mr-2" />
                Complete Health Assessment
              </Button>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Health Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Health Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Monitor Temperature</p>
                      <p className="text-xs text-muted-foreground">Normal: 36.1-37.2°C</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Check Blood Pressure</p>
                      <p className="text-xs text-muted-foreground">Normal: Less than 120/80</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Heart Rate</p>
                      <p className="text-xs text-muted-foreground">Normal: 60-100 bpm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Warning */}
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Emergency Signs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-destructive mb-3">Call emergency immediately if you have:</p>
                  <ul className="text-xs space-y-1 text-destructive">
                    <li>• Severe chest pain</li>
                    <li>• Difficulty breathing</li>
                    <li>• Loss of consciousness</li>
                    <li>• Severe bleeding</li>
                    <li>• Signs of stroke</li>
                  </ul>
                  <Link href="/healthcare/emergency">
                    <Button variant="destructive" size="sm" className="w-full mt-3">
                      Emergency Hotline
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">After Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/healthcare/telemedicine">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Book Video Consultation
                    </Button>
                  </Link>
                  <Link href="/healthcare/telemedicine">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Chat with Doctor
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
