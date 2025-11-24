"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BookOpen, Stethoscope, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <Link href="/" className="flex items-center gap-2 pb-6 border-b" onClick={() => setOpen(false)}>
            <div className="relative w-10 h-10">
              <Image src="/digital-hub-logo.png" alt="Digital Hub Myanmar Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold">Digital Hub</span>
          </Link>

          <nav className="flex flex-col gap-4 py-6">
            <Link
              href="/education"
              className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <BookOpen className="w-5 h-5 text-primary" />
              Education Portal
            </Link>
            <Link
              href="/healthcare"
              className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <Stethoscope className="w-5 h-5 text-primary" />
              Healthcare Portal
            </Link>
            <Link
              href="/support"
              className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              Support Center
            </Link>
          </nav>

          <div className="mt-auto space-y-3">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)}>
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
