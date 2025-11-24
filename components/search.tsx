"use client"
import { useState, useMemo } from "react"
import type React from "react"

export default function SearchFilter<T>({
  items,
  keys,
  placeholder,
  render,
}: {
  items: T[]
  keys: (keyof T)[]
  placeholder: string
  render: (item: T) => React.ReactNode
}) {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const v = q.toLowerCase()
    return items.filter((it) =>
      keys.some((k) =>
        String(it[k] ?? "")
          .toLowerCase()
          .includes(v),
      ),
    )
  }, [items, keys, q])
  return (
    <div className="space-y-3">
      <input
        className="w-full rounded border px-3 py-2"
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((it, idx) => (
          <div key={idx}>{render(it)}</div>
        ))}
      </div>
    </div>
  )
}
