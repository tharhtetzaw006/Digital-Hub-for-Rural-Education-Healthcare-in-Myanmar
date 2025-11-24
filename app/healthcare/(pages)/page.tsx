import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SearchFilter from "@/components/search"
import DoctorCard from "@/components/doctor-card"
import { LanguageProvider, useLang } from "@/components/language-provider"
import { doctors } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

function HealthcareContent() {
  const { t } = useLang()
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <div className="rounded-lg overflow-hidden border">
        <Image
          src="/images/health-at-your-fingertips.jpg"
          alt="Health at your fingertips"
          width={1600}
          height={900}
          className="h-60 w-full object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold">{t("healthcare.title")}</h1>
          <p className="text-sm text-muted-foreground">
            {"Accessible, secure, and professional telemedicine services."}
          </p>
        </div>
      </div>

      <SearchFilter
        items={doctors}
        keys={["name", "specialty", "location"]}
        placeholder={t("common.search")}
        render={(d) => <DoctorCard d={d} />}
      />

      <div className="grid md:grid-cols-3 gap-4">
        <Link className="rounded border p-4 hover:bg-muted" href="/healthcare/appointments">
          {t("healthcare.appointments")}
        </Link>
        <Link className="rounded border p-4 hover:bg-muted" href="/healthcare/consultations">
          {t("healthcare.consults")}
        </Link>
        <Link className="rounded border p-4 hover:bg-muted" href="/healthcare/blog">
          {t("healthcare.blog")}
        </Link>
      </div>
    </main>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <HealthcareContent />
      <Footer />
    </LanguageProvider>
  )
}
