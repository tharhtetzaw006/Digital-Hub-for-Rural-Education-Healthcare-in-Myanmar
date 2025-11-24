"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLang } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function SignupPage() {
  const { t } = useLang()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    userType: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      setIsLoading(false)
      return
    }

    try {
      // Store user data in localStorage for demo purposes
      const userData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        location: formData.location,
        userType: formData.userType,
        createdAt: new Date().toISOString()
      }
      
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('isAuthenticated', 'true')
      
      // Trigger auth state change event
      window.dispatchEvent(new Event('authChange'))
      
      // Simulate network delay for realistic experience
      await new Promise(resolve => setTimeout(resolve, 800))
      
      router.push("/signup-success")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred during signup")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("common.nav.backToHome")}
        </Link>

        {/* Signup Card */}
        <Card className="w-full">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/digital-hub-logo.png"
                alt="Digital Hub Myanmar Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </div>
            <CardTitle className="text-2xl font-bold">{t("auth.signup.title")}</CardTitle>
            <p className="text-muted-foreground">{t("auth.signup.subtitle")}</p>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">{t("auth.signup.heading")}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t("auth.signup.description")}</p>
            </div>

            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("auth.signup.firstName")}</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder={t("auth.signup.firstNamePlaceholder")}
                  className="w-full"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">{t("auth.signup.lastName")}</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder={t("auth.signup.lastNamePlaceholder")}
                  className="w-full"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.signup.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("auth.signup.emailPlaceholder")}
                  className="w-full"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">{t("auth.signup.location")}</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => setFormData({ ...formData, location: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("auth.signup.locationPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yangon">Yangon Region</SelectItem>
                    <SelectItem value="mandalay">Mandalay Region</SelectItem>
                    <SelectItem value="shan">Shan State</SelectItem>
                    <SelectItem value="kachin">Kachin State</SelectItem>
                    <SelectItem value="kayah">Kayah State</SelectItem>
                    <SelectItem value="kayin">Kayin State</SelectItem>
                    <SelectItem value="chin">Chin State</SelectItem>
                    <SelectItem value="mon">Mon State</SelectItem>
                    <SelectItem value="rakhine">Rakhine State</SelectItem>
                    <SelectItem value="ayeyarwady">Ayeyarwady Region</SelectItem>
                    <SelectItem value="bago">Bago Region</SelectItem>
                    <SelectItem value="magway">Magway Region</SelectItem>
                    <SelectItem value="naypyitaw">Naypyitaw Union Territory</SelectItem>
                    <SelectItem value="sagaing">Sagaing Region</SelectItem>
                    <SelectItem value="tanintharyi">Tanintharyi Region</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType">{t("auth.signup.userType")}</Label>
                <Select
                  value={formData.userType}
                  onValueChange={(value) => setFormData({ ...formData, userType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("auth.signup.userTypePlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="healthcare-worker">Healthcare Worker</SelectItem>
                    <SelectItem value="community-leader">Community Leader</SelectItem>
                    <SelectItem value="parent">Parent/Guardian</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("auth.signup.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t("auth.signup.passwordPlaceholder")}
                  className="w-full"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t("auth.signup.confirmPassword")}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder={t("auth.signup.confirmPasswordPlaceholder")}
                  className="w-full"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  className="mt-1"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  {t("auth.signup.agreeToTerms")}{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    {t("auth.signup.termsLink")}
                  </Link>{" "}
                  {t("auth.signup.and")}{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    {t("auth.signup.privacyLink")}
                  </Link>
                </Label>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? t("auth.signup.creating") : t("auth.signup.createButton")}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {t("auth.signup.haveAccount")}{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  {t("auth.signup.signInLink")}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
