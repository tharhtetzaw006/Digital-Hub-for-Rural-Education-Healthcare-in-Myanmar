"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Menu, Stethoscope, Video, MapPin, BookOpen, AlertTriangle, BookOpenIcon } from "lucide-react"
import Link from "next/link"

export function HealthcareMobileNav() {
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
          <div className="flex items-center gap-2 pb-6 border-b">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Digital Hub Myanmar</span>
          </div>

          <nav className="flex flex-col gap-4 py-6">
            <Link
              href="/healthcare"
              className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <Stethoscope className="w-5 h-5 text-primary" />
              Healthcare Portal
            </Link>
            <Link
              href="/healthcare/telemedicine"
              className="flex items-center gap-3 text-base py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <Video className="w-4 h-4 text-muted-foreground" />
              Telemedicine
            </Link>
            <Link
              href="/healthcare/mobile-clinics"
              className="flex items-center gap-3 text-base py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <MapPin className="w-4 h-4 text-muted-foreground" />
              Mobile Clinics
            </Link>
            <Link
              href="/healthcare/health-education"
              className="flex items-center gap-3 text-base py-3 px-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              Health Education
            </Link>
            <Link
              href="/healthcare/emergency"
              className="flex items-center gap-3 text-base py-3 px-2 rounded-lg hover:bg-muted transition-colors text-destructive"
              onClick={() => setOpen(false)}
            >
              <AlertTriangle className="w-4 h-4 text-destructive" />
              Emergency
            </Link>
            <Link
              href="/education"
              className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg hover:bg-muted transition-colors border-t pt-6 mt-4"
              onClick={() => setOpen(false)}
            >
              <BookOpenIcon className="w-5 h-5 text-primary" />
              Education Portal
            </Link>
          </nav>

          <div className="mt-auto">
            <Link href="/" onClick={() => setOpen(false)}>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
