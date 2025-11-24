"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, MapPin, Phone, Calendar, Settings, Shield, Bell, Lock } from "lucide-react"
import { useLang } from "@/components/language-provider"
import Navbar from "@/components/navbar"

export default function ProfilePage() {
  const { t } = useLang()
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    userType: "",
  })

  useEffect(() => {
    // Check if user is logged in
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const user = localStorage.getItem('user')
    
    if (!isAuthenticated || !user) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(user)
    setUserData(parsedUser)
    setFormData({
      firstName: parsedUser.firstName || "",
      lastName: parsedUser.lastName || "",
      email: parsedUser.email || "",
      phone: parsedUser.phone || "",
      location: parsedUser.location || "",
      userType: parsedUser.userType || "",
    })
  }, [router])

  const handleSaveProfile = () => {
    const updatedUser = {
      ...userData,
      ...formData,
      updatedAt: new Date().toISOString()
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    setUserData(updatedUser)
    setIsEditing(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    window.dispatchEvent(new Event('authChange'))
    router.push('/')
    router.refresh()
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      localStorage.removeItem('user')
      localStorage.removeItem('isAuthenticated')
      window.dispatchEvent(new Event('authChange'))
      router.push('/')
    }
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  const userInitials = `${formData.firstName?.[0] || ''}${formData.lastName?.[0] || ''}`.toUpperCase()

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">
                    {formData.firstName} {formData.lastName}
                  </h1>
                  <p className="text-muted-foreground mb-2">{formData.email}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {formData.userType?.replace('-', ' ') || 'User'}
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {formData.location || 'Not set'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button onClick={handleSaveProfile} size="sm">
                        {t("profile.saveChanges")}
                      </Button>
                      <Button onClick={() => setIsEditing(false)} variant="outline" size="sm">
                        {t("profile.cancel")}
                      </Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      {t("profile.editProfile")}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">{t("profile.personalInfo")}</TabsTrigger>
              <TabsTrigger value="account">{t("profile.accountSettings")}</TabsTrigger>
              <TabsTrigger value="preferences">{t("profile.preferences")}</TabsTrigger>
            </TabsList>

            {/* Personal Information */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {t("profile.personalInfo")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t("auth.signup.firstName")}</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t("profile.lastName")}</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {t("profile.email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      disabled
                      className="bg-muted"
                    />
                    <p className="text-xs text-muted-foreground">{t("profile.emailLocked")}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {t("profile.phone")}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t("profile.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {t("profile.location")}
                    </Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t("profile.selectLocation")} />
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
                        <SelectItem value="sagaing">Sagaing Region</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {t("profile.userType")}
                    </Label>
                    <Input
                      value={formData.userType?.replace('-', ' ') || 'User'}
                      disabled
                      className="bg-muted capitalize"
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{t("profile.memberSince")} {new Date(userData.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Settings */}
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    {t("profile.accountSettings")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">{t("profile.password")}</h3>
                          <p className="text-sm text-muted-foreground">{t("profile.changePasswordDesc")}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">{t("profile.changePassword")}</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">{t("profile.emailNotifications")}</h3>
                          <p className="text-sm text-muted-foreground">{t("profile.emailNotificationsDesc")}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">{t("profile.configure")}</Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <h3 className="font-medium">{t("profile.pushNotifications")}</h3>
                          <p className="text-sm text-muted-foreground">{t("profile.pushNotificationsDesc")}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">{t("profile.enable")}</Button>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-semibold mb-4 text-destructive">{t("profile.dangerZone")}</h3>
                    <div className="space-y-3">
                      <Button variant="destructive" className="w-full" onClick={handleLogout}>
                        {t("profile.logOut")}
                      </Button>
                      <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground" onClick={handleDeleteAccount}>
                        {t("profile.deleteAccount")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>{t("profile.preferences")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{t("profile.language")}</h3>
                      <p className="text-sm text-muted-foreground">{t("profile.languageDesc")}</p>
                    </div>
                    <Select defaultValue="en">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="mm">Myanmar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{t("profile.theme")}</h3>
                      <p className="text-sm text-muted-foreground">{t("profile.themeDesc")}</p>
                    </div>
                    <Select defaultValue="system">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">{t("profile.themeLight")}</SelectItem>
                        <SelectItem value="dark">{t("profile.themeDark")}</SelectItem>
                        <SelectItem value="system">{t("profile.themeSystem")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{t("profile.offlineMode")}</h3>
                      <p className="text-sm text-muted-foreground">{t("profile.offlineModeDesc")}</p>
                    </div>
                    <Button variant="outline" size="sm">{t("profile.manage")}</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
