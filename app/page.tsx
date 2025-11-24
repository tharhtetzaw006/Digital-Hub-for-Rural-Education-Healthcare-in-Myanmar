"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { useLang } from "@/components/language-provider"

export const dynamic = "force-dynamic"

export default function HomePage() {
  const { t } = useLang()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/myanmar-landscape-hero.jpg')` }}
          />
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
            <source src="/myanmar-rural-community.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            {/* Badge text i18n */}
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Heart className="w-4 h-4" />
              {t("home.badge")}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
              {t("home.heroTitleLine1")}
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {t("home.heroTitleLine2")}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-4xl mx-auto mb-8 px-2 leading-relaxed">
              {t("home.heroSubtitleLong")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/education" className="w-full sm:w-auto" aria-label={t("home.ctaEducation")}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t("home.ctaEducation")}
                </Button>
              </Link>
              <Link href="/healthcare" className="w-full sm:w-auto" aria-label={t("home.ctaHealthcare")}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-14 text-lg px-8 bg-background/80 backdrop-blur-sm border-2 hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  {t("home.ctaHealthcare")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip - Myanmar Heritage */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Discover Myanmar</h2>
            <p className="text-muted-foreground">Connecting ancient heritage with modern digital solutions</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <figure className="relative rounded-xl overflow-hidden group cursor-pointer h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/myanmar/bagan-temples.jpg"
                alt="Ancient Bagan Temples - Myanmar Heritage"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">Ancient Bagan</h3>
                <p className="text-white/90 text-sm">Historic temples & cultural heritage</p>
              </figcaption>
            </figure>
            <figure className="relative rounded-xl overflow-hidden group cursor-pointer h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/myanmar/yangon-city.jpg"
                alt="Yangon Cityscape - Modern Myanmar"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">Modern Yangon</h3>
                <p className="text-white/90 text-sm">Growing cities & digital infrastructure</p>
              </figcaption>
            </figure>
            <figure className="relative rounded-xl overflow-hidden group cursor-pointer h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/myanmar/shwedagon-pagoda.jpg"
                alt="Shwedagon Pagoda - Myanmar's Golden Wonder"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">Shwedagon Pagoda</h3>
                <p className="text-white/90 text-sm">Iconic golden landmark of Myanmar</p>
              </figcaption>
            </figure>
            <figure className="relative rounded-xl overflow-hidden group cursor-pointer h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/myanmar/modern-yangon.jpg"
                alt="Modern Yangon Development"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">Digital Progress</h3>
                <p className="text-white/90 text-sm">Innovation & technological growth</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-background/90" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("home.impact.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("home.impact.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-sm font-medium text-muted-foreground">{t("home.impact.villages")}</div>
                <div className="text-xs text-muted-foreground mt-1">{t("home.impact.villagesSub")}</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  2,400+
                </div>
                <div className="text-sm font-medium text-muted-foreground">{t("home.impact.students")}</div>
                <div className="text-xs text-muted-foreground mt-1">{t("home.impact.studentsSub")}</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  1,800+
                </div>
                <div className="text-sm font-medium text-muted-foreground">{t("home.impact.consults")}</div>
                <div className="text-xs text-muted-foreground mt-1">{t("home.impact.consultsSub")}</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm font-medium text-muted-foreground">{t("home.impact.satisfaction")}</div>
                <div className="text-xs text-muted-foreground mt-1">{t("home.impact.satisfactionSub")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-6">{t("home.services.title")}</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
              <CardContent className="relative p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t("home.services.education.title")}</h3>
                    <p className="text-primary font-medium">{t("home.services.education.subtitle")}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {t("home.services.education.desc")}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("home.services.education.points.0")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("home.services.education.points.1")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("home.services.education.points.2")}</span>
                  </div>
                </div>
                <Link href="/education" aria-label={t("home.services.education.cta")}>
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    {t("home.services.education.cta")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
              <CardContent className="relative p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t("home.services.healthcare.title")}</h3>
                    <p className="text-primary font-medium">{t("home.services.healthcare.subtitle")}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {t("home.services.healthcare.desc")}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("home.services.healthcare.points.0")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("home.services.healthcare.points.1")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{t("home.services.healthcare.points.2")}</span>
                  </div>
                </div>
                <Link href="/healthcare" aria-label={t("home.services.healthcare.cta")}>
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    {t("home.services.healthcare.cta")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action with Myanmar Background */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/myanmar/shwedagon-pagoda.jpg"
            alt="Myanmar Heritage Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-balance mb-6">{t("home.ready.title")}</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-10 px-2 leading-relaxed">
            {t("home.ready.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-10 py-4 h-16 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {t("home.ready.primary")}
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 h-16 border-2 hover:bg-primary/5 shadow-xl hover:shadow-2xl transition-all duration-300 bg-background/80 backdrop-blur-sm"
              >
                {t("home.ready.secondary")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer is now in layout.tsx */}
    </div>
  )
}
