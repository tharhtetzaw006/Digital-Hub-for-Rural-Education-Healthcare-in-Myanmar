"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Download, Wifi, WifiOff, RefreshCw, CheckCircle, Clock, Users } from "lucide-react"
import { EducationNav } from "@/components/education-nav"
import Link from "next/link"
import { useLang } from "@/components/language-provider"

export default function OfflineLearningPage() {
  const { lang } = useLang()
  const t = {
    en: {
      badge: "Available Offline",
      heroTitle: "Learn Anywhere, Anytime",
      heroDesc:
        "Access quality education designed for rural Myanmar students. Interactive lessons, live classes, and offline capabilities ensure learning never stops.",
      syllabusTitle: "Syllabus Overview",
      syllabusDesc:
        "Download-friendly syllabi for quick reference while offline. Expand each course to view weekly topics and materials.",
      mya: "Myanmar Language",
      myaDesc: "Grammar, reading comprehension, writing practice, and pronunciation drills.",
      myaW1: "Week 1: Alphabet & Pronunciation",
      myaW1d: "• Script basics and tones • Listening practice • Writing drills • Offline PDF: Alphabet guide",
      myaW2: "Week 2: Basic Grammar",
      myaW2d: "• Parts of speech • Simple sentences • Offline Video: Grammar Basics",
      myaW3: "Week 3: Reading & Writing",
      myaW3d: "• Short passages • Dictation practice • Offline PDF: Reading Workbook",
      math: "Basic Mathematics",
      mathDesc: "Number operations, problem solving, geometry basics, and practical math.",
      mathW1: "Week 1: Number Sense",
      mathW1d: "• Place value • Addition/subtraction • Offline PDF: Number Practice",
      mathW2: "Week 2: Multiplication & Division",
      mathW2d: "• Times tables • Word problems • Offline Video: Problem Solving",
      mathW3: "Week 3: Shapes & Measurement",
      mathW3d: "• Area/perimeter • Units • Offline PDF: Geometry Basics",
      health: "Health Education",
      healthDesc: "Hygiene, nutrition, disease prevention, and first aid fundamentals.",
      healthW1: "Week 1: Hygiene & Clean Water",
      healthW1d: "• Handwashing • Water safety • Offline PDF: Sanitation Guide",
      healthW2: "Week 2: Nutrition Basics",
      healthW2d: "• Food groups • Local diets • Offline Video: Healthy Meals",
      healthW3: "Week 3: First Aid",
      healthW3d: "• Cuts/burns • Fever care • Offline PDF: First Aid Basics",
      packsTitle: "Offline Content Packs",
      packsDesc: "Download curated packs for quick setup in low-connectivity environments.",
      starter: "Starter Pack",
      starterMeta: "3 videos, 2 PDFs, 4 quizzes",
      dlPack: "Download Pack",
      langPack: "Language Focus",
      langPackMeta: "Myanmar grammar + reading bundle",
      mathHealth: "Math & Health",
      mathHealthMeta: "Problem solving + hygiene videos",
      clearCache: "Clear Offline Cache",
      checkStorage: "Check Storage Status",
      progressTitle: "Current Progress",
      myaProgress: "Myanmar Language",
      mathProgress: "Basic Mathematics",
      healthProgress: "Health Education",
      percentComplete: "% Complete",
      waysTitle: "Multiple Ways to Learn",
      waysDesc: "Choose the learning method that works best for your situation and connectivity",
      offlineTitle: "Offline Learning",
      offlineDesc: "Learn without internet connection",
      dlVideos: "Downloaded Videos",
      vid1: "Myanmar Grammar Basics",
      vid2: "Math Problem Solving",
      vid3: "Health Education Module 1",
      pdfTitle: "PDF Materials",
      pdf1: "Grammar Reference Guide",
      pdf2: "Mathematics Workbook",
      quizTitle: "Practice Quizzes",
      quizMeta: "12 quizzes available offline",
      dlMore: "Download More Content",
      dlMoreAlt: "Download more offline content",
      syncCard: "Sync When Online",
      syncDesc: "Automatic progress synchronization",
      lastSync: "Last Sync",
      saved: "All progress saved",
      pending: "Pending Upload:",
      p1: "• 3 completed quizzes",
      p2: "• 2 assignment submissions",
      p3: "• Progress from 5 lessons",
      syncNow: "Sync Now",
      storiesTitle: "Student Success Stories",
      storiesDesc: "Real impact from rural Myanmar students",
      completed: "Completed",
      completedCourses: "courses",
      goResources: "Browse Resources",
      eng: "English Language",
      engDesc: "Pronunciation, vocabulary building, everyday conversation, and listening practice.",
      engW1: "Week 1: Pronunciation & Sounds",
      engW1d: "• Phonics basics • Minimal pairs • Offline Audio: Pronunciation drills",
      engW2: "Week 2: Everyday Vocabulary",
      engW2d: "• Daily routines • School & home • Offline PDF: Vocabulary lists",
      engW3: "Week 3: Simple Conversations",
      engW3d: "• Greetings • Asking for help • Offline Video: Conversation practice",
      sci: "Science & Technology",
      sciDesc: "Scientific method, safe experiments, digital literacy, and local-tech applications.",
      sciW1: "Week 1: Safe Experiments",
      sciW1d: "• Lab safety • Simple experiments • Offline PDF: Experiment guide",
      sciW2: "Week 2: Nature & Energy",
      sciW2d: "• Plants & soil • Renewable energy basics • Offline Video: Field learning",
      sciW3: "Week 3: Digital Literacy",
      sciW3d: "• Using devices • Files & storage • Offline PDF: Computer basics",
      offlineCoursesTitle: "Offline Courses",
      offlineCoursesDesc:
        "Download-first lessons designed for low connectivity. Preview each syllabus and continue where you left off.",
      duration: "Duration",
      level: "Level",
      beginner: "Beginner",
      allLevels: "All Levels",
      viewSyllabus: "View Syllabus",
      resume: "Resume",
      downloadPackCta: "Download Pack",
      size: "Size",
    },
    mm: {
      badge: "အွန်လိုင်းမရှိသော်လည်း အသုံးပြုနိုင်သည်",
      heroTitle: "ဘယ်နေရာမှာမဆို ဘယ်အချိန်မဆို လေ့လာနိုင်ပါ",
      heroDesc:
        "မြန်မာနိုင်ငံ ရာဘော်ဦးကျေးလက်ဒေသရှိ ကျောင်းသားများအတွက် အရည်အသွေးမြင့် ပညာရေးကို ရရှိစေရန် ထုတ်လုပ်ထားပါသည်။ အပြန်အလှန်သင်ခန်းစာများ၊ ရှင်မလက်တွေ့သင်တန်းများနှင့် အွန်လိုင်းမရှိသော်လည်း အသုံးပြုနိုင်သော အင်္ဂါရပ်များနှင့်အတူ ဆက်လက်လေ့လာနိုင်ပါသည်။",
      syllabusTitle: "စာစီစာကုံး အကြမ်းတမ်း",
      syllabusDesc:
        "အွန်လိုင်းမရှိချိန်တွင်လည်း အလွယ်တကူကြည့်ရှုနိုင်ရန် ဒေါင်းလုဒ်ရယူရမည့် စာရင်းများဖြစ်ပါသည်။ သင်ခန်းစာအလိုက် တစ်ပတ်စီ ခေါင်းစဉ်များနှင့် အရာဝတ္ထုများကို ချဲ့ထွင်ကြည့်ရှုနိုင်ပါသည်။",
      mya: "မြန်မာဘာသာ",
      myaDesc: "သဒ္ဒါ၊ ဖတ်စာနားလည်မှု၊ စာရေးပါရန်နှင့် အသံထွက်လေ့ကျင့်ခန်းများ",
      myaW1: "ပတ် ၁ - မြန်မာအက္ခရာနှင့် အသံထွက်",
      myaW1d: "• စာလုံးပေါင်း အခြေခံနှင့် အသံတိုးလျှော့ • နားထောင်ရေးလေ့ကျင့်ခန်း • စာရေးလေ့ကျင့်ခန်း • Offline PDF: အက္ခရာ လက်စွဲ",
      myaW2: "ပတ် ၂ - သဒ္ဒါအခြေခံ",
      myaW2d: "• စကားပုဒ်အစိတ်အပိုင်းများ • လွယ်ကူသော ဝါကျများ • Offline Video: သဒ္ဒါ အခြေခံ",
      myaW3: "ပတ် ၃ - ဖတ်စာ/ရေးစာ",
      myaW3d: "• အတိုချုံး စာပိုဒ်များ • မိတ္တူရေးလေ့ကျင့်ခန်း • Offline PDF: ဖတ်စာ လေ့ကျင့်စာအုပ်",
      math: "သင်္ချာ အခြေခံ",
      mathDesc: "ကိန်းဂဏန်း လည်ပတ်မှုများ၊ ပြဿနာဖြေရှင်းနည်း၊ ဂျီဩမေတြီ အခြေခံနှင့် လက်တွေ့သင်္ချာ",
      mathW1: "ပတ် ၁ - ကိန်းဂဏန်း နားလည်မှု",
      mathW1d: "• နေရာတန်ဖိုး • ပေါင်း/နုတ် • Offline PDF: ကိန်းလေ့ကျင့်",
      mathW2: "ပတ် ၂ - မျိုးကိန်း/စားပိုင်း",
      mathW2d: "• မူတည်ကိန်းဇယား • စကားပြောပြဿနာ • Offline Video: ပြဿနာဖြေရှင်း",
      mathW3: "ပတ် ၃ - အရိပ်အမြှုပ်/တိုင်းတာမှု",
      mathW3d: "• မျက်နှာပြင်/ဝန်းရံ • ယူနစ်များ • Offline PDF: ဂျီဩမေတြီ အခြေခံ",
      health: "ကျန်းမာရေး ပညာပေး",
      healthDesc: "အသားအရေသန့်ရှင်းရေး၊ အာဟာရ၊ ရောဂါကြိုတင်ကာကွယ်၊ ပထမရှင်ကယ်ထောက် အခြေခံ",
      healthW1: "ပတ် ၁ - လက်ဆေးခြင်းနှင့် ရေနှင့်သန့်ရှင်းမှု",
      healthW1d: "• လက်ဆေးနည်း • ရေဘေးကင်းရှင်းမှု • Offline PDF: သန့်ရှင်းရေး လက်စွဲ",
      healthW2: "ပတ် ၂ - အာဟာရ အခြေခံ",
      healthW2d: "• အာဟာရ အုပ်စုများ • ဒေသန္တရ အစားအစာ • Offline Video: ကျန်းမာအစားအစာ",
      healthW3: "ပတ် ၃ - ပထမရှင် ကယ်ထောက်",
      healthW3d: "• အပူလောင်/ရွဲမှု • ဖျားနာမှု စောင့်ရှောက်မှု • Offline PDF: ပထမရှင် အခြေခံ",
      packsTitle: "အွန်လိုင်းမရှိ ပြင်ဆင်ထားသော အကြောင်းအရာများ",
      packsDesc: "အချက်အလက် ချို့သောနေရာများတွင်လည်း လွယ်ကူစွာ အသုံးပြုနိုင်ရန် အစုရင်း အချက်အလက်များ",
      starter: "စတင်အသုံးပြုအစု",
      starterMeta: "ဗီဒီယို ၃၊ PDF ၂၊ မေးခွန်းလွှာ ၄",
      dlPack: "အစု ဒေါင်းလုဒ်",
      langPack: "ဘာသာစကား အာရုံစိုက်",
      langPackMeta: "မြန်မာ သဒ္ဒါ + ဖတ်စာ အစု",
      mathHealth: "သင်္ချာ & ကျန်းမာရေး",
      mathHealthMeta: "ပြဿနာဖြေရှင်း + သန့်ရှင်းရေး ဗီဒီယိုများ",
      clearCache: "အွန်လိုင်းမရှိ အချက်အလက် ပယ်ဖျက်",
      checkStorage: "သိုလှောင်မှု အခြေအနေ စစ်ဆေး",
      progressTitle: "လက်ရှိ တိုးတက်မှု",
      myaProgress: "မြန်မာဘာသာ",
      mathProgress: "သင်္ချာ အခြေခံ",
      healthProgress: "ကျန်းမာရေး ပညာပေး",
      percentComplete: "% ပြီးစီး",
      waysTitle: "လေ့လာနည်းလမ်း အမျိုးမျိုး",
      waysDesc: "မိမိအနေအထားနှင့် ကွန်နက်ရှင်အခြေအနေ အလိုက် သင့်တော်ဆုံး အပြင်အဆင် ရွေးချယ်ပါ",
      offlineTitle: "အွန်လိုင်းမရှိ လေ့လာခြင်း",
      offlineDesc: "အင်တာနက် မဖြစ်သော်လည်း လေ့လာနိုင်သည်",
      dlVideos: "ဒေါင်းလုပ်ပြီးသော ဗီဒီယိုများ",
      vid1: "မြန်မာ သဒ္ဒါ အခြေခံ",
      vid2: "သင်္ချာ ပြဿနာ ဖြေရှင်းခြင်း",
      vid3: "ကျန်းမာရေး ပညာပေး အခန်း ၁",
      pdfTitle: "PDF အမျိုးအစားများ",
      pdf1: "သဒ္ဒါ ရည်ညွှန်း Guide",
      pdf2: "သင်္ချာ လက်ကွက်စာအုပ်",
      quizTitle: "လေ့ကျင့် မေးခွန်းများ",
      quizMeta: "အွန်လိုင်းမရှိ မေးခွန်း ၁၂ ခု",
      dlMore: "အချက်အလက် ထပ်မံ ဒေါင်းလုဒ်",
      dlMoreAlt: "အွန်လိုင်းမရှိ အကြောင်းအရာ ထပ်မံ ဒေါင်းလုဒ်",
      syncCard: "အွန်လိုင်းသို့ ချိတ်ဆက်သည့်အခါ Sync",
      syncDesc: "တိုးတက်မှုများကို အလိုအလျောက် ရှင်းလင်းတင်သွင်း",
      lastSync: "နောက်ဆုံး Sync",
      saved: "တိုးတက်မှု အားလုံး သိမ်းဆည်းပြီး",
      pending: "တင်သွင်းရန် မလုပ်ရသေးသေး:",
      p1: "• ပြီးမြောက်ပြီးသော မေးခွန်း ၃ ချက်",
      p2: "• အလုပ်စာတင် ၂ ခု",
      p3: "• သင်ခန်းစာ ၅ ခုမှ တိုးတက်မှု",
      syncNow: "ယခုပင် Sync",
      storiesTitle: "ကျောင်းသား အောင်မြင်မှုများ",
      storiesDesc: "မြန်မာ ကျေးလက်ဒေသသားကျောင်းသားများ၏ အကျိုးသက်ရောက်မှု",
      completed: "ပြီးမြောက်",
      completedCourses: "သင်တန်းများ",
      goResources: "အရင်းအမြစ်များ ကြည့်ရှုရန်",
      eng: "အင်္ဂလိပ် ဘာသာ",
      engDesc: "အသံထွက်၊ စကားလုံး တိုးတက်အောင် လေ့ကျင့်ခြင်း၊ နေ့စဉ်ဆက်သွယ်ရေးနှင့် နားထောင်ခြင်း",
      engW1: "ပတ် ၁ - အသံထွက်နှင့် အသံများ",
      engW1d: "• ဖိုနတ်စ် အခြေခံ • မိနီမယ် စုံတွဲ • Offline Audio: အသံထွက် လေ့ကျင့်",
      engW2: "ပတ် ၂ - နေ့စဉ် စကားလုံးများ",
      engW2d: "• နေ့စဉ်လုပ်ဆောင်မှု • စာသင်ကျောင်း/အိမ် • Offline PDF: စကားလုံး စာရင်း",
      engW3: "ပတ် ၃ - အခြေခံ စကားပြော",
      engW3d: "• မှန်ကန်သောနှုတ်ဆက် • ကူညီ တောင်ဆိုမှု • Offline Video: စကားပြော လေ့ကျင့်ခန်း",
      sci: "သိပ္ပံ & နည်းပညာ",
      sciDesc: "သိပ္ပံနည်းစနစ်၊ လုံခြုံသော လက်တွေ့စမ်းသပ်ခန်းများ၊ ဒിജിറ്റယ်စာရိတ္တိနှင့် ဒေသန္တရ နည်းပညာ အသုံးချ",
      sciW1: "ပတ် ၁ - လုံခြုံ စမ်းသပ်ခန်း",
      sciW1d: "• လက်ခလယ် လုံခြုံရေး • အလွယ်တကူ စမ်းသပ်ခန်းများ • Offline PDF: စမ်းသပ် လက်စွဲ",
      sciW2: "ပတ် ၂ - သဘာဝ & စွမ်းအင်",
      sciW2d: "• အပင်/မြေဆီ • ကနဦး ပြန်လည်အသုံးပြု စွမ်းအင် • Offline Video: လယ်ကွင်း အတွေ့အကြုံ",
      sciW3: "ပတ် ၃ - ဒിജിറ്റယ် စာရိတ္တိ",
      sciW3d: "• စက်ကိရိယာအသုံးပြု • ဖိုင်/သိုလှောင်မှု • Offline PDF: ကွန်ပျူတာ အခြေခံ",
      offlineCoursesTitle: "အော့ဖ်လိုင်း သင်တန်းများ",
      offlineCoursesDesc:
        "ကွန်နက်ရှင်နည်းပါးသောနေရာများအတွက် အရင်ဒေါင်းလုဒ်ယူထားသုံးစွဲရန် သင်ခန်းစာများ။ သင်ရိုးကြည့်ရှု၍ မပြီးသေးသောနေရာမှ ဆက်လက်လေ့လာနိုင်ပါသည်။",
      duration: "ကြာချိန်",
      level: "အဆင့်",
      beginner: "ကနဦး",
      allLevels: "အဆင့်အားလုံး",
      viewSyllabus: "သင်ရိုးကြည့်ရန်",
      resume: "ဆက်လက် သင်ကြားရန်",
      downloadPackCta: "အစု ဒေါင်းလုဒ်",
      size: "အရွယ်အစား",
    },
  }[lang || "en"]

  return (
    <div className="min-h-screen bg-background">
      <EducationNav />

      {/* Hero Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">{t.badge}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t.heroDesc}</p>
        </div>
      </section>

      {/* Offline Courses */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{t.offlineCoursesTitle}</h2>
            <p className="text-muted-foreground mt-2">{t.offlineCoursesDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Myanmar Language */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/myanmar-students-learning.jpg"
                  alt="Myanmar classroom - offline learning"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{t.mya}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t.myaDesc}</p>

                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• {t.myaW1}</li>
                    <li>• {t.myaW2}</li>
                    <li>• {t.myaW3}</li>
                  </ul>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {t.duration}: 6 hrs
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-4 h-4" /> {t.level}: {t.allLevels}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Download className="w-4 h-4" /> {t.size}: 220 MB
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="secondary" aria-label={t.viewSyllabus}>
                      <a href="#syllabus">{t.viewSyllabus}</a>
                    </Button>
                    <Button asChild aria-label={`${t.resume} - ${t.mya}`}>
                      <Link href="/education/course/myanmar-grammar">{t.resume}</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="ml-auto"
                      onClick={() => alert("MYA pack")}
                      aria-label={t.downloadPackCta}
                    >
                      <Download className="w-4 h-4 mr-2" /> {t.downloadPackCta}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Mathematics */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/myanmar-math-class.jpg"
                  alt="Math classroom - offline learning"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{t.math}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t.mathDesc}</p>

                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• {t.mathW1}</li>
                    <li>• {t.mathW2}</li>
                    <li>• {t.mathW3}</li>
                  </ul>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {t.duration}: 5.5 hrs
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-4 h-4" /> {t.level}: {t.beginner}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Download className="w-4 h-4" /> {t.size}: 180 MB
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="secondary" aria-label={t.viewSyllabus}>
                      <a href="#syllabus">{t.viewSyllabus}</a>
                    </Button>
                    <Button asChild aria-label={`${t.resume} - ${t.math}`}>
                      <Link href="/education/course/community-health">{t.resume}</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="ml-auto"
                      onClick={() => alert("MATH pack")}
                      aria-label={t.downloadPackCta}
                    >
                      <Download className="w-4 h-4 mr-2" /> {t.downloadPackCta}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Skills / Computer Basics */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/myanmar-computer-training.jpg"
                  alt="Computer lab - offline learning"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{t.sci}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t.sciDesc}</p>

                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• {t.sciW1}</li>
                    <li>• {t.sciW2}</li>
                    <li>• {t.sciW3}</li>
                  </ul>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {t.duration}: 7 hrs
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-4 h-4" /> {t.level}: {t.allLevels}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Download className="w-4 h-4" /> {t.size}: 240 MB
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="secondary" aria-label={t.viewSyllabus}>
                      <a href="#syllabus">{t.viewSyllabus}</a>
                    </Button>
                    <Button asChild aria-label={`${t.resume} - ${t.sci}`}>
                      <Link href="/education/course/digital-skills">{t.resume}</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="ml-auto"
                      onClick={() => alert("DIGITAL pack")}
                      aria-label={t.downloadPackCta}
                    >
                      <Download className="w-4 h-4 mr-2" /> {t.downloadPackCta}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Syllabus Overview */}
      <section id="syllabus" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.syllabusTitle}</h2>
          <p className="text-muted-foreground mb-8">{t.syllabusDesc}</p>

          {/* Syllabus Accordions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">{t.mya}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.myaDesc}</p>
                {/* Accordion */}
                {/* If your project already has a ui/accordion component, this will work out of the box */}
                <div className="space-y-2">
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.myaW1}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.myaW1d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.myaW2}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.myaW2d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.myaW3}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.myaW3d}</div>
                  </details>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">{t.math}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.mathDesc}</p>
                <div className="space-y-2">
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.mathW1}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.mathW1d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.mathW2}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.mathW2d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.mathW3}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.mathW3d}</div>
                  </details>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">{t.health}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.healthDesc}</p>
                <div className="space-y-2">
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.healthW1}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.healthW1d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.healthW2}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.healthW2d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.healthW3}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.healthW3d}</div>
                  </details>
                </div>
              </CardContent>
            </Card>

            {/* English Language */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">{t.eng}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.engDesc}</p>
                <div className="space-y-2">
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.engW1}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.engW1d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.engW2}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.engW2d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.engW3}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.engW3d}</div>
                  </details>
                </div>
              </CardContent>
            </Card>

            {/* Science & Technology */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">{t.sci}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.sciDesc}</p>
                <div className="space-y-2">
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.sciW1}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.sciW1d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.sciW2}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.sciW2d}</div>
                  </details>
                  <details className="group rounded-lg border p-3">
                    <summary className="cursor-pointer font-medium">{t.sciW3}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{t.sciW3d}</div>
                  </details>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offline Content Packs */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.packsTitle}</h2>
          <p className="text-muted-foreground mb-8">{t.packsDesc}</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">{t.starter}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.starterMeta}</p>
                <Button className="w-full" onClick={() => alert(t.starter)} aria-label={t.dlPack}>
                  <Download className="w-4 h-4 mr-2" />
                  {t.dlPack}
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">{t.langPack}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.langPackMeta}</p>
                <Button className="w-full" onClick={() => alert(t.langPack)} aria-label={t.dlPack}>
                  <Download className="w-4 h-4 mr-2" />
                  {t.dlPack}
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">{t.mathHealth}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.mathHealthMeta}</p>
                <Button className="w-full" onClick={() => alert(t.mathHealth)} aria-label={t.dlPack}>
                  <Download className="w-4 h-4 mr-2" />
                  {t.dlPack}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Button variant="secondary" onClick={() => alert(t.clearCache)} aria-label={t.clearCache}>
              {t.clearCache}
            </Button>
            <Button onClick={() => alert(t.checkStorage)} aria-label={t.checkStorage}>
              {t.checkStorage}
            </Button>
            <Button onClick={() => alert("Downloading all packs")} aria-label="Download all offline packs">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Progress */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-6">{t.progressTitle}</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{t.myaProgress}</span>
                      <Badge variant="secondary">8/10</Badge>
                    </div>
                    <Progress value={80} className="mb-2" />
                    <p className="text-sm text-muted-foreground mb-3">80{t.percentComplete}</p>
                    <Button size="sm" asChild aria-label="Resume Myanmar Language course">
                      <Link href="/education/course/myanmar-grammar">Resume</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{t.mathProgress}</span>
                      <Badge variant="secondary">6/12</Badge>
                    </div>
                    <Progress value={50} className="mb-2" />
                    <p className="text-sm text-muted-foreground mb-3">50{t.percentComplete}</p>
                    <Button size="sm" asChild aria-label="Resume Basic Mathematics course">
                      <Link href="/education/course/community-health">Resume</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{t.healthProgress}</span>
                      <Badge variant="secondary">9/10</Badge>
                    </div>
                    <Progress value={90} className="mb-2" />
                    <p className="text-sm text-muted-foreground mb-3">90{t.percentComplete}</p>
                    <Button size="sm" asChild aria-label="Resume Health Education course">
                      <Link href="/education/course/digital-skills">Resume</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Offline Learning */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-6">{t.waysTitle}</h2>
              <p className="text-muted-foreground mb-8">{t.waysDesc}</p>

              {/* Offline Learning Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <WifiOff className="w-5 h-5 text-primary" />
                  {t.offlineTitle}
                </h3>
                <p className="text-muted-foreground mb-6">{t.offlineDesc}</p>

                <div className="space-y-4">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-4">{t.dlVideos}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">{t.vid1}</span>
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">{t.vid2}</span>
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">{t.vid3}</span>
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-4">{t.pdfTitle}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">{t.pdf1}</span>
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">{t.pdf2}</span>
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-4">{t.quizTitle}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">{t.quizMeta}</span>
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button className="w-full" asChild aria-label={t.dlMoreAlt}>
                    <Link href="/education/resources">
                      <Download className="w-4 h-4 mr-2" />
                      {t.dlMore}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sync Section */}
              <div className="mb-8">
                <Card className="p-6 border-primary/20 bg-primary/5">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-primary" />
                      {t.syncCard}
                    </h4>
                    <p className="text-muted-foreground mb-4">{t.syncDesc}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">24</div>
                        <div className="text-sm text-muted-foreground">{t.lastSync}</div>
                        <div className="text-xs text-muted-foreground">2 hours ago</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">12</div>
                        <div className="text-sm text-muted-foreground">{t.saved}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-medium">{t.pending}</div>
                      <div className="text-sm text-muted-foreground">{t.p1}</div>
                      <div className="text-sm text-muted-foreground">{t.p2}</div>
                      <div className="text-sm text-muted-foreground">{t.p3}</div>
                    </div>

                    <Button className="w-full" aria-live="polite" aria-label={t.syncNow}>
                      <Wifi className="w-4 h-4 mr-2" />
                      {t.syncNow}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{t.storiesTitle}</h2>
          <p className="text-muted-foreground mb-8">{t.storiesDesc}</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">MH</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ma Htwe</h4>
                    <p className="text-sm text-muted-foreground">Shan State</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The offline feature helped me continue learning even when our village had no internet. I completed my
                  Myanmar language course and now help teach other children."
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">
                    ★★★★★ {t.completed} 2 {t.completedCourses}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">KM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ko Min</h4>
                    <p className="text-sm text-muted-foreground">Chin State</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The agricultural techniques course improved our family's rice yield by 40%. The practical videos made
                  complex concepts easy to understand."
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">
                    ★★★★★ {t.completed} 3 {t.completedCourses}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">NT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Nang Thida</h4>
                    <p className="text-sm text-muted-foreground">Kayah State</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Digital literacy course opened new opportunities. I now help manage our village's small business
                  accounts and teach computer basics to others."
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">
                    ★★★★★ {t.completed} 4 {t.completedCourses}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
