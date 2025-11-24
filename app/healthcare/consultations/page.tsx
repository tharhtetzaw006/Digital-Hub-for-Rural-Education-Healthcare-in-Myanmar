import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-4">
        <h1 className="text-2xl font-bold">{"Secure Video/Audio Consultations"}</h1>
        <p className="text-sm text-muted-foreground">
          {
            "This page is ready for integration with a HIPAA-ready video SDK. For now, use the appointment booking to schedule a call."
          }
        </p>
        <a
          className="rounded bg-primary px-4 py-2 text-primary-foreground inline-block"
          href="/healthcare/appointments"
        >
          {"Book a consultation"}
        </a>
      </main>
      <Footer />
    </LanguageProvider>
  )
}
