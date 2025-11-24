import type { NextRequest } from "next/server"

// Doctor database with ratings
const doctorsDatabase = [
  {
    name: "Dr. Aung Win",
    specialty: "General Medicine",
    rating: 4.9,
    experience: "15 years",
    availability: "24/7"
  },
  {
    name: "Dr. Mya Moe",
    specialty: "Pediatrics",
    rating: 4.8,
    experience: "12 years",
    availability: "Mon-Fri"
  },
  {
    name: "Dr. Kyaw Soe",
    specialty: "Cardiology",
    rating: 4.95,
    experience: "18 years",
    availability: "By appointment"
  },
  {
    name: "Dr. Nay Myo",
    specialty: "Internal Medicine",
    rating: 4.7,
    experience: "10 years",
    availability: "Daily"
  }
]

// Smart AI with greeting and doctor query support
const generateIntelligentResponse = (userMessage: string, lang: string): string => {
  const lowerMessage = userMessage.toLowerCase()
  
  // ========== GREETINGS - RESPOND WITH FRIENDLY GREETING ==========
  if (lowerMessage === "hi" || lowerMessage === "hello" || lowerMessage === "hey" || lowerMessage === "hii" || lowerMessage === "hello there" || lowerMessage === "hi there") {
    return lang === "mm"
      ? "ဟိုင်! ကျွန်ုပ်သည် Digital Hub Myanmar ၏ AI အကူအညီ ဖြစ်ပါသည်။ 😊 သင့်ကို မည်သည့်အရာ ကူညီပေးနိုင်သည်နည်း?"
      : "Hi there! 👋 Welcome to Digital Hub Myanmar! I'm here to help you with education, healthcare, doctor consultations, or anything else. What can I assist you with today?"
  }

  // ========== DOCTOR QUERIES - RESPOND WITH ACTUAL DOCTOR INFO ==========
  // High/best/top rated doctor
  if ((lowerMessage.includes("high") || lowerMessage.includes("best") || lowerMessage.includes("top")) && 
      (lowerMessage.includes("doctor") || lowerMessage.includes("rating") || lowerMessage.includes("rate"))) {
    const topDoc = doctorsDatabase.reduce((max, doc) => doc.rating > max.rating ? doc : max)
    return lang === "mm"
      ? `အမြင့်ဆုံး အဆင့်အသိုက်သွေးရှိ ဆရာဝန်မှာ **${topDoc.name}** ဖြစ်ပြီး အဆင့်အသိုက် ${topDoc.rating}⭐ ရှိပါသည်။ ကျ専門်ပညာ: ${topDoc.specialty} | အတွေ့အကျင့်: ${topDoc.experience} | လက်ခံနိုင်မှု: ${topDoc.availability}`
      : `Our highest-rated doctor is **${topDoc.name}** with a ${topDoc.rating}⭐ rating! Specialty: ${topDoc.specialty} | Experience: ${topDoc.experience} | Availability: ${topDoc.availability}`
  }

  // Who is the best/top doctor?
  if ((lowerMessage.includes("who") || lowerMessage.includes("which")) && 
      (lowerMessage.includes("doctor") || lowerMessage.includes("best") || lowerMessage.includes("high"))) {
    const topDoc = doctorsDatabase.reduce((max, doc) => doc.rating > max.rating ? doc : max)
    return lang === "mm"
      ? `ကျွန်ုပ်တို့ အကယ်အဖွဲ့ပေါ် ကျန်းမာရေး ဆရာဝန်မှာ **${topDoc.name}** ဖြစ်ပါသည်။ အဆင့်အသိုက် ${topDoc.rating}⭐ အဖြစ် စာရင်းသွင်းထားပါသည်။ ${topDoc.specialty} နှင့် ${topDoc.experience} အတွေ့အကျင့်ရှိပါသည်။`
      : `Our top-rated doctor is **${topDoc.name}** with an impressive ${topDoc.rating}⭐ rating! They specialize in ${topDoc.specialty} and have ${topDoc.experience} of experience. Book a consultation anytime - available ${topDoc.availability}.`
  }

  // Other doctors / doctor list queries
  if (lowerMessage.includes("other doctor") || lowerMessage.includes("doctor name") || lowerMessage.includes("list doctor") || 
      lowerMessage.includes("all doctor") || lowerMessage.includes("about doctor")) {
    const docList = doctorsDatabase.map((d, i) => `${i + 1}. ${d.name} (${d.specialty}) - ${d.rating}⭐ | ${d.experience} | ${d.availability}`).join("\n")
    return lang === "mm"
      ? `ကျွန်ုပ်တို့ အားလုံး ကျန်းမာရေး ဆရာဝန်များ:\n${docList}`
      : `Our All Doctors:\n${docList}`
  }

  // Specific doctor name queries
  if (lowerMessage.includes("dr.") || lowerMessage.includes("doctor ")) {
    const docList = doctorsDatabase.map((d, i) => `${i + 1}. ${d.name} (${d.specialty}) - ${d.rating}⭐ | ${d.experience} | ${d.availability}`).join("\n")
    return lang === "mm"
      ? `ကျွန်ုပ်တို့ ကျန်းမာရေး ဆရာဝန်များ:\n${docList}`
      : `Our Doctors:\n${docList}`
  }

  // Pediatrics specialist
  if (lowerMessage.includes("pediatric") || lowerMessage.includes("child") || lowerMessage.includes("baby")) {
    const pediatricDoc = doctorsDatabase.find(d => d.specialty.toLowerCase().includes("pediatric"))
    if (pediatricDoc) {
      return lang === "mm"
        ? `ကလေးတွေအတွက် ကျန်းမာရေး ဆရာဝန် - **${pediatricDoc.name}** (${pediatricDoc.specialty}) - ${pediatricDoc.rating}⭐ | ${pediatricDoc.experience} | ${pediatricDoc.availability}`
        : `For children's healthcare: **${pediatricDoc.name}** (${pediatricDoc.specialty}) - ${pediatricDoc.rating}⭐ | Experience: ${pediatricDoc.experience} | Availability: ${pediatricDoc.availability}`
    }
  }

  // Cardiology specialist
  if (lowerMessage.includes("cardiac") || lowerMessage.includes("cardiology") || lowerMessage.includes("heart")) {
    const cardiologyDoc = doctorsDatabase.find(d => d.specialty.toLowerCase().includes("cardiology"))
    if (cardiologyDoc) {
      return lang === "mm"
        ? `နှလုံးဆိုင်ရာ ကျန်းမာရေး ဆရာဝန် - **${cardiologyDoc.name}** (${cardiologyDoc.specialty}) - ${cardiologyDoc.rating}⭐ | ${cardiologyDoc.experience} | ${cardiologyDoc.availability}`
        : `For heart health: **${cardiologyDoc.name}** (${cardiologyDoc.specialty}) - ${cardiologyDoc.rating}⭐ | Experience: ${cardiologyDoc.experience} | Availability: ${cardiologyDoc.availability}`
    }
  }
  
  
  // ========== HEALTHCARE QUERIES ==========
  if (lowerMessage.includes("health") || lowerMessage.includes("sick") || 
      lowerMessage.includes("illness") || lowerMessage.includes("disease") || lowerMessage.includes("medical")) {
    
    // Specific health conditions
    if (lowerMessage.includes("headache") || lowerMessage.includes("ခေါင်း")) {
      return lang === "mm"
        ? "ခေါင်းကိုက်ခြင်းမှ ရှင်းလင်းရန် - တိတ်ဆိတ်ပြီး မှောင်မိုက်သော နေရာတွင် အနားယူပါ။ ရေများများ သောက်ပါ။ Paracetamol 500mg သောက်ကြည့်ပါ။ 2 ရက်ထက်ကြာရှည်ပါက ဆရာဝန်ထံသွားပါ။"
        : "For headaches: Rest in a dark, quiet room. Drink plenty of water. Take paracetamol (500mg) if needed. If it persists over 2 days, consult our doctor."
    }

    if (lowerMessage.includes("fever") || lowerMessage.includes("အဖျား")) {
      return lang === "mm"
        ? "အဖျား 38°C အထက်ဖြစ်ပါက - Paracetamol သို့မဟုတ် Ibuprofen ကို 4-6 နာရီ တစ်ကြိမ် သောက်ပါ။ ရေများများ သောက်ပါ။ 3 ရက်ထက်ကြာရှည်ပါက ဆေးခန်းသွားပါ။"
        : "For fever (38°C+): Take paracetamol or ibuprofen every 4-6 hours. Stay hydrated. See a doctor if fever persists over 3 days."
    }

    if (lowerMessage.includes("cough") || lowerMessage.includes("ချောင်း")) {
      return lang === "mm"
        ? "ချောင်းဆိုးခြင်းအတွက် - ပျားရည်နှင့် နွေးအေးရည် သောက်ပါ။ အနားများများ ယူပါ။ မီးခိုးကိုရှောင်ကြဉ်ပါ။ 2 ပတ်ထက်ကြာပါက ဆရာဝန်ထံသွားပါ။"
        : "For coughs: Drink honey and warm water. Rest well. Avoid smoke. See a doctor if cough lasts over 2 weeks."
    }

    // General healthcare
    return lang === "mm"
      ? "ကျွန်ုပ်တို့ ကျန်းမာရေး ဝန်ဆောင်မှုများ ရှိသည်: ၂၄/၇ ဆရာဝန် တက်ခေါ်ဆေးကု၊ ဗီဒီယို အတိုင်ပင်ဆွေးနွေးမှု၊ အရေးပေါ် ကူညီမှု။ Healthcare စာမျက်နှာသို့ သွားပါ။"
      : "Our healthcare services: 24/7 doctor consultations, video appointments, emergency support, and mobile clinics. Visit our Healthcare portal to book!"
  }
  
  // ========== EDUCATION QUERIES ==========
  if (lowerMessage.includes("learn") || lowerMessage.includes("study") || lowerMessage.includes("course") || 
      lowerMessage.includes("education") || lowerMessage.includes("ပညာ")) {
    
    if (lowerMessage.includes("how to start") || lowerMessage.includes("စတင်")) {
      return lang === "mm"
        ? "ပညာရေး စတင်ရန်: (1) Education စာမျက်နှာသို့ သွားပါ (2) သင်လိုသော သင်ခန်းစာ ရွေးချယ်ပါ (3) 'Continue Learning' နိုပ်ပါ (4) ဗီဒီယို ကြည့်ပါ (5) 'Mark as Read' နိုပ်ပါ။ Progress % တိုးလာပါသည်!"
        : "How to start learning: (1) Go to Education portal (2) Select a course (3) Click 'Continue Learning' (4) Watch videos (5) Click 'Mark as Read' to track progress!"
    }

    if (lowerMessage.includes("course") || lowerMessage.includes("what")) {
      return lang === "mm"
        ? "ကျွန်ုပ်တို့ အကျိုးအစီးများ: မြန်မာ စာ၊ အင်္ဂလိပ်စာ၊ သင်္ချာ၊ သိပ္ပံ၊ ကျန်းမာရေး ပညာရေး။ အခမဲ့ သင်ခန်းစာများ၊ တိုက်ရိုက် သင်ကြားပေးမှု၊ အော့ဖ်လိုင်း လေ့လာခွင့်ရှိ။"
        : "Our courses: Myanmar Language, English, Math, Science, Health Education. Free courses, live classes, offline learning available!"
    }

    // General education
    return lang === "mm"
      ? "ကျွန်ုပ်တို့ ပညာရေး ပဏ္ဌာန်းတွင် အခမဲ့ သင်ခန်းစာများ၊ အသုံးပြုသူ-မိတ်ဝါးမှုဖြစ်သော ကွန်တင်တ်များ ရှိပါသည်။ Education စာမျက်နှာသို့ သွားပါ။"
      : "Our Education platform offers free courses, interactive content, live classes, and offline materials. Visit Education to explore!"
  }
  // ========== APPOINTMENT BOOKING ==========
  if (lowerMessage.includes("appoint") || lowerMessage.includes("book") || lowerMessage.includes("schedule") || lowerMessage.includes("consultation")) {
    return lang === "mm"
      ? "ရက်ချိန်းယူရန်: Healthcare > Appointments သို့သွားပါ။ ဆရာဝန် ရွေးချယ်ပါ။ သင့်အလိုအလျောက် ချိန်ခွင် ရွေးချယ်ပါ။ 24/7 ရှိပါသည်။"
      : "To book an appointment: Go to Healthcare > Appointments. Select your preferred doctor. Choose your time. Available 24/7!"
  }

  // ========== PRICE / COST QUERIES ==========
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("fee") || 
      lowerMessage.includes("payment") || lowerMessage.includes("charge")) {
    return lang === "mm"
      ? "ကျွန်ုပ်တို့၏ ပညာရေး သင်ခန်းစာများ အားလုံး အခမဲ့ ဖြစ်ပါသည်။ ကျန်းမာရေး ဝန်ဆောင်မှုများ၏ စျေးနှုန်းများ ကွဲပြားပါသည်။ အသေးစိတ် သိရှိရန် Support စာမျက်နှာသို့ သွားပါ သို့မဟုတ် ဆက်သွယ်ပါ။"
      : "All our education courses are FREE! Healthcare service fees vary by service type. For detailed pricing information, please visit our Support page or contact us directly."
  }

  // ========== ABOUT US / MISSION ==========
  if (lowerMessage.includes("about") || lowerMessage.includes("mission") || lowerMessage.includes("who are") || 
      lowerMessage.includes("what is digital hub")) {
    return lang === "mm"
      ? "Digital Hub Myanmar သည် မြန်မာနိုင်ငံ ကျေးလက်ဒေသများတွင် အရည်အသွေးမြင့် ပညာရေးနှင့် ကျန်းမာရေး ဝန်ဆောင်မှုများ ပေးရန် တည်ထောင်ထားပါသည်။ ကျွန်ုပ်တို့သည် ၁၅၀+ ကျေးရွာများတွင် ဝန်ဆောင်မှု ပေးနေပါသည်။"
      : "Digital Hub Myanmar is a platform dedicated to providing quality education and healthcare services to rural communities in Myanmar. We serve 150+ villages with free education, telemedicine, and mobile health clinics."
  }

  // ========== LANGUAGE QUERIES ==========
  if (lowerMessage.includes("language") || lowerMessage.includes("english") || lowerMessage.includes("myanmar") || 
      lowerMessage.includes("burmese")) {
    return lang === "mm"
      ? "ကျွန်ုပ်တို့သည် အင်္ဂလိပ်စာနှင့် မြန်မာစာ နှစ်ခုလုံး ပံ့ပိုးပေးပါသည်။ ဘာသာစကား ပြောင်းလဲရန် စာမျက်နှာ အပေါ်ရှိ ဘာသာစကား switcher ကို နှိပ်ပါ။"
      : "We support both English and Myanmar (Burmese) languages! You can switch languages using the language switcher at the top of any page."
  }

  // ========== EMERGENCY QUERIES ==========
  if (lowerMessage.includes("emergency") || lowerMessage.includes("urgent") || lowerMessage.includes("serious") || 
      lowerMessage.includes("ambulance")) {
    return lang === "mm"
      ? "အရေးပေါ် အခြေအနေအတွက် - Healthcare > Emergency Services သို့ ချက်ချင်း သွားပါ သို့မဟုတ် ကျွန်ုပ်တို့၏ အရေးပေါ် ဆေးဝန်ဆောင်မှု လိုင်းကို ဖုန်းခေါ်ပါ။ ၂၄/၇ ရရှိနိုင်ပါသည်။"
      : "For EMERGENCIES: Go to Healthcare > Emergency Services immediately or call our emergency hotline. Available 24/7. For life-threatening situations, please also call local emergency services!"
  }

  // ========== VIDEO CONSULTATION ==========
  if (lowerMessage.includes("video") || lowerMessage.includes("online consultation") || lowerMessage.includes("virtual")) {
    return lang === "mm"
      ? "ဗီဒီယို တိုင်ပင်ဆွေးနွေးမှု ရယူရန်: Healthcare > Video Consultation သို့သွားပါ။ အချိန်ရွေးချယ်ပါ။ ကျွန်ုပ်တို့၏ ဆရာဝန်များ အွန်လိုင်းမှ ရရှိနိုင်ပါသည်။"
      : "For video consultations: Visit Healthcare > Video Consultation. Choose your time slot and connect with our doctors online from anywhere!"
  }

  // ========== COURSE CERTIFICATE ==========
  if (lowerMessage.includes("certificate") || lowerMessage.includes("completion") || lowerMessage.includes("credential")) {
    return lang === "mm"
      ? "သင်ခန်းစာ ပြီးမြောက်မှု လက်မှတ်များ ရရှိနိုင်ပါသည်။ သင်ခန်းစာတစ်ခု ၁၀၀% ပြီးမြောက်သောအခါ လက်မှတ် ရယူနိုင်ပါသည်။ Education Dashboard တွင် ကြည့်ပါ။"
      : "Yes! You receive completion certificates when you finish courses with 100% progress. View your certificates in Education Dashboard after completing all modules."
  }
  
  // ========== TECHNICAL SUPPORT ==========
  if (lowerMessage.includes("help") || lowerMessage.includes("support") || lowerMessage.includes("problem") ||
      lowerMessage.includes("issue") || lowerMessage.includes("bug") || lowerMessage.includes("error") || lowerMessage.includes("not working")) {
    return lang === "mm"
      ? "နည်းပညာ အကူအညီအတွက် - Support စာမျက်နှာသို့ သွားပါ သို့မဟုတ် support@digitalhubmyanmar.org သို့ အီးမေးလ် ပို့ပါ။ ၂၄ နာရီအတွင်း ပြန်လည် ဆက်သွယ်ပါမည်။"
      : "For technical support: Visit our Support page or email support@digitalhubmyanmar.org with details. Our support team responds within 24 hours!"
  }
  
  // ========== LOCATION COVERAGE ==========
  if (lowerMessage.includes("village") || lowerMessage.includes("location") || lowerMessage.includes("where") ||
      lowerMessage.includes("serve") || lowerMessage.includes("coverage") || lowerMessage.includes("area") || lowerMessage.includes("မြို့")) {
    return lang === "mm"
      ? "ကျွန်ုပ်တို့သည် မြန်မာနိုင်ငံ အဝှမ်း ကျေးရွာ ၁၅၀+ တွင် ဝန်ဆောင်မှု ပေးနေပါသည်။ သင့်ဒေသ ရရှိနိုင်မှု စစ်ဆေးရန် Support စာမျက်နှာသို့ သွားပါ။"
      : "We serve 150+ rural villages across Myanmar in all 7 states. To check if we serve your area or request service in your village, visit our Support page!"
  }

  // ========== HOW IT WORKS ==========
  if (lowerMessage.includes("how") && (lowerMessage.includes("work") || lowerMessage.includes("use") || lowerMessage.includes("start"))) {
    return lang === "mm"
      ? "အသုံးပြုနည်း: (1) အကောင့် Sign Up လုပ်ပါ (2) Education သို့မဟုတ် Healthcare ရွေးချယ်ပါ (3) သင်လိုသော ဝန်ဆောင်မှု ရွေးပါ (4) စတင်ပါ! အရာအားလုံး အခမဲ့နှင့် လွယ်ကူပါသည်။"
      : "How it works: (1) Sign Up for free (2) Choose Education or Healthcare (3) Select your service (4) Start! Everything is free, easy to use, and available 24/7."
  }

  // ========== DEFAULT INTELLIGENT RESPONSE ==========
  const smartDefaults = {
    en: [
      "I'm here to assist you with Digital Hub Myanmar! I can help with:\n• Doctor consultations (we have 4 specialists)\n• Free education courses\n• Appointment booking\n• Healthcare advice\n\nWhat would you like to know?",
      "Welcome! I can help you with education, healthcare, doctor information, appointments, or general questions about our services. What are you interested in?",
      "Digital Hub Myanmar offers free education and quality healthcare to rural communities. Ask me about doctors, courses, appointments, or anything else!",
    ],
    mm: [
      "ကျွန်ုပ်သည် Digital Hub Myanmar ၏ AI အကူအညီ ဖြစ်ပါသည်။ ကျွန်ုပ်က ကူညီနိုင်သည်:\n• ဆရာဝန် တိုင်ပင်ဆွေးနွေးမှု (အထူးကု ၄ ဦး)\n• အခမဲ့ ပညာရေး သင်ခန်းစာများ\n• ရက်ချိန်း ယူခြင်း\n• ကျန်းမာရေး အကြံပေးချက်များ\n\nမည်သည့်အရာ သိလိုပါသလဲ?",
      "ကျွန်ုပ်တို့၏ ကျန်းမာရေး ဆရာဝန်များ၊ သင်ခန်းစာများ၊ ရက်ချိန်း သို့မဟုတ် အခြား ဝန်ဆောင်မှုများအကြောင်း မေးနိုင်ပါသည်။",
      "Digital Hub Myanmar သည် ကျေးလက်ဒေသများအတွက် အခမဲ့ ပညာရေးနှင့် ကျန်းမာရေး ဝန်ဆောင်မှု ပေးပါသည်။ ကျွန်ုပ်က ကူညီနိုင်ပါသည်!",
    ],
  }
  
  const defaults = lang === "mm" ? smartDefaults.mm : smartDefaults.en
  return defaults[Math.floor(Math.random() * defaults.length)]
}

export async function POST(req: NextRequest) {
  try {
    const { messages, lang } = await req.json()
    const userMessage = messages?.at(-1)?.content || ""
    
    // Simulate thinking time for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const text = generateIntelligentResponse(userMessage, lang || "en")
    
    return Response.json({ text })
  } catch (error) {
    console.error("AI API error:", error)
    return Response.json(
      { text: "Sorry, I encountered an error. Please try again." },
      { status: 500 }
    )
  }
}
