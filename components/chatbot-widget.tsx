"use client"
import { useState } from "react"
import { useLang } from "./language-provider"

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const { lang } = useLang()

  async function send() {
    if (!input.trim()) return
    const userMsg = { role: "user", content: input }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ messages: [...messages, userMsg], lang }),
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: "assistant", content: data.text }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-primary text-primary-foreground px-4 py-2 shadow-lg"
        >
          {"AI Chatbot"}
        </button>
      ) : (
        <div className="w-80 rounded-lg border bg-background shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b">
            <span className="font-medium">{"AI Assistant"}</span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              ✕
            </button>
          </div>
          <div className="flex-1 p-3 space-y-2 max-h-80 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block rounded px-2 py-1 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-muted-foreground">{"Thinking..."}</div>}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              className="flex-1 rounded border px-2 py-1 text-sm"
              placeholder="Type your message..."
            />
            <button onClick={send} className="rounded bg-primary px-3 py-1 text-primary-foreground text-sm">
              {"Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
