"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { Download, Clock, CheckCircle, Play, FileText } from "lucide-react"
import Link from "next/link"
import { useLang } from "@/components/language-provider"

// Course data with lessons
const coursesData: { [key: number]: any } = {
  1: {
    titleEn: "Myanmar Language Grammar",
    titleMm: "မြန်မာ ဘာသာ စာချုပ်",
    descriptionEn: "Master the fundamentals of Myanmar language grammar with interactive lessons and exercises.",
    descriptionMm: "အင်္ဂလိပ်စာ သင်္ချာ အခြင်အမျိုး အမျိုးစုံ လေ့လာပါ။",
    instructor: "U Ko Ko",
    level: "Beginner",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    units: [
      {
        id: 1,
        titleEn: "Unit 1: Letters and Pronunciation",
        titleMm: "ယူနစ် ၁: အက္ခရာ နှင့် အသံထွက်",
        lessons: [
          {
            id: 1,
            titleEn: "The Myanmar Alphabet",
            titleMm: "မြန်မာအက္ခရာများ",
            descriptionEn: "Learn all 33 Myanmar consonants and vowels with pronunciation guides.",
            videoId: "dQw4w9WgXcQ",
            duration: "15 min",
            materials: ["alphabet-guide.pdf", "pronunciation-chart.pdf"],
          },
          {
            id: 2,
            titleEn: "Tone Marks",
            titleMm: "အသံ အမှတ်များ",
            descriptionEn: "Understand the four tones and their marks in Myanmar language.",
            videoId: "jNQXAC9IVRw",
            duration: "12 min",
            materials: ["tone-marks-guide.pdf"],
          },
          {
            id: 3,
            titleEn: "Basic Words",
            titleMm: "အခြေခံ စကားလုံးများ",
            descriptionEn: "Learn common everyday words and phrases.",
            videoId: "9bZkp7q19f0",
            duration: "18 min",
            materials: ["vocabulary-list.pdf", "practice-exercises.pdf"],
          },
        ],
      },
      {
        id: 2,
        titleEn: "Unit 2: Simple Sentences",
        titleMm: "ယူနစ် ၂: ရိုးရှင်းသော စာကြောင်းများ",
        lessons: [
          {
            id: 4,
            titleEn: "Subject and Predicate",
            titleMm: "အကျင့်အကျောင်းအရည်အချင်း",
            descriptionEn: "Master basic sentence structure.",
            videoId: "dQw4w9WgXcQ",
            duration: "20 min",
            materials: ["sentence-structure.pdf"],
          },
          {
            id: 5,
            titleEn: "Common Verbs",
            titleMm: "အသုံးများသော လုပ်ဆောင်ချက်များ",
            descriptionEn: "Learn essential verbs for daily conversations.",
            videoId: "jNQXAC9IVRw",
            duration: "22 min",
            materials: ["verb-conjugation.pdf", "verb-examples.pdf"],
          },
        ],
      },
    ],
  },
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { t, lang } = useLang()
  const courseId = Number.parseInt(params.id)
  const course = coursesData[courseId]
  const [selectedUnit, setSelectedUnit] = useState(0)
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load progress from localStorage
  useEffect(() => {
    const storageKey = `course-${courseId}-progress`
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved))
      } catch (e) {
        console.error("Error loading progress:", e)
      }
    }
    setIsLoaded(true)
  }, [courseId])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && course) {
      const storageKey = `course-${courseId}-progress`
      localStorage.setItem(storageKey, JSON.stringify(completedLessons))
    }
  }, [completedLessons, courseId, isLoaded, course])

  if (!isLoaded || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">{lang === "mm" ? "သင်ခန်းစာ မတွေ့ရှိခဲ့ပါ။" : "Course not found."}</p>
      </div>
    )
  }

  const currentUnit = course.units[selectedUnit]
  const currentLesson = currentUnit.lessons[selectedLesson]
  const isLessonCompleted = completedLessons.includes(currentLesson.id)

  // Calculate overall progress percentage
  const totalLessons = course.units.reduce((sum: number, unit: any) => sum + unit.lessons.length, 0)
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0
  const unitProgressPercentage = currentUnit.lessons.length > 0
    ? Math.round((currentUnit.lessons.filter((l: any) => completedLessons.includes(l.id)).length / currentUnit.lessons.length) * 100)
    : 0

  const toggleLessonComplete = () => {
    setCompletedLessons((prev) =>
      prev.includes(currentLesson.id) ? prev.filter((id) => id !== currentLesson.id) : [...prev, currentLesson.id],
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/education/courses" className="text-primary hover:underline mb-4 inline-block">
            ← {lang === "mm" ? "ပြန်သွားမည်" : "Back to Courses"}
          </Link>
          <h1 className="text-3xl font-bold mb-2">{lang === "mm" ? course.titleMm : course.titleEn}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{course.instructor}</span>
            <span>•</span>
            <span>{course.students} students</span>
            <span>•</span>
            <span>{course.rating} ⭐</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
          {/* Video Player & Lesson Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <VideoPlayer
              videoId={currentLesson.videoId}
              title={lang === "mm" ? currentLesson.titleMm : currentLesson.titleEn}
              onDownload={() => alert("Download video functionality")}
            />

            {/* Lesson Info */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {lang === "mm" ? currentLesson.titleMm : currentLesson.titleEn}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {lang === "mm" ? currentLesson.descriptionEn : currentLesson.descriptionEn}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentLesson.duration}
                    </span>
                    <Button
                      onClick={toggleLessonComplete}
                      variant={isLessonCompleted ? "default" : "outline"}
                      className="gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {isLessonCompleted
                        ? lang === "mm"
                          ? "✓ ဖတ်ပြီးပြီ"
                          : "✓ Marked as Read"
                        : lang === "mm"
                          ? "Mark as Read"
                          : "Mark as Read"}
                    </Button>
                  </div>
                </div>

                {/* Materials Section */}
                {currentLesson.materials && currentLesson.materials.length > 0 && (
                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      {lang === "mm" ? "ဒေါင်းလုဒ်ဖိုင်များ" : "Downloadable Materials"}
                    </h3>
                    <div className="space-y-2">
                      {currentLesson.materials.map((material, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                        >
                          <span className="text-sm font-medium">{material}</span>
                          <Download className="w-4 h-4 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Lecture Notes Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{lang === "mm" ? "ပညာရေး မှတ်ချက်များ" : "Lecture Notes"}</h3>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <p className="text-muted-foreground leading-relaxed">
                    {lang === "mm"
                      ? "ဤစာတမ်းတွင် သင်ခန်းစာ၏ အဓိကအကျင့်များနှင့် အဓိကအကြောင်းအရာများ ကုန်းတင်ထားသည်။"
                      : "These lecture notes provide a comprehensive overview of the key concepts covered in this lesson. Study them alongside the video for better retention."}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>{lang === "mm" ? "အဓိကအကျင့် ၁: အခြေခံသိပ္ပံ" : "Key Concept 1: Fundamental principles"}</li>
                    <li>{lang === "mm" ? "အဓိကအကျင့် ၂: လက်တွေ့အသုံးချမှု" : "Key Concept 2: Practical applications"}</li>
                    <li>{lang === "mm" ? "အဓိကအကျင့် ၃: ပြန်လည်သုံးသပ်မှု" : "Key Concept 3: Review questions"}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar: Course Navigation */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{lang === "mm" ? "တိုးတက်အခြေအနေ" : "Your Progress"}</h3>
                <div className="space-y-4">
                  {/* Overall Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{lang === "mm" ? "ယုံလုံးမြတ်နိုးပ" : "Overall Progress"}</span>
                      <span className="font-bold text-lg text-primary">{progressPercentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {completedLessons.length} {lang === "mm" ? "၏" : "of"} {totalLessons} {lang === "mm" ? "သင်ခန်းစာများ" : "lessons completed"}
                    </div>
                  </div>

                  {/* Unit Progress */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{lang === "mm" ? "ယူနစ် တိုးတက်" : "Current Unit"}</span>
                      <span className="font-bold text-primary">{unitProgressPercentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all duration-500"
                        style={{ width: `${unitProgressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Units & Lessons */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{lang === "mm" ? "ယူနစ်များ" : "Course Outline"}</h3>
                <div className="space-y-4">
                  {course.units.map((unit: any, unitIdx: number) => (
                    <div key={unitIdx}>
                      <button
                        onClick={() => setSelectedUnit(unitIdx)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedUnit === unitIdx ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        <p className="text-sm font-semibold">{lang === "mm" ? unit.titleMm : unit.titleEn}</p>
                        <p className="text-xs opacity-75 mt-1">
                          {unit.lessons.length} {lang === "mm" ? "သင်ခန်းစာများ" : "lessons"}
                        </p>
                      </button>

                      {selectedUnit === unitIdx && (
                        <div className="mt-2 space-y-2 ml-2 border-l-2 border-primary/30 pl-2">
                          {unit.lessons.map((lesson: any, lessonIdx: number) => (
                            <button
                              key={lessonIdx}
                              onClick={() => setSelectedLesson(lessonIdx)}
                              className={`w-full text-left p-2 rounded text-sm transition-colors flex items-center gap-2 ${
                                selectedLesson === lessonIdx
                                  ? "bg-primary/20 text-foreground font-semibold"
                                  : "hover:bg-muted text-muted-foreground"
                              }`}
                            >
                              {completedLessons.includes(lesson.id) && (
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              )}
                              {!completedLessons.includes(lesson.id) && (
                                <Play className="w-4 h-4 text-primary flex-shrink-0" />
                              )}
                              <span className="line-clamp-1">{lang === "mm" ? lesson.titleMm : lesson.titleEn}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{lang === "mm" ? "သင်ခန်းစာ အချက်အလက်" : "Course Info"}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{lang === "mm" ? "အဆင့်" : "Level"}</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{lang === "mm" ? "သင်တန်း" : "Duration"}</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{lang === "mm" ? "ကျောင်းသားများ" : "Students"}</span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
