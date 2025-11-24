"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, Download, Users, Clock, Star } from "lucide-react"
import Link from "next/link"

import { EducationNav } from "@/components/education-nav"
import { useLang } from "@/components/language-provider"

export default function EducationPortalPage() {
  const { t } = useLang()
  return (
    <div className="min-h-screen bg-background">
      <EducationNav />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">{t("education.heroTitle")}</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
              {t("education.heroSubtitle")}
            </p>
            <Button size="lg" className="text-lg px-8">
              <Play className="w-5 h-5 mr-2" />
              {t("education.ctaStart")}
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/education/courses">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("education.courses")}</h3>
                  <p className="text-muted-foreground text-sm">{t("education.quick.coursesDesc")}</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/education/live-classes">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("education.liveClasses")}</h3>
                  <p className="text-muted-foreground text-sm">{t("education.quick.liveDesc")}</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/education/resources">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("education.materials")}</h3>
                  <p className="text-muted-foreground text-sm">{t("education.quick.resourcesDesc")}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Available Offline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{t("education.offlineLabel")}</h2>
            <Link href="/education/offline" className="text-primary hover:underline text-sm">
              {t("offline.viewSyllabus")}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Myanmar Grammar */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: "url('/myanmar-students-learning.jpg')" }}
                  aria-label="Myanmar classroom"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{t("offline.cards.myanmarGrammar.title")}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t("offline.cards.myanmarGrammar.desc")}</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• {t("offline.cards.myanmarGrammar.bullets.0")}</li>
                    <li>• {t("offline.cards.myanmarGrammar.bullets.1")}</li>
                    <li>• {t("offline.cards.myanmarGrammar.bullets.2")}</li>
                  </ul>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="secondary">
                      <Link href="/education/offline#syllabus">{t("offline.viewSyllabus")}</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/education/courses?course=myanmar-language">{t("offline.resume")}</Link>
                    </Button>
                    <Button asChild variant="ghost" className="ml-auto">
                      <Link href="/education/offline">{t("offline.downloadPackCta")}</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Health Basics */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: "url('/myanmar-health-education.jpg')" }}
                  aria-label="Community health education"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{t("offline.cards.communityHealth.title")}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t("offline.cards.communityHealth.desc")}</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• {t("offline.cards.communityHealth.bullets.0")}</li>
                    <li>• {t("offline.cards.communityHealth.bullets.1")}</li>
                    <li>• {t("offline.cards.communityHealth.bullets.2")}</li>
                  </ul>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="secondary">
                      <Link href="/education/offline#syllabus">{t("offline.viewSyllabus")}</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/education/courses?course=health-education">{t("offline.resume")}</Link>
                    </Button>
                    <Button asChild variant="ghost" className="ml-auto">
                      <Link href="/education/offline">{t("offline.downloadPackCta")}</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Literacy & Computer Basics */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div
                  className="h-44 bg-cover bg-center"
                  style={{ backgroundImage: "url('/myanmar-computer-training.jpg')" }}
                  aria-label="Digital literacy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{t("offline.cards.digitalSkills.title")}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t("offline.cards.digitalSkills.desc")}</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• {t("offline.cards.digitalSkills.bullets.0")}</li>
                    <li>• {t("offline.cards.digitalSkills.bullets.1")}</li>
                    <li>• {t("offline.cards.digitalSkills.bullets.2")}</li>
                  </ul>
                  <div className="flex items-center gap-2">
                    <Button asChild variant="secondary">
                      <Link href="/education/offline#syllabus">{t("offline.viewSyllabus")}</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/education/courses?course=digital-skills">{t("offline.resume")}</Link>
                    </Button>
                    <Button asChild variant="ghost" className="ml-auto">
                      <Link href="/education/offline">{t("offline.downloadPackCta")}</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">{t("education.currentProgressTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{t("education.subjectMyanmar")}</h3>
                  <Badge>65%</Badge>
                </div>
                <Progress value={65} className="mb-2" />
                <p className="text-sm text-muted-foreground">8 of 12 lessons completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{t("education.subjectMath")}</h3>
                  <Badge>45%</Badge>
                </div>
                <Progress value={45} className="mb-2" />
                <p className="text-sm text-muted-foreground">5 of 11 lessons completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{t("education.subjectHealth")}</h3>
                  <Badge>80%</Badge>
                </div>
                <Progress value={80} className="mb-2" />
                <p className="text-sm text-muted-foreground">12 of 15 lessons completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
