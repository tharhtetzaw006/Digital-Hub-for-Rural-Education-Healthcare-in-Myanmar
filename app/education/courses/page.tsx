"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Users, Star, Download, Play, CheckCircle } from "lucide-react"
import Image from "next/image"
import { EducationNav } from "@/components/education-nav"
import { useLang } from "@/components/language-provider"

export default function CoursesPage() {
  const { t } = useLang()

  return (
    <div className="min-h-screen bg-background">
      <EducationNav />

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-balance mb-4">{t("education.courses")}</h1>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl">
            {t("education.coursesDesc") ||
              "Comprehensive learning programs designed specifically for rural Myanmar communities"}
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Myanmar Language Course */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/myanmar-students-learning.jpg"
                  alt="Myanmar students learning in classroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Interactive Myanmar Grammar
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm">4.9</span>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    12 weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    1,250 enrolled
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    24 lessons
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">{t("common.overview") || "Overview"}</TabsTrigger>
                    <TabsTrigger value="syllabus">{t("offline.syllabus") || "Syllabus"}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-muted-foreground mb-4">
                      Master Myanmar grammar with interactive lessons, practical exercises, and cultural context.
                      Perfect for students wanting to improve their written and spoken Myanmar.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Offline learning capability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Interactive exercises</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Cultural context lessons</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="syllabus" className="mt-4">
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 1-3: Basic Grammar</h4>
                        <p className="text-sm text-muted-foreground">Sentence structure, word order, basic particles</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 4-6: Verb Forms</h4>
                        <p className="text-sm text-muted-foreground">Tenses, aspects, verb conjugations</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 7-9: Complex Sentences</h4>
                        <p className="text-sm text-muted-foreground">Compound sentences, relative clauses</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 10-12: Advanced Topics</h4>
                        <p className="text-sm text-muted-foreground">
                          Formal writing, literary expressions, cultural usage
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Start Course
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mathematics Course */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/myanmar-math-class.jpg"
                  alt="Myanmar students learning mathematics"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">Popular</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Basic Mathematics
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm">4.8</span>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    16 weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    890 enrolled
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    32 lessons
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">{t("common.overview") || "Overview"}</TabsTrigger>
                    <TabsTrigger value="syllabus">{t("offline.syllabus") || "Syllabus"}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-muted-foreground mb-4">
                      Fundamental mathematics concepts with practical applications for daily life and business. Includes
                      arithmetic, basic algebra, and problem-solving techniques.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Step-by-step video lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Practical applications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Business math included</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="syllabus" className="mt-4">
                    <div className="space-y-3">
                      <div className="border-l-2 border-accent pl-4">
                        <h4 className="font-semibold">Week 1-4: Basic Arithmetic</h4>
                        <p className="text-sm text-muted-foreground">Addition, subtraction, multiplication, division</p>
                      </div>
                      <div className="border-l-2 border-accent pl-4">
                        <h4 className="font-semibold">Week 5-8: Fractions & Decimals</h4>
                        <p className="text-sm text-muted-foreground">Working with fractions, decimal operations</p>
                      </div>
                      <div className="border-l-2 border-accent pl-4">
                        <h4 className="font-semibold">Week 9-12: Percentages & Ratios</h4>
                        <p className="text-sm text-muted-foreground">Percentage calculations, ratios, proportions</p>
                      </div>
                      <div className="border-l-2 border-accent pl-4">
                        <h4 className="font-semibold">Week 13-16: Basic Algebra</h4>
                        <p className="text-sm text-muted-foreground">Variables, simple equations, problem solving</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Start Course
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Health Education Course */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/myanmar-health-education.jpg"
                  alt="Health education session in Myanmar village"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-background">
                    Essential
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Health Education
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm">4.9</span>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />8 weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    1,100 enrolled
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    16 lessons
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">{t("common.overview") || "Overview"}</TabsTrigger>
                    <TabsTrigger value="syllabus">{t("offline.syllabus") || "Syllabus"}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-muted-foreground mb-4">
                      Essential health knowledge for rural communities including disease prevention, nutrition, maternal
                      health, and basic first aid.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Disease prevention strategies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Maternal & child health</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">First aid training</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="syllabus" className="mt-4">
                    <div className="space-y-3">
                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-semibold">Week 1-2: Basic Health Concepts</h4>
                        <p className="text-sm text-muted-foreground">Personal hygiene, clean water, sanitation</p>
                      </div>
                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-semibold">Week 3-4: Disease Prevention</h4>
                        <p className="text-sm text-muted-foreground">
                          Common diseases, vaccination, prevention methods
                        </p>
                      </div>
                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-semibold">Week 5-6: Nutrition & Diet</h4>
                        <p className="text-sm text-muted-foreground">Balanced diet, local foods, child nutrition</p>
                      </div>
                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-semibold">Week 7-8: Emergency Care</h4>
                        <p className="text-sm text-muted-foreground">
                          First aid, emergency response, when to seek help
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Start Course
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Digital Skills Course */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/myanmar-computer-training.jpg"
                  alt="Computer training session in Myanmar"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Digital Skills Workshop
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm">4.7</span>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    10 weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    445 enrolled
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    20 lessons
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">{t("common.overview") || "Overview"}</TabsTrigger>
                    <TabsTrigger value="syllabus">{t("offline.syllabus") || "Syllabus"}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-muted-foreground mb-4">
                      Introduction to computers, internet, and digital tools for rural communities. Learn essential
                      digital skills for modern life and business.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Computer basics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Internet navigation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Digital communication</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="syllabus" className="mt-4">
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 1-3: Computer Basics</h4>
                        <p className="text-sm text-muted-foreground">Hardware, software, operating systems</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 4-6: Internet Skills</h4>
                        <p className="text-sm text-muted-foreground">Web browsing, search engines, online safety</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 7-8: Communication Tools</h4>
                        <p className="text-sm text-muted-foreground">Email, messaging, video calls</p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">Week 9-10: Digital Applications</h4>
                        <p className="text-sm text-muted-foreground">Mobile apps, online services, digital payments</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Start Course
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
