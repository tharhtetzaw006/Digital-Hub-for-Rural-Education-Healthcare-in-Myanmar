import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { Footer } from "@/components/footer"
import ChatbotWidget from "@/components/chatbot-widget"
import "./globals.css"

export const metadata: Metadata = {
  title: "Digital Hub Myanmar - Rural Education & Healthcare",
  description:
    "Bridging the digital divide by bringing quality education and telemedicine services directly to rural communities across Myanmar.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          <ChatbotWidget />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
