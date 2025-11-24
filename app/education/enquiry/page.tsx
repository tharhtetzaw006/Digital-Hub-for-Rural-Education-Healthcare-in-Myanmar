"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLang } from "@/components/language-provider"

function EnquiryForm() {
  const { t } = useLang()
  return (
    <form className="space-y-3" action="/api/enquiry" method="post">
      <input className="w-full rounded border px-3 py-2" name="name" required placeholder="Name" />
      <input className="w-full rounded border px-3 py-2" name="email" type="email" required placeholder="Email" />
      <textarea className="w-full rounded border p-3" name="message" required placeholder="Your enquiry" />
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground" type="submit">
        {t("common.cta.contact")}
      </button>
    </form>
  )
}

export default function Page() {
  const { t } = useLang()
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">{t("education.enquiry.title") || "Enquiry"}</h1>
        <EnquiryForm />
      </main>
      <Footer />
    </>
  )
}
