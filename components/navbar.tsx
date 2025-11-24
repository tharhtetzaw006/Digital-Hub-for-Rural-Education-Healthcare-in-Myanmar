"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import LanguageSwitcher from "./language-switcher"
import { useLang } from "./language-provider"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function Navbar() {
  const { t } = useLang()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      const user = localStorage.getItem('user')
      setIsLoggedIn(isAuthenticated === 'true')
      if (user) {
        try {
          setUserData(JSON.parse(user))
        } catch (e) {
          console.error('Failed to parse user data:', e)
        }
      }
    }
    
    checkAuth()
    
    // Listen for custom auth events
    const handleAuthChange = () => checkAuth()
    window.addEventListener('storage', handleAuthChange)
    window.addEventListener('authChange', handleAuthChange)
    
    // Poll every second as fallback
    const interval = setInterval(checkAuth, 1000)
    
    return () => {
      window.removeEventListener('storage', handleAuthChange)
      window.removeEventListener('authChange', handleAuthChange)
      clearInterval(interval)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    setIsLoggedIn(false)
    setUserData(null)
    
    // Trigger auth state change event
    window.dispatchEvent(new Event('authChange'))
    router.refresh()
    
    router.push('/')
  }

  const userInitials = userData ? `${userData.firstName?.[0] || ''}${userData.lastName?.[0] || ''}`.toUpperCase() : 'U'

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Go to homepage">
          <Image
            src="/images/digital-hub-logo.png"
            alt="Digital Hub Myanmar Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-bold text-sm md:text-base text-black dark:text-white">{t("common.brand")}</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="/">
            {t("common.nav.home")}
          </Link>
          <Link className="hover:underline" href="/education">
            {t("common.nav.education")}
          </Link>
          <Link className="hover:underline" href="/healthcare">
            {t("common.nav.healthcare")}
          </Link>
          <Link className="hover:underline" href="/support">
            {t("common.nav.support")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          {!isLoggedIn && (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  {t("common.nav.signIn")}
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">{t("common.cta.getStarted")}</Button>
              </Link>
            </>
          )}
          
          {isLoggedIn && userData && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {userInitials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {userData.firstName} {userData.lastName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userData.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
    </header>
  )
}
