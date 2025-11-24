"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Circle, ArrowLeft, PlayCircle, FileText, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import { useLang } from "@/components/language-provider"

interface Lesson {
  id: string
  title: string
  titleMm: string
  type: "video" | "article"
  duration: string
  content: string
  contentMm?: string
  videoUrl?: string
  completed: boolean
}

interface Course {
  id: string
  title: string
  titleMm: string
  description: string
  descriptionMm: string
  lessons: Lesson[]
}

const coursesData: Record<string, Course> = {
  "myanmar-grammar": {
    id: "myanmar-grammar",
    title: "Myanmar Language Grammar",
    titleMm: "မြန်မာဘာသာ သဒ္ဒါ",
    description: "Comprehensive guide to Myanmar grammar rules and usage.",
    descriptionMm: "မြန်မာ သဒ္ဒါ စည်းမျဉ်းများနှင့် အသုံးပြုပုံ ပြည့်စုံသော လမ်းညွှန်",
    lessons: [
      {
        id: "1",
        title: "Introduction to Myanmar Alphabet",
        titleMm: "မြန်မာအက္ခရာ မိတ်ဆက်",
        type: "video",
        duration: "15 min",
        videoUrl: "https://www.youtube.com/embed/dpaUBRl8c6A",
        content: "Learn the basics of Myanmar alphabet, consonants, and vowels.",
        completed: false
      },
      {
        id: "2",
        title: "Tones and Pronunciation",
        titleMm: "သရများနှင့် အသံထွက်",
        type: "article",
        duration: "10 min",
        content: `# Tones and Pronunciation in Myanmar Language

Myanmar language has distinctive tones that change the meaning of words. Understanding these tones is crucial for proper communication.

## The Four Main Tones

1. **Creaky Tone (့)** - Short and abrupt
2. **High Tone (း)** - Long and level
3. **Low Tone (no mark)** - Normal level
4. **Stopped Tone (က်, တ်, etc.)** - Ends with a stop

## Practice Examples

- **သာ** (tha) - to be more
- **သား** (tha:) - son
- **သက်** (thet) - to live

## Tips for Learning

* Listen to native speakers carefully
* Practice with audio resources
* Record yourself and compare
* Start with common words

Remember: Tones are not optional in Myanmar - they change the meaning entirely!`,
        contentMm: `# မြန်မာဘာသာ သရများနှင့် အသံထွက်

မြန်မာဘာသာတွင် စကားလုံးများ၏ အဓိပ္ပာယ်ကို ပြောင်းလဲစေသော ထူးခြားသော သရများ ရှိပါသည်။ မှန်ကန်သော ဆက်သွယ်မှုအတွက် ဤသရများကို နားလည်ခြင်းသည် အလွန်အရေးကြီးပါသည်။

## အဓိက သရလေးမျိုး

1. **တိုသရ (့)** - တိုပြီး ကျယ်လောင်သော အသံ
2. **လေးသရ (း)** - ရှည်ပြီး ညီညာသော အသံ
3. **ဗျည်းပေါ် (အမှတ်အသားမရှိ)** - ပုံမှန် အဆင့်
4. **ဝေဖန်သရ (က်, တ်, စသည်)** - ရပ်တန့်မှုဖြင့် အဆုံးသတ်သည်

## လေ့ကျင့်မှု ဥပမာများ

- **သာ** (tha) - ပို၍
- **သား** (tha:) - သား
- **သက်** (thet) - အသက်ရှင်သည်

## သင်ယူရန် အကြံပြုချက်များ

* ဇာတိစကား ပြောသူများကို သေချာစွာ နားထောင်ပါ
* အသံ အရင်းအမြစ်များဖြင့် လေ့ကျင့်ပါ
* သင့်ကိုယ်သင် အသံသွင်းပြီး နှိုင်းယှဉ်ပါ
* အသုံးများသော စကားလုံးများဖြင့် စတင်ပါ

မှတ်ထားပါ - မြန်မာဘာသာတွင် သရများသည် ရွေးချယ်ပိုင်ခွင့် မဟုတ်ပါ - ၎င်းတို့က အဓိပ္ပာယ်ကို လုံးဝ ပြောင်းလဲစေပါသည်!`,
        completed: false
      },
      {
        id: "3",
        title: "Basic Sentence Structure",
        titleMm: "အခြေခံ ဝါကျဖွဲ့စည်းပုံ",
        type: "article",
        duration: "12 min",
        content: `# Basic Sentence Structure

Myanmar follows a Subject-Object-Verb (SOV) word order, which is different from English.

## Basic Pattern

**Subject + Object + Verb**

Examples:
- ကျွန်တော် (I) + ထမင်း (rice) + စားတယ် (eat) = "I eat rice"
- သူ (he) + စာအုပ် (book) + ဖတ်တယ် (read) = "He reads a book"

## Particles

Myanmar uses particles to indicate:
- တယ် - present/past tense
- မယ် - future tense  
- လား - question marker
- နဲ့ - with/and

Practice these patterns daily!`,
        contentMm: `# အခြေခံ ဝါကျဖွဲ့စည်းပုံ

မြန်မာဘာသာသည် အင်္ဂလိပ်ဘာသာနှင့် ကွဲပြားသော ဝါကျဖွဲ့စည်းပုံ Subject-Object-Verb (SOV) ကို လိုက်နာပါသည်။

## အခြေခံ ပုံစံ

**ကတ္တား + ကံ + ကြိယာ**

ဥပမာများ:
- ကျွန်တော် + ထမင်း + စားတယ် = "ကျွန်တော် ထမင်းစားတယ်"
- သူ + စာအုပ် + ဖတ်တယ် = "သူ စာအုပ်ဖတ်တယ်"

## ပုဒ်ဖြတ်

မြန်မာဘာသာတွင် အောက်ပါတို့ကို ညွှန်ပြရန် ပုဒ်ဖြတ်များ အသုံးပြုပါသည်:
- တယ် - ပစ္စုပ္ပန်/အတိတ်ကာလ
- မယ် - အနာဂတ်ကာလ
- လား - မေးခွန်း အမှတ်အသား
- နဲ့ - နှင့်/နှင့်အတူ

ဤပုံစံများကို နေ့စဉ် လေ့ကျင့်ပါ!`,
        completed: false
      },
      {
        id: "4",
        title: "Common Grammar Mistakes",
        titleMm: "အသုံးများသော သဒ္ဒါအမှားများ",
        type: "video",
        duration: "18 min",
        videoUrl: "https://www.youtube.com/embed/dpaUBRl8c6A",
        content: "Learn about the most common grammar mistakes and how to avoid them.",
        completed: false
      }
    ]
  },
  "community-health": {
    id: "community-health",
    title: "Community Health Basics",
    titleMm: "အသိုင်းအဝိုင်း ကျန်းမာရေး အခြေခံများ",
    description: "Foundational health practices for rural communities.",
    descriptionMm: "ကျေးလက်ဒေသ အသိုင်းအဝိုင်းများအတွက် အခြေခံ ကျန်းမာရေး အလေ့အကျင့်များ",
    lessons: [
      {
        id: "1",
        title: "Clean Water and Sanitation",
        titleMm: "သန့်ရှင်းသော ရေနှင့် သန့်ရှင်းမှု",
        type: "video",
        duration: "20 min",
        videoUrl: "https://www.youtube.com/embed/dpaUBRl8c6A",
        content: "Understanding the importance of clean water and proper sanitation.",
        completed: false
      },
      {
        id: "2",
        title: "Disease Prevention Methods",
        titleMm: "ရောဂါ ကာကွယ်ခြင်း နည်းလမ်းများ",
        type: "article",
        duration: "15 min",
        content: `# Disease Prevention Methods

Prevention is better than cure. Here are essential methods to prevent common diseases in rural communities.

## Hand Washing

* Wash hands before eating
* Wash hands after using toilet
* Use soap and clean water
* Scrub for at least 20 seconds

## Food Safety

1. Cook food thoroughly
2. Store food properly
3. Avoid contaminated water
4. Wash fruits and vegetables

## Mosquito Prevention

* Use mosquito nets
* Remove standing water
* Wear long sleeves at dusk
* Use repellent when necessary

## Vaccination

Stay up to date with recommended vaccines for your area.`,
        contentMm: `# ရောဂါ ကာကွယ်ခြင်း နည်းလမ်းများ

ကုသခြင်းထက် ကာကွယ်ခြင်းက ပိုကောင်းပါသည်။ ကျေးလက်ဒေသ အသိုင်းအဝိုင်းများတွင် အသုံးများသော ရောဂါများကို ကာကွယ်ရန် မရှိမဖြစ် လိုအပ်သော နည်းလမ်းများ ဖြစ်ပါသည်။

## လက်ဆေးခြင်း

* အစားမစားမီ လက်ဆေးပါ
* အိမ်သာအသုံးပြီးနောက် လက်ဆေးပါ
* ဆပ်ပြာနှင့် သန့်ရှင်းသောရေ အသုံးပြုပါ
* အနည်းဆုံး ၂၀ စက္ကန့် ပွတ်တိုက်ပါ

## အစားအစာ ဘေးကင်းမှု

1. အစားအစာကို ကောင်းစွာချက်ပြုတ်ပါ
2. အစားအစာကို သင့်လျော်စွာ သိမ်းဆည်းပါ
3. ညစ်ညမ်းသောရေကို ရှောင်ကြဉ်ပါ
4. သစ်သီးများနှင့် ဟင်းသီးဟင်းရွက်များကို ဆေးပါ

## ခြင် ကာကွယ်ခြင်း

* ခြင်ထောင်ကို အသုံးပြုပါ
* ရပ်နေသောရေကို ဖယ်ရှားပါ
* ည ဦးယံတွင် လက်ရှည်အင်္ကျီ ဝတ်ပါ
* လိုအပ်ပါက ခြင်ပုပ်ဆေး အသုံးပြုပါ

## ကာကွယ်ဆေး

သင့်ဒေသအတွက် အကြံပြုထားသော ကာကွယ်ဆေးများကို အချိန်မီ ထိုးပါ။`,
        completed: false
      },
      {
        id: "3",
        title: "Maternal and Child Care",
        titleMm: "မိခင်နှင့် ကလေး စောင့်ရှောက်မှု",
        type: "video",
        duration: "25 min",
        videoUrl: "https://www.youtube.com/embed/dpaUBRl8c6A",
        content: "Essential care practices for mothers and children.",
        completed: false
      }
    ]
  },
  "digital-skills": {
    id: "digital-skills",
    title: "Digital Literacy & Computer Basics",
    titleMm: "ဒစ်ဂျစ်တယ် စာတတ်မြောက်မှုနှင့် ကွန်ပျူတာ အခြေခံများ",
    description: "Practical computer skills for students and community members.",
    descriptionMm: "ကျောင်းသားများနှင့် အသိုင်းအဝိုင်း အဖွဲ့ဝင်များအတွက် လက်တွေ့ကျသော ကွန်ပျူတာ ကျွမ်းကျင်မှုများ",
    lessons: [
      {
        id: "1",
        title: "Introduction to Computers",
        titleMm: "ကွန်ပျူတာ မိတ်ဆက်",
        type: "video",
        duration: "15 min",
        videoUrl: "https://www.youtube.com/embed/dpaUBRl8c6A",
        content: "Basic introduction to computer hardware and software.",
        completed: false
      },
      {
        id: "2",
        title: "Typing and File Management",
        titleMm: "စာရိုက်ခြင်းနှင့် ဖိုင် စီမံခန့်ခွဲမှု",
        type: "article",
        duration: "20 min",
        content: `# Typing and File Management

## Keyboard Basics

Learn the proper typing position:
* Keep fingers on home row (ASDF JKL;)
* Use all fingers, not just two
* Practice regularly for speed
* Learn Myanmar Unicode typing

## File Management

### Creating Folders
1. Right-click in location
2. Select "New Folder"
3. Name your folder clearly

### Organizing Files
* Use descriptive names
* Group related files together
* Create subfolders for categories
* Delete unnecessary files regularly

### File Extensions
* .docx - Word documents
* .xlsx - Excel spreadsheets
* .pdf - PDF documents
* .jpg, .png - Images

Practice organizing your files daily!`,
        contentMm: `# စာရိုက်ခြင်းနှင့် ဖိုင် စီမံခန့်ခွဲမှု

## ကီးဘုတ် အခြေခံများ

မှန်ကန်သော စာရိုက်နေရာကို လေ့လာပါ:
* လက်ချောင်းများကို home row (ASDF JKL;) တွင် ထားပါ
* လက်ချောင်းနှစ်ချောင်းသာမက လက်ချောင်းအားလုံး အသုံးပြုပါ
* အမြန်နှုန်းအတွက် ပုံမှန် လေ့ကျင့်ပါ
* မြန်မာ Unicode စာရိုက်ခြင်း သင်ယူပါ

## ဖိုင် စီမံခန့်ခွဲမှု

### ဖိုဒါများ ဖန်တီးခြင်း
1. နေရာတွင် Right-click နှိပ်ပါ
2. "New Folder" ကို ရွေးပါ
3. သင့်ဖိုဒါကို ရှင်းလင်းစွာ အမည်ပေးပါ

### ဖိုင်များ စီစဉ်ခြင်း
* ဖော်ပြနိုင်သော အမည်များ အသုံးပြုပါ
* ဆက်စပ်နေသော ဖိုင်များကို အတူတကွ စုပါ
* အမျိုးအစားများအတွက် ဖိုဒါငယ်များ ဖန်တီးပါ
* မလိုအပ်သော ဖိုင်များကို ပုံမှန် ဖျက်ပါ

### ဖိုင် တိုးချဲ့မှုများ
* .docx - Word စာရွက်စာတမ်းများ
* .xlsx - Excel စာရင်းဇယားများ
* .pdf - PDF စာရွက်စာတမ်းများ
* .jpg, .png - ရုပ်ပုံများ

သင့်ဖိုင်များကို နေ့စဉ် စီစဉ်ရန် လေ့ကျင့်ပါ!`,
        completed: false
      }
    ]
  }
}

export default function CoursePage() {
  const router = useRouter()
  const params = useParams()
  const { t, lang } = useLang()
  const courseId = params.id as string

  const [course, setCourse] = useState<Course | null>(null)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Load course data
    const loadedCourse = coursesData[courseId]
    if (!loadedCourse) {
      router.push("/education/offline")
      return
    }

    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`course_progress_${courseId}`)
    if (savedProgress) {
      const savedLessons = JSON.parse(savedProgress)
      loadedCourse.lessons = savedLessons
    }

    setCourse(loadedCourse)
    setLessons(loadedCourse.lessons)
    calculateProgress(loadedCourse.lessons)
  }, [courseId, router])

  const calculateProgress = (lessonList: Lesson[]) => {
    const completed = lessonList.filter(l => l.completed).length
    const total = lessonList.length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
    setProgress(percentage)
  }

  const handleMarkAsRead = () => {
    if (!course) return

    const updatedLessons = [...lessons]
    updatedLessons[currentLessonIndex].completed = true
    setLessons(updatedLessons)
    calculateProgress(updatedLessons)

    // Save to localStorage
    localStorage.setItem(`course_progress_${courseId}`, JSON.stringify(updatedLessons))

    // Move to next lesson if available
    if (currentLessonIndex < lessons.length - 1) {
      setTimeout(() => {
        setCurrentLessonIndex(currentLessonIndex + 1)
      }, 500)
    }
  }

  const currentLesson = lessons[currentLessonIndex]

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {lang === "mm" ? "ပြန်သွားရန်" : "Back"}
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">
            {lang === "mm" ? course.titleMm : course.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            {lang === "mm" ? course.descriptionMm : course.description}
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{lang === "mm" ? "တိုးတက်မှု" : "Progress"}</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {lessons.filter(l => l.completed).length} / {lessons.length} {lang === "mm" ? "သင်ခန်းစာများ ပြီးစီးပြီ" : "lessons completed"}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Lesson List Sidebar */}
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle className="text-lg">
                {lang === "mm" ? "သင်ခန်းစာများ" : "Lessons"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => setCurrentLessonIndex(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    index === currentLessonIndex
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {lesson.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {lesson.type === "video" ? (
                          <PlayCircle className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <FileText className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lesson.duration}
                        </span>
                      </div>
                      <p className="text-sm font-medium line-clamp-2">
                        {lang === "mm" ? lesson.titleMm : lesson.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {currentLesson.type === "video" ? (
                      <PlayCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <FileText className="w-5 h-5 text-primary" />
                    )}
                    <CardTitle>{lang === "mm" ? currentLesson.titleMm : currentLesson.title}</CardTitle>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentLesson.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Video Player */}
                {currentLesson.type === "video" && currentLesson.videoUrl && (
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={currentLesson.videoUrl}
                      title={currentLesson.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Article Content */}
                {currentLesson.type === "article" && (
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="whitespace-pre-line leading-relaxed">
                      {((lang === "mm" && currentLesson.contentMm) ? currentLesson.contentMm : currentLesson.content).split('\n').map((line, idx) => {
                        // Headers
                        if (line.startsWith('# ')) {
                          return <h2 key={idx} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h2>
                        }
                        if (line.startsWith('## ')) {
                          return <h3 key={idx} className="text-xl font-semibold mt-4 mb-3">{line.substring(3)}</h3>
                        }
                        if (line.startsWith('### ')) {
                          return <h4 key={idx} className="text-lg font-semibold mt-3 mb-2">{line.substring(4)}</h4>
                        }
                        // Bold text
                        if (line.includes('**')) {
                          const parts = line.split(/\*\*(.*?)\*\*/)
                          return <p key={idx} className="mb-2">{parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}</p>
                        }
                        // Bullet points
                        if (line.startsWith('* ') || line.startsWith('- ')) {
                          return <li key={idx} className="ml-6 mb-1">{line.substring(2)}</li>
                        }
                        // Numbered lists
                        if (line.match(/^\d+\.\s/)) {
                          return <li key={idx} className="ml-6 mb-1">{line.replace(/^\d+\.\s/, '')}</li>
                        }
                        // Empty lines
                        if (line.trim() === '') {
                          return <br key={idx} />
                        }
                        // Regular paragraphs
                        return <p key={idx} className="mb-3">{line}</p>
                      })}
                    </div>
                  </div>
                )}

                {/* Mark as Complete Button */}
                <div className="pt-4 border-t">
                  {currentLesson.completed ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">
                        {lang === "mm" ? "ပြီးစီးပြီ" : "Completed"}
                      </span>
                    </div>
                  ) : (
                    <Button onClick={handleMarkAsRead} className="w-full" size="lg">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      {lang === "mm" ? "ဖတ်ပြီးအဖြစ် မှတ်သားရန်" : "Mark as Read"}
                    </Button>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentLessonIndex(Math.max(0, currentLessonIndex - 1))}
                    disabled={currentLessonIndex === 0}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {lang === "mm" ? "အရင်သင်ခန်းစာ" : "Previous"}
                  </Button>
                  <Button
                    onClick={() => setCurrentLessonIndex(Math.min(lessons.length - 1, currentLessonIndex + 1))}
                    disabled={currentLessonIndex === lessons.length - 1}
                  >
                    {lang === "mm" ? "နောက်သင်ခန်းစာ" : "Next"}
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
