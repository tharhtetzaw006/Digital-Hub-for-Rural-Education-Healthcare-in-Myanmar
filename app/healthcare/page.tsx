"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Video, MessageCircle, Phone, MapPin, BookOpen, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { HealthcareNav } from "@/components/healthcare-nav"
import { useLang } from "@/components/language-provider"

export default function HealthcarePortalPage() {
  const { t } = useLang()
  return (
    <div className="min-h-screen bg-background">
      <HealthcareNav />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">{t("healthcare.heroTitle")}</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
              {t("healthcare.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/healthcare/telemedicine">
                <Button size="lg" className="w-full sm:w-auto">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  {t("healthcare.ctaBook")}
                </Button>
              </Link>
              <Link href="/healthcare/mobile-clinics">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  <MapPin className="w-5 h-5 mr-2" />
                  {t("healthcare.ctaFindClinic")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Link href="/healthcare/quick-health-check">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("healthcare.quickCheck")}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{t("healthcare.availableNow")}</p>
                  <Badge className="bg-primary/10 text-primary">15 {t("healthcare.min")}</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/healthcare/video-consultation">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <Video className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("healthcare.videoConsult")}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{t("healthcare.availableNow")}</p>
                  <Badge className="bg-primary/10 text-primary">15 {t("healthcare.min")}</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/healthcare/chat-doctor">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("healthcare.chatDoctor")}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{t("healthcare.availableNow")}</p>
                  <Badge className="bg-primary/10 text-primary">5 {t("healthcare.min")}</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/healthcare/emergency">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("healthcare.emergencyHotline")}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{t("healthcare.availableNow")}</p>
                  <Badge className="bg-destructive/10 text-destructive">24/7</Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Healthcare Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{t("healthcare.comprehensiveTitle")}</h2>
            <p className="text-xl text-muted-foreground text-balance">{t("healthcare.comprehensiveSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/healthcare/telemedicine">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("healthcare.telemedicine")}</h3>
                  <p className="text-muted-foreground">{t("healthcare.connectDoctors")}</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/healthcare/mobile-clinics">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("healthcare.mobileClinics")}</h3>
                  <p className="text-muted-foreground">{t("healthcare.onSiteServices")}</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/healthcare/health-education">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("healthcare.healthEducation")}</h3>
                  <p className="text-muted-foreground">{t("healthcare.learnHealth")}</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/healthcare/emergency">
              <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("healthcare.emergency")}</h3>
                  <p className="text-muted-foreground">{t("healthcare.emergencySupport")}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Healthcare Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">{t("healthcare.impactTitle")}</h2>
            <p className="text-muted-foreground">{t("healthcare.impactSubtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,400+</div>
              <div className="text-sm text-muted-foreground">{t("healthcare.consultations")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">{t("healthcare.villagesServed")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">{t("healthcare.patientSatisfaction")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">{t("healthcare.emergencySupport")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
