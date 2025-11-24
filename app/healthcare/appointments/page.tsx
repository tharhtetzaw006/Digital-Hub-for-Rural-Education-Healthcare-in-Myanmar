"use client"
import Navbar from "@/components/navbar"
import type React from "react"

import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

function Form() {
  const sp = useSearchParams()
  const [status, setStatus] = useState<string | null>(null)
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch("/api/appointments", { method: "POST", body: new FormData(e.currentTarget) })
    setStatus(res.ok ? "success" : "error")
  }
  return (
    <form onSubmit={submit} className="space-y-3">
      <input className="w-full rounded border px-3 py-2" name="name" placeholder="Patient name" required />
      <input className="w-full rounded border px-3 py-2" name="email" type="email" placeholder="Email" required />
      <input
        className="w-full rounded border px-3 py-2"
        name="doctor"
        defaultValue={sp.get("doctor") ?? ""}
        placeholder="Doctor ID"
      />
      <input className="w-full rounded border px-3 py-2" name="datetime" type="datetime-local" required />
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground" type="submit">
        {"Book Appointment"}
      </button>
      {status === "success" && <p className="text-sm text-green-600">{"Appointment requested successfully."}</p>}
      {status === "error" && <p className="text-sm text-red-600">{"Something went wrong."}</p>}
    </form>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">{"Appointment Booking"}</h1>
        <Form />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
