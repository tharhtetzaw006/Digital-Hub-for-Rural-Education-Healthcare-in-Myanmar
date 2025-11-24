import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Users, Play, Bell, Star } from "lucide-react"
import { EducationNav } from "@/components/education-nav"

export default function LiveClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <EducationNav />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
            >
              <div className="h-full bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn Anywhere, Anytime</h1>
                  <p className="text-xl mb-8 max-w-2xl">
                    Access quality education designed for rural Myanmar students. Interactive lessons, live classes, and
                    offline capabilities ensure learning never stops.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Progress */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-6">Current Progress</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Myanmar Language</span>
                      <Badge variant="secondary">8/10</Badge>
                    </div>
                    <Progress value={80} className="mb-1" />
                    <p className="text-sm text-muted-foreground">80% Complete</p>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Basic Mathematics</span>
                      <Badge variant="secondary">6/12</Badge>
                    </div>
                    <Progress value={50} className="mb-1" />
                    <p className="text-sm text-muted-foreground">50% Complete</p>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Health Education</span>
                      <Badge variant="secondary">9/10</Badge>
                    </div>
                    <Progress value={90} className="mb-1" />
                    <p className="text-sm text-muted-foreground">90% Complete</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Live Classes */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-6">Multiple Ways to Learn</h2>
              <p className="text-muted-foreground mb-8">
                Choose the learning method that works best for your situation and connectivity
              </p>

              {/* Live Classes Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Live Classes</h3>
                <div className="space-y-4">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-16 h-16 bg-cover bg-center rounded-full"
                          style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
                        >
                          <div className="w-full h-full bg-black/20 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold mb-1">Interactive Myanmar Grammar</h4>
                              <p className="text-sm text-muted-foreground mb-2">with Daw Khin Mya</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Today, 2:00 PM
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />3 hours
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  45 students
                                </span>
                              </div>
                            </div>
                            <Badge className="bg-primary/10 text-primary">Starting Soon</Badge>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full">Join Class</Button>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-16 h-16 bg-cover bg-center rounded-full"
                          style={{ backgroundImage: "url('/myanmar-math-class.jpg')" }}
                        >
                          <div className="w-full h-full bg-black/20 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold mb-1">Math Problem Solving</h4>
                              <p className="text-sm text-muted-foreground mb-2">with U Thant Zin</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Tomorrow, 10:00 AM
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  1.5 hours
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  38 students
                                </span>
                              </div>
                            </div>
                            <Badge variant="outline">Scheduled</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-16 h-16 bg-cover bg-center rounded-full"
                          style={{ backgroundImage: "url('/myanmar-computer-training.jpg')" }}
                        >
                          <div className="w-full h-full bg-black/20 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold mb-1">Digital Skills Workshop</h4>
                              <p className="text-sm text-muted-foreground mb-2">with Ko Zaw Min</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Sat, 11:30 AM
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />2 hours
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  29 students
                                </span>
                              </div>
                            </div>
                            <Badge variant="outline">Scheduled</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Bell className="w-4 h-4 mr-2" />
                        Set Reminder
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground mb-8">Real impact from rural Myanmar students</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">MH</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ma Htwe</h4>
                    <p className="text-sm text-muted-foreground">Shan State</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The offline feature helped me continue learning even when our village had no internet. I completed my
                  Myanmar language course and now help teach other children."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Completed 2 courses</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">KM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ko Min</h4>
                    <p className="text-sm text-muted-foreground">Chin State</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The agricultural techniques course improved our family's rice yield by 40%. The practical videos made
                  complex concepts easy to understand."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Completed 3 courses</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">NT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Nang Thida</h4>
                    <p className="text-sm text-muted-foreground">Kayah State</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Digital literacy course opened new opportunities. I now help manage our village's small business
                  accounts and teach computer basics to others."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Completed 4 courses</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
