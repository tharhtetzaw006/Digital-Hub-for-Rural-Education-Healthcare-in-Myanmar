import { courses } from "@/lib/data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page({ params }: { params: { course: string } }) {
  const c = courses.find((x) => x.id === params.course)
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {!c ? (
          <p className="text-sm text-muted-foreground">{"Course not found."}</p>
        ) : (
          <article className="prose dark:prose-invert max-w-none">
            <h1>{c.title} — Syllabus</h1>
            <ul>
              <li>Week 1: Introduction</li>
              <li>Week 2: Fundamentals</li>
              <li>Week 3: Practice</li>
              <li>Week 4: Assessment</li>
            </ul>
          </article>
        )}
      </main>
      <Footer />
    </LanguageProvider>
  )
}
