"use client"
import Navbar from "@/components/navbar"
import type React from "react"

import Footer from "@/components/footer"
import { LanguageProvider, useLang } from "@/components/language-provider"
import { useState } from "react"

function LMS() {
  const { t } = useLang()
  const [score, setScore] = useState<number | null>(null)
  function submitQuiz(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const ans = form.get("q1") === "b"
    setScore(ans ? 1 : 0)
  }
  return (
    <main className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">{t("education.lms")}</h1>
      <section className="rounded border p-4">
        <h2 className="font-semibold">{"Quiz: Basic Knowledge Check"}</h2>
        <form onSubmit={submitQuiz} className="mt-3 space-y-2">
          <p>{"Q1: 2 + 2 = ?"}</p>
          <label className="flex gap-2 items-center">
            <input type="radio" name="q1" value="a" />3
          </label>
          <label className="flex gap-2 items-center">
            <input type="radio" name="q1" value="b" />4
          </label>
          <label className="flex gap-2 items-center">
            <input type="radio" name="q1" value="c" />5
          </label>
          <button className="mt-2 rounded bg-primary px-3 py-1 text-primary-foreground" type="submit">
            {"Submit"}
          </button>
        </form>
        {score !== null && (
          <p className="mt-2 text-sm">
            {"Your score: "} {score}/1
          </p>
        )}
      </section>
      <section className="rounded border p-4">
        <h2 className="font-semibold">{"Assignments"}</h2>
        <a className="underline" href="/materials/assignment-1.pdf" download>
          {"Download Assignment 1"}
        </a>
      </section>
    </main>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <LMS />
      <Footer />
    </LanguageProvider>
  )
}
