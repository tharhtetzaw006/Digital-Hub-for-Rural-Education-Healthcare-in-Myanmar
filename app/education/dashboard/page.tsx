import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">{"Student Dashboard"}</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded border p-4">{"Enrolled Courses"}: 2</div>
          <div className="rounded border p-4">{"Upcoming Deadlines"}: 1</div>
          <div className="rounded border p-4">{"Certificates"}: 0</div>
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  )
}
