"use client"

import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "./language-switcher"
import { useLang } from "./language-provider"
import { HealthcareMobileNav } from "./healthcare-mobile-nav"

export function HealthcareNav() {
  const { t } = useLang()

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + small status */}
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
                <span className="sm:hidden">{t("healthcare.title")}</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <span className="text-primary font-medium">{t("healthcare.availableNow")}</span>
            </div>
          </div>

          {/* Right: Desktop navigation + language switcher */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/healthcare/telemedicine"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("healthcare.telemedicine")}
            </Link>
            <Link
              href="/healthcare/mobile-clinics"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("healthcare.mobileClinics")}
            </Link>
            <Link
              href="/healthcare/health-education"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("healthcare.healthEducation")}
            </Link>
            <Link href="/education" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("common.nav.education")}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Mobile: language + menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <HealthcareMobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
