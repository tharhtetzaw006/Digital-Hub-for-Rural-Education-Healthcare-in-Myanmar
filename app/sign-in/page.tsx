"use client"
import Navbar from "@/components/navbar"
import type React from "react"

import Footer from "@/components/footer"
import { LanguageProvider, useLang } from "@/components/language-provider"
import { useState } from "react"

function SignInForm() {
  const { t } = useLang()
  const [role, setRole] = useState("student")
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    localStorage.setItem("role", role)
    window.location.href =
      role === "admin" ? "/admin" : role === "doctor" ? "/healthcare/appointments" : "/education/dashboard"
  }
  return (
    <form onSubmit={submit} className="space-y-3">
      <input className="w-full rounded border px-3 py-2" name="email" type="email" placeholder="Email" required />
      <input
        className="w-full rounded border px-3 py-2"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <select
        className="w-full rounded border px-3 py-2"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        aria-label="Select role"
      >
        <option value="student">{t("common.roles.student")}</option>
        <option value="teacher">{t("common.roles.teacher")}</option>
        <option value="patient">{t("common.roles.patient")}</option>
        <option value="doctor">{t("common.roles.doctor")}</option>
        <option value="admin">{t("common.roles.admin")}</option>
      </select>
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground" type="submit">
        {t("common.nav.signIn")}
      </button>
    </form>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">{"Sign in"}</h1>
        <SignInForm />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
