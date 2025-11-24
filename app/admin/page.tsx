import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">{"Admin Dashboard"}</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <a className="rounded border p-4 hover:bg-muted" href="/admin/courses">
            {"Manage Courses"}
          </a>
          <a className="rounded border p-4 hover:bg-muted" href="/admin/doctors">
            {"Manage Doctors"}
          </a>
          <a className="rounded border p-4 hover:bg-muted" href="/admin/payments">
            {"Manage Payments"}
          </a>
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  )
}
