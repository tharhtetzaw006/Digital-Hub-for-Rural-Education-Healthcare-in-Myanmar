import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SearchFilter from "@/components/search"
import CourseCard from "@/components/course-card"
import { LanguageProvider, useLang } from "@/components/language-provider"
import { courses } from "@/lib/data"

function EducationContent() {
  const { t } = useLang()
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold">{t("education.title")}</h1>
      <SearchFilter
        items={courses}
        keys={["title", "subject", "level", "description"]}
        placeholder={t("common.search")}
        render={(c) => <CourseCard c={c} />}
      />
      <div className="grid md:grid-cols-3 gap-4">
        <a className="rounded border p-4 hover:bg-muted" href="/education/syllabus">
          {t("education.syllabus")}
        </a>
        <a className="rounded border p-4 hover:bg-muted" href="/education/lms">
          {t("education.lms")}
        </a>
        <a className="rounded border p-4 hover:bg-muted" href="/education/dashboard">
          {t("education.dashboard")}
        </a>
        <a className="rounded border p-4 hover:bg-muted" href="/education/testimonials">
          {t("education.testimonials")}
        </a>
        <a className="rounded border p-4 hover:bg-muted" href="/education/enquiry">
          {t("education.enquiry")}
        </a>
        <a className="rounded border p-4 hover:bg-muted" href="/education/materials">
          {t("education.materials")}
        </a>
      </div>
    </main>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <EducationContent />
      <Footer />
    </LanguageProvider>
  )
}
