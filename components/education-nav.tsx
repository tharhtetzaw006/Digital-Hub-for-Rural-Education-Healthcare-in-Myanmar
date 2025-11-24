"use client"
import Image from "next/image"
import Link from "next/link"
import { EducationMobileNav } from "./education-mobile-nav"
import LanguageSwitcher from "./language-switcher"
import { useLang } from "./language-provider"

export function EducationNav() {
  const { t } = useLang()
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2" aria-label={t("common.nav.home")}>
              <Image
                src="/images/digital-hub-logo.png"
                alt={t("common.brand")}
                width={32}
                height={32}
                priority
                className="rounded-full"
              />
              <span className="text-lg sm:text-xl font-bold text-foreground">
                <span className="hidden sm:inline">{t("common.brand")}</span>
                <span className="sm:hidden">{t("education.title")}</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/education" className="text-primary font-medium">
                {t("education.offlineLabel")}
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/education/courses" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("education.courses")}
            </Link>
            <Link
              href="/education/live-classes"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("education.liveClasses")}
            </Link>
            <Link href="/education/resources" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("education.materials")}
            </Link>
            <Link href="/healthcare" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("common.nav.healthcare")}
            </Link>

            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <EducationMobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
