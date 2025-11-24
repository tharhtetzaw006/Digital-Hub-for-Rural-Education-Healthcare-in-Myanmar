"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader, User, Stethoscope, Paperclip, X, Image as ImageIcon } from "lucide-react"
import { useLang } from "@/components/language-provider"

interface ChatMessage {
  id: string
  role: "user" | "doctor"
  message: string
  timestamp: Date
  doctorName?: string
  attachments?: { name: string; type: string; url: string }[]
}

// Enhanced doctor responses with Myanmar language support
const doctorResponses: { [key: string]: { en: string[]; mm: string[] } } = {
  stomach: {
    en: [
      "Stomach pain can be caused by several conditions. Try eating light meals, avoid spicy foods, and stay hydrated. If pain continues for more than 24 hours or worsens, take an antacid and visit a clinic soon. Avoid dairy and fatty foods for now.",
      "Indigestion is common. Try ginger tea, light soup, or crackers. Rest your stomach by eating small, frequent meals. If accompanied by vomiting or fever, seek immediate care.",
    ],
    mm: [
      "ဗိုက်နာခြင်းသည် အကြောင်းရင်းများစွာကြောင့် ဖြစ်နိုင်ပါသည်။ ပေါ့ပါးသော အစားအစာများ စားပါ၊ အစပ်များသော အစားအစာများကို ရှောင်ကြဉ်ပါ၊ ရေများများ သောက်ပါ။ နာကျင်မှု ၂၄ နာရီထက် ကြာရှည်ပါက သို့မဟုတ် ပိုဆိုးလာပါက antacid သောက်ပြီး ဆေးခန်းသွားပါ။",
      "အစာမကြေခြင်းသည် ဖြစ်လေ့ရှိပါသည်။ ဂျင်းလက်ဖက်ရည်၊ ပေါ့ပါးသော စွပ်ပြုတ် သို့မဟုတ် ဘိစကစ်များ စားကြည့်ပါ။ သင့်ဗိုက်ကို အနားပေးရန် အသေး သေးအစားများကို မကြာခဏ စားပါ။ အန်ခြင်း သို့မဟုတ် အဖျားနှင့် အတူပါပါက ချက်ချင်း ကုသမှု ခံယူပါ။",
    ],
  },
  headache: {
    en: [
      "For a headache, rest in a quiet dark room and drink plenty of water. Take paracetamol (500mg) if needed. If persistent or severe, especially with vision changes, see a doctor immediately.",
      "Migraines can be triggered by stress or lack of sleep. Try relaxation techniques, cold compress on your forehead, and adequate rest. Reduce screen time and maintain regular sleep schedule.",
    ],
    mm: [
      "ခေါင်းကိုက်ခြင်းအတွက် တိတ်ဆိတ်ပြီး မှောင်မိုက်သော အခန်းတွင် အနားယူပါ။ ရေများများ သောက်ပါ။ လိုအပ်ပါက paracetamol (500mg) သောက်ပါ။ ဆက်လက် ခံစားနေရပါက သို့မဟုတ် ပြင်းထန်ပါက အထူးသဖြင့် မျက်စိ ပြောင်းလဲမှုများနှင့်အတူ ဖြစ်ပါက ဆရာဝန်ကို ချက်ချင်း သွားပါ။",
      "ခေါင်းဓာတ်သည် စိတ်ဖိစီးမှု သို့မဟုတ် အိပ်စက် မလုံလောက်ခြင်းကြောင့် ဖြစ်နိုင်ပါသည်။ အနားယူနည်းများ၊ နဖူးပေါ် အအေးခံခြင်းနှင့် လုံလောက်သော အနားယူခြင်းကို လုပ်ပါ။ မျက်နှာပြင် ကြည့်ချိန်ကို လျှော့ပါ။",
    ],
  },
  fever: {
    en: [
      "Fever above 38°C needs attention. Take paracetamol or ibuprofen every 4-6 hours. Drink plenty of water and fluids. If fever persists over 3 days or reaches 40°C, visit a clinic immediately.",
      "Monitor your temperature regularly. Stay hydrated, rest adequately, and wear light clothing. Most fevers resolve in 3-5 days. Seek urgent care if accompanied by difficulty breathing or severe headache.",
    ],
    mm: [
      "အပူချိန် 38°C အထက် ဖြစ်ပါက ဂရုစိုက်ရန် လိုအပ်ပါသည်။ paracetamol သို့မဟုတ် ibuprofen ကို 4-6 နာရီ တစ်ကြိမ် သောက်ပါ။ ရေနှင့် အရည်များ များများ သောက်ပါ။ အဖျားက 3 ရက်ကျော် ဆက်လက်ရှိနေပါက သို့မဟုတ် 40°C ရောက်ပါက ဆေးခန်းသို့ ချက်ချင်း သွားပါ။",
      "သင့်အပူချိန်ကို ပုံမှန် စောင့်ကြည့်ပါ။ ရေဓာတ် ထိန်းပါ၊ လုံလောက်စွာ အနားယူပါ၊ ပေါ့ပါးသော အဝတ်များ ဝတ်ပါ။ အဖျားအများစုသည် 3-5 ရက်အတွင်း ပျောက်ကင်းပါသည်။ အသက်ရှူရခက်ခဲခြင်း သို့မဟုတ် ပြင်းထန်သော ခေါင်းကိုက်ခြင်းနှင့် အတူပါပါက အရေးပေါ် ကုသမှု ခံယူပါ။",
    ],
  },
  cough: {
    en: [
      "For a dry cough, drink honey mixed with warm water. If productive cough, ensure adequate fluids. Avoid irritants like smoke. If lasting more than 2 weeks or bringing up blood, see a doctor immediately.",
      "Coughs often accompany colds and usually improve within a week. Rest, hydration, and honey help soothe your throat. Use a humidifier if available. Seek care if cough is severe or limiting your daily activities.",
    ],
    mm: [
      "ခြောက်သွေ့သော ချောင်းဆိုးအတွက် ပျားရည်နှင့် ရေနွေးနွေးကို ရောပြီး သောက်ပါ။ ချောင်းဆိုးရင်း အချွဲထွက်ပါက လုံလောက်သော အရည်များ သောက်ပါ။ မီးခိုးကဲ့သို့ ယားယံစေသော အရာများကို ရှောင်ကြဉ်ပါ။ 2 ပတ်ထက် ကြာပါက သို့မဟုတ် သွေး ထွက်ပါက ဆရာဝန်ကို ချက်ချင်း သွားပါ။",
      "ချောင်းဆိုးသည် အအေးမိခြင်းနှင့် မကြာခဏ လိုက်ပါလာပြီး တစ်ပတ်အတွင်း ပုံမှန် သက်သာပါသည်။ အနားယူခြင်း၊ ရေဓာတ်နှင့် ပျားရည်သည် သင့်လည်ချောင်းကို သက်သာစေပါသည်။ ရရှိနိုင်ပါက ရေငွေ့ထိုးစက် အသုံးပြုပါ။",
    ],
  },
  cold: {
    en: [
      "Common cold symptoms usually resolve in 7-10 days. Stay hydrated, get plenty of rest, and use saline nasal drops. Vitamin C and zinc supplements may help. Avoid antibiotics as they don't work for viral infections.",
      "Get adequate sleep and maintain good nutrition. Chicken soup can help with symptoms. Most cold symptoms peak around day 3-4 then improve. See a doctor if high fever (>39°C) or difficulty breathing develops.",
    ],
    mm: [
      "အအေးမိခြင်း လက္ခဏာများသည် ပုံမှန် 7-10 ရက်အတွင်း ပျောက်ကင်းပါသည်။ ရေဓာတ် ထိန်းပါ၊ အနားများများ ယူပါ၊ ဆားရည် နှာခေါင်းစိမ့်ဆေး အသုံးပြုပါ။ ဗီတာမင် C နှင့် သွပ် ဖြည့်စွက်စာများက အကူအညီ ပေးနိုင်ပါသည်။ ဗိုင်းရပ်စ် ကူးစက်မှုအတွက် antibiotics များ အလုပ်မလုပ်သောကြောင့် ရှောင်ကြဉ်ပါ။",
      "လုံလောက်သော အိပ်စက်ခြင်းနှင့် ကောင်းမွန်သော အာဟာရ ထိန်းသိမ်းပါ။ ကြက်ဟင်းချို သည် လက္ခဏာများကို သက်သာစေနိုင်ပါသည်။ အအေးမိခြင်း လက္ခဏာအများစုသည် 3-4 ရက်တွင် အမြင့်ဆုံးရောက်ပြီး တိုးတက်လာပါသည်။",
    ],
  },
  pain: {
    en: [
      "For general pain, first identify the location and severity. Apply ice for acute injuries (first 48 hours), then heat for muscle pain. Over-the-counter pain relievers like paracetamol can help. If pain is severe, persistent, or accompanied by other symptoms, consult a doctor.",
      "Pain management depends on the cause. For joint pain, gentle exercise and maintaining healthy weight helps. For muscle pain, rest and gentle stretching. If pain affects your daily life or worsens, medical evaluation is necessary.",
    ],
    mm: [
      "ယေဘုယျ နာကျင်မှုအတွက် ပထမဦးစွာ တည်နေရာနှင့် ပြင်းထန်မှုကို ခွဲခြားသတ်မှတ်ပါ။ စူးရှသော ဒဏ်ရာများအတွက် (ပထမ 48 နာရီ) ရေခဲ အသုံးပြုပါ၊ ထို့နောက် ကြွက်သား နာကျင်မှုအတွက် အပူ အသုံးပြုပါ။ ဆိုင်ခံတာမဲ့ဝယ်လို့ရသော paracetamol ကဲ့သို့ နာကျင်မှု သက်သာဆေးများက အကူအညီ ပေးနိုင်ပါသည်။",
      "နာကျင်မှု စီမံခန့်ခွဲမှုသည် အကြောင်းရင်းပေါ် မူတည်ပါသည်။ အဆစ်နာကျင်မှုအတွက် နူးညံ့သော လေ့ကျင့်ခန်းနှင့် ကျန်းမာသော ကိုယ်အလေးချိန် ထိန်းသိမ်းခြင်းက အကူအညီ ပေးပါသည်။ ကြွက်သား နာကျင်မှုအတွက် အနားယူခြင်းနှင့် နူးညံ့စွာ ဆန့်ခြင်း လုပ်ပါ။",
    ],
  },
  diarrhea: {
    en: [
      "For diarrhea, stay well hydrated with oral rehydration solution (ORS) or clean water. Avoid dairy, fatty, and spicy foods. Eat bland foods like rice, bananas, and toast. If diarrhea lasts more than 3 days, contains blood, or causes severe dehydration, seek medical care immediately.",
      "Diarrhea often resolves on its own within 2-3 days. Drink plenty of fluids to prevent dehydration. Probiotics and zinc supplements may help. Watch for signs of dehydration: decreased urination, dry mouth, dizziness. Children and elderly are at higher risk.",
    ],
    mm: [
      "ဝမ်းလျှောခြင်းအတွက် ORS သို့မဟုတ် သန့်ရှင်းသော ရေဖြင့် ရေဓာတ် ကောင်းစွာ ထိန်းပါ။ နို့ထွက်ပစ္စည်း၊ ဆီကြော်နှင့် အစပ်များသော အစားအစာများကို ရှောင်ကြဉ်ပါ။ ထမင်း၊ ငှက်ပျောသီး၊ မုန့်ကင်ကဲ့သို့ ပေါ့ပါးသော အစားအစာများ စားပါ။ ဝမ်းလျှော 3 ရက်ထက် ကြာပါက၊ သွေးပါပါက သို့မဟုတ် ပြင်းထန်သော ရေဓာတ် ခမ်းခြောက်မှု ဖြစ်ပါက ဆေးကု ကုသမှု ချက်ချင်း ခံယူပါ။",
      "ဝမ်းလျှောခြင်းသည် မကြာခဏ 2-3 ရက်အတွင်း အလိုအလျောက် ပျောက်ကင်းပါသည်။ ရေဓာတ် ခမ်းခြောက်ခြင်းကို ကာကွယ်ရန် အရည်များ များများ သောက်ပါ။ ရေဓာတ် ခမ်းခြောက်မှု လက္ခဏာများကို စောင့်ကြည့်ပါ - ဆီးနည်းခြင်း၊ ပါးစပ် ခြောက်ခြင်း၊ မူးဝေခြင်း။",
    ],
  },
  nausea: {
    en: [
      "For nausea, try resting and sipping small amounts of ginger tea or clear broths. Avoid strong smells and greasy foods. Eat small, frequent meals. If nausea persists for more than 24 hours or is accompanied by vomiting, dehydration, or fever, please contact us immediately.",
      "Nausea can be caused by motion, food, or medical conditions. Try lying down in a cool, quiet place. Avoid sudden movements. Drink water gradually in small sips. If you also have severe headache, dizziness, or abdominal pain, seek urgent medical attention.",
    ],
    mm: [
      "အန်သည့်အခြင်းအတွက် အနားယူပြီး ဂျင်းလက်ဖက်ရည် သို့မဟုတ်맑은ရေချိုး တစ်ခြင် ကျဉ်းကျဉ်း သောက်ကြည့်ပါ။ အသsmell ပြင်းတစ် အရာများနှင့် ဆီဆီတဲ့ အစားအစာများ ရှောင်ကြဉ်ပါ။ သေးငယ်ပြီး မကြာခဏ အစားအစာများ စားပါ။ အန်သည့်အခြင်း 24 နာရီကျော် ဆက်လက်ရှိပါက သို့မဟုတ် အန်ခြင်း၊ ရေဓာတ် ခမ်းခြောက်မှု သို့မဟုတ် အဖျားနှင့် အတူပါပါက ချက်ချင်း ဆက်သွယ်ပါ။",
      "အန်သည့်အခြင်းသည် လှုပ်ရှားမှု၊ အစားအစာ သို့မဟုတ် ဆေးဝါးဆိုင်ရာ အခြေအနေများကြောင့် ဖြစ်နိုင်ပါသည်။ အအေးခံသည့် တိတ်ဆိတ်သော နေရာတွင် အနားယူကြည့်ပါ။ 突然 လှုပ်ရှားမှုများ ရှောင်ကြဉ်ပါ။ ရေကို တဖြည်း တဖြည်း သေးငယ်စွာ သောက်ပါ။",
    ],
  },
  vomiting: {
    en: [
      "If vomiting, avoid solid foods for a few hours and focus on staying hydrated with small sips of water or electrolyte solutions. Once settled, eat bland foods like crackers or broth. If vomiting lasts more than a few hours, contains blood, or is accompanied by severe abdominal pain, seek emergency care.",
      "Vomiting can lead to dehydration quickly. Avoid milk, fatty, and spicy foods. Rest and allow your stomach to settle. Ginger tea may help settle your stomach. Monitor your fluid intake and watch for signs of dehydration like dizziness or decreased urination.",
    ],
    mm: [
      "အန်ခြင်းဖြစ်ပါက အနည်းငယ် နာရီများအတွင်း အစိုင်အခဲ အစားအစာများ ရှောင်ကြဉ်ပြီး ရေခရမ သို့မဟုတ် အီလက်ထရောလိုက် ဖြေရှင်းချက်ဖြင့် ရေဓာတ် ထိန်းခြင်းအပေါ် အာရုံစိုက်ပါ။ တည်ငြိမ်လာပါက ဘိစကစ် သို့မဟုတ် ရည်ချိုးကဲ့သို့ ပေါ့ပါးသော အစားအစာများ စားပါ။ အန်ခြင်း အနည်းငယ် နာရီများထက် ကြာရှည်ပါက၊ သွေးပါပါက သို့မဟုတ် ပြင်းထန်သော ဗိုက်နာခြင်းနှင့် အတူပါပါက အရေးပေါ် ကုသမှု ခံယူပါ။",
      "အန်ခြင်းသည် မြန်မြန် ရေဓာတ် ခမ်းခြောက်မှု ဖြစ်စေနိုင်ပါသည်။ နို့ခမ်း၊ အဆီ၊ နှင့် အပြစ်များသော အစားအစာများကို ရှောင်ကြဉ်ပါ။ အနားယူပြီး သင့်ဗိုက်ကို တည်ငြိမ်သွားစေပါ။",
    ],
  },
  bodyache: {
    en: [
      "For general body aches, rest is important. Apply warm compress to affected areas. Take paracetamol or ibuprofen as directed. Stay hydrated and avoid strenuous activities. If body aches persist for more than a week or are accompanied by fever, cough, or other symptoms, consult a doctor.",
      "Body aches often accompany flu or viral infections. Get plenty of sleep, drink warm fluids like chicken broth, and use heating pads for comfort. Mild exercises like gentle stretching may help once you start feeling better.",
    ],
    mm: [
      "ကိုယ်လုံးနာခြင်းအတွက် အနားယူခြင်းသည် အရေးကြီးပါသည်။ ထိခိုက်ခံရသည့် နေရာများတွင် နွေးထွေးသော ဖိအားအုပ်စည်း အသုံးပြုပါ။ Paracetamol သို့မဟုတ် ibuprofen ကို တစ်ဆင့်အဆင့် သောက်ပါ။ ရေဓာတ် ထိန်းပါ။ ကိုယ်လုံးနာခြင်း တစ်ပတ်ထက်ကြာပါက သို့မဟုတ် အဖျား၊ ချောင်းဆိုး သို့မဟုတ် အခြား လက္ခဏာများ ပါပါက ဆရာဝန်ထံ စမ်းသပ်ပါ။",
      "ကိုယ်လုံးနာခြင်းသည် အများအားဖြင့် ဖလူးဗိုင်းရပ်စ် သို့မဟုတ် ဗိုင်းရပ်စ်ကူးစက်မှုများနှင့် လိုက်ပါလာပါသည်။ အများစုအိပ်စက်ခြင်း၊ ကြက်ဟင်းချိုကဲ့သို့ နွေးထွေးသော အရည်များ သောက်ခြင်း။",
    ],
  },
  rash: {
    en: [
      "For skin rash, keep the area clean and dry. Avoid scratching or irritating the skin. Apply gentle moisturizer or calamine lotion. Wear loose, breathable clothing. If rash is severe, spreading, itchy, or accompanied by fever or difficulty breathing, seek medical attention immediately.",
      "Rashes can be caused by allergies, infections, or irritants. Identify and avoid the trigger if known. Use mild soap for bathing. Avoid hot water which can worsen skin conditions. If rash doesn't improve in 3-5 days, shows signs of infection, contact a doctor.",
    ],
    mm: [
      "အရေပြားရောင်ရမ်းခြင်းအတွက် နေရာကို သန့်ရှင်းပြီး ခြောက်စေပါ။ ခြစ်ခြင်း သို့မဟုတ် အရေပြားအား အနှောက်အယှက်ပြုခြင်းများ ရှောင်ကြဉ်ပါ။ နူးညံ့သော အဆီအုံ သို့မဟုတ် ကယ်လမိုင် လိုးရ်ရန်း အသုံးပြုပါ။ ပွင့်လင်း၊ လေဝင်လေထွက်ရှိသော အဝတ်များ ဝတ်ပါ။ အရေပြား ရောင်ရမ်းခြင်း ပြင်းထန်ပါက၊ ပြန့်ပြူးလာပါက၊ နေ၍ရှိပါက သို့မဟုတ် အဖျား သို့မဟုတ် အသက်ရှူရခက်ခဲခြင်းနှင့် အတူပါပါက ချက်ချင်း ဆေးကု အကူအညီ ခံယူပါ။",
      "အရေပြားရောင်ရမ်းခြင်းသည် ဒီအလার်ဂျီ၊ ကူးစက်မှု သို့မဟုတ် အန္တရာယ်ဖြစ်စေသော အရာများကြောင့် ဖြစ်နိုင်ပါသည်။ အကြောင်းအရင်းကို သိလျှင် သတ်မှတ်ပြီး ရှောင်ကြဉ်ပါ။",
    ],
  },
  default: {
    en: [
      "Thank you for your question. Based on your symptoms, I recommend: 1) Get adequate rest (7-8 hours sleep), 2) Stay well hydrated (drink plenty of water), 3) Eat nutritious, light meals, 4) Monitor your symptoms closely. If symptoms persist for more than 3 days, worsen, or you develop new concerning symptoms, please visit a healthcare facility immediately.",
      "I understand your health concern. Every individual is different, so responses to treatment may vary. Please: 1) Keep track of your symptoms and any changes, 2) Maintain good hygiene, 3) Avoid self-medication with antibiotics, 4) Seek immediate medical attention if you experience severe symptoms like difficulty breathing, chest pain, or high fever. For any urgent concerns, don't hesitate to visit the nearest clinic or call our emergency hotline.",
    ],
    mm: [
      "သင့်မေးခွန်းအတွက် ကျေးဇူးတင်ပါသည်။ သင့် လက္ခဏာများအပေါ် အခြေခံပြီး ကျွန်ုပ် အကြံပြုပါသည် - (1) လုံလောက်သော အနားယူခြင်း (7-8 နာရီ အိပ်စက်ခြင်း)၊ (2) ရေဓာတ် ကောင်းစွာ ထိန်းခြင်း (ရေများများ သောက်ခြင်း)၊ (3) အာဟာရ ပြည့်ဝပြီး ပေါ့ပါးသော အစားအစာများ စားခြင်း၊ (4) သင့် လက္ခဏာများကို နီးကပ်စွာ စောင့်ကြည့်ခြင်း။ လက္ခဏာများ 3 ရက်ထက် ဆက်လက် ရှိနေပါက၊ ပိုဆိုးလာပါက သို့မဟုတ် စိုးရိမ်ဖွယ် လက္ခဏာအသစ်များ ဖြစ်ပေါ်လာပါက ကျန်းမာရေး အထောက်အကူ စင်တာသို့ ချက်ချင်း သွားပါ။",
      "သင့် ကျန်းမာရေး စိုးရိမ်ပူပန်မှုကို နားလည်ပါသည်။ လူတိုင်း မတူညီသောကြောင့် ကုသမှုအပေါ် တုံ့ပြန်မှုများ ကွဲပြားနိုင်ပါသည်။ ကျေးဇူးပြု၍ - (1) သင့် လက္ခဏာများနှင့် မည်သည့် ပြောင်းလဲမှုများကိုမဆို မှတ်တမ်း ထားပါ၊ (2) ကောင်းမွန်သော တစ်ကိုယ်ရေ သန့်ရှင်းမှု ထိန်းသိမ်းပါ၊ (3) antibiotics များဖြင့် ကိုယ်တိုင် ကုသခြင်းကို ရှောင်ကြဉ်ပါ၊ (4) အသက်ရှူရခက်ခဲခြင်း၊ ရင်ဘတ်နာခြင်း သို့မဟုတ် မြင့်မားသော အဖျားကဲ့သို့ ပြင်းထန်သော လက္ခဏာများ ခံစားနေရပါက ချက်ချင်း ဆေးကု ကုသမှု ခံယူပါ။",
    ],
  },
}

export function DoctorChatInterface() {
  const { lang } = useLang()
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "doctor",
      message:
        lang === "mm"
          ? "အစ၊ ကျွန်ုပ်သည် နေဖူးမြို့ရုံကွန်ယူနစ်ရဲ့ ဆရာဝန်ဖြစ်သည်။ ယခုတစ်ဒိုင်း သင့်ကို မည်သည့်အရာ ကူညီပေးနိုင်သည်နည်း?"
          : "Hello! I am Dr. Aung, a virtual healthcare provider. How can I help you today? Please describe your symptoms or concerns.",
      timestamp: new Date(),
      doctorName: "Dr. Aung Win",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const generateDoctorResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    for (const [key, responses] of Object.entries(doctorResponses)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        const langResponses = responses[lang as 'en' | 'mm']
        return langResponses[Math.floor(Math.random() * langResponses.length)]
      }
    }

    const defaultResponses = doctorResponses.default[lang as 'en' | 'mm']
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!input.trim() && attachments.length === 0) return

    setIsLoading(true)
    let attachmentData: { name: string; type: string; url: string }[] = []

    // Upload files to server if there are any attachments
    if (attachments.length > 0) {
      try {
        const formData = new FormData()
        attachments.forEach(file => {
          formData.append('files', file)
        })

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        const result = await response.json()

        if (response.ok && result.success) {
          attachmentData = result.files
        } else {
          alert(lang === 'mm' 
            ? `ဖိုင်တင်ရာတွင် အမှား: ${result.error}` 
            : `Upload error: ${result.error}`)
          setIsLoading(false)
          return
        }
      } catch (error) {
        console.error('Upload failed:', error)
        alert(lang === 'mm' 
          ? 'ဖိုင်များ တင်၍မရပါ။ ကျေးဇူးပြု၍ ထပ်စမ်းကြည့်ပါ။' 
          : 'Failed to upload files. Please try again.')
        setIsLoading(false)
        return
      }
    }

    const userMessage: ChatMessage = {
      id: String(messages.length + 1),
      role: "user",
      message: input || (lang === 'mm' ? 'ဓာတ်ပုံ/ဖိုင် ပေးပို့ထားပါသည်' : 'Sent attachments'),
      timestamp: new Date(),
      attachments: attachmentData.length > 0 ? attachmentData : undefined,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setAttachments([])

    // Simulate doctor thinking/typing
    setTimeout(() => {
      const doctorMessage: ChatMessage = {
        id: String(messages.length + 2),
        role: "doctor",
        message: generateDoctorResponse(input),
        timestamp: new Date(),
        doctorName: "Dr. Aung Win",
      }
      setMessages((prev) => [...prev, doctorMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files).filter(file => {
        // Limit to 5MB per file
        if (file.size > 5 * 1024 * 1024) {
          alert(`File ${file.name} is too large. Maximum size is 5MB.`)
          return false
        }
        // Allow images and PDFs
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf']
        if (!allowedTypes.includes(file.type)) {
          alert(`File ${file.name} is not supported. Please upload images or PDFs only.`)
          return false
        }
        return true
      })
      setAttachments(prev => [...prev, ...newFiles])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index))
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="h-full flex flex-col shadow-xl">
      {/* Chat Header */}
      <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{lang === "mm" ? "ဆရာဝန်အတုအခွင့်" : "Virtual Doctor"}</CardTitle>
            <p className="text-xs text-muted-foreground">{lang === "mm" ? "ကျွန်ုပ်သည် ၂၄/၇ ရှိသည်" : "Available 24/7"}</p>
          </div>
        </div>
      </CardHeader>

      {/* Messages Area */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            {message.role === "doctor" && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-primary" />
              </div>
            )}

            <div
              className={`max-w-xs lg:max-w-md rounded-lg px-4 py-3 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted text-foreground rounded-bl-none"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.message}</p>
              
              {/* Display attachments */}
              {message.attachments && message.attachments.length > 0 && (
                <div className="mt-2 space-y-2">
                  {message.attachments.map((attachment, idx) => (
                    <div key={idx}>
                      {attachment.type.startsWith('image/') ? (
                        <img 
                          src={attachment.url} 
                          alt={attachment.name}
                          className="max-w-full rounded-lg max-h-48 object-cover"
                        />
                      ) : (
                        <a 
                          href={attachment.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs underline"
                        >
                          <ImageIcon className="w-3 h-3" />
                          {attachment.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              <p
                className={`text-xs mt-1 ${message.role === "user" ? "text-primary-foreground/60" : "text-muted-foreground"}`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                <User className="w-4 h-4 text-secondary" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-muted rounded-lg rounded-bl-none px-4 py-3 flex items-center gap-2">
              <Loader className="w-4 h-4 animate-spin text-primary" />
              <span className="text-sm text-muted-foreground">
                {lang === "mm" ? "စဉ်ဆက်လက်ဖြေဆိုနေသည်..." : "Doctor is responding..."}
              </span>
            </div>
          </div>
        )}

        <div ref={scrollRef} />
      </CardContent>

      {/* Input Area */}
      <div className="border-t border-border p-4 bg-card/50 backdrop-blur-sm">
        {/* Attachment Preview */}
        {attachments.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {attachments.map((file, index) => (
              <div key={index} className="relative inline-flex items-center gap-2 bg-secondary/20 rounded-lg px-3 py-2 pr-8">
                {file.type.startsWith('image/') ? (
                  <ImageIcon className="w-4 h-4 text-primary" />
                ) : (
                  <span className="text-xs font-semibold text-primary">PDF</span>
                )}
                <span className="text-xs text-foreground truncate max-w-[100px]">{file.name}</span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-destructive/20 rounded-full p-1"
                >
                  <X className="w-3 h-3 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            title={lang === 'mm' ? 'ဖိုင်များ တွဲပါ' : 'Attach files'}
          >
            <Paperclip className="w-4 h-4" />
          </Button>
          <Input
            placeholder={lang === "mm" ? "သင့်လက္ခဏာများကို ရေးသားပါ..." : "Describe your symptoms here..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={isLoading || (!input.trim() && attachments.length === 0)} size="lg" className="px-6">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {lang === "mm"
            ? "မှတ်ချက်: ဤစနစ်သည် အကြေးအကျေးမှုမျိုးသည် သုံးသပ်မှုမဟုတ်ပါ။ ဆရာ အစည်းအမျိုးအစုက ရှေ့နှင့် ကြီးမားသောလူ ရှိမည်ဆိုပြီး တည်ဆောက်ထားသည်။"
            : "Note: This is a simulation for educational purposes only. For serious health concerns, please consult a real healthcare professional."}
        </p>
      </div>
    </Card>
  )
}
