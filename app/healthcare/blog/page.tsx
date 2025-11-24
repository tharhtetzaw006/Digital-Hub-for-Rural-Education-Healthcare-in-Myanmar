import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <article className="rounded border p-4">
          <h3 className="font-semibold">{"Staying Hydrated"}</h3>
          <p className="text-sm text-muted-foreground">{"Why water matters in hot climates."}</p>
        </article>
        <article className="rounded border p-4">
          <h3 className="font-semibold">{"Mosquito Prevention"}</h3>
          <p className="text-sm text-muted-foreground">{"Simple steps to reduce risks."}</p>
        </article>
        <article className="rounded border p-4">
          <h3 className="font-semibold">{"Healthy Eating"}</h3>
          <p className="text-sm text-muted-foreground">{"Balanced meals on a budget."}</p>
        </article>
      </main>
      <Footer />
    </LanguageProvider>
  )
}
