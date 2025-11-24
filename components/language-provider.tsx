"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type React from "react"

import { en } from "@/lib/i18n/en"
import { mm } from "@/lib/i18n/mm"

type Lang = "en" | "mm"
type Dict = typeof en

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (path: string) => any
  dict: Dict
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang) : null
    if (saved) setLangState(saved)
  }, [])
  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("lang", l)
  }
  const dict = lang === "mm" ? mm : en
  const t = (path: string) => path.split(".").reduce((acc: any, key) => (acc ? acc[key] : undefined), dict)
  const value = useMemo(() => ({ lang, setLang, t, dict }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
