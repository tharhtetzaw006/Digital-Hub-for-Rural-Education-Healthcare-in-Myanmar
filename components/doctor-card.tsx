import type { Doctor } from "@/lib/data"
import Link from "next/link"

export default function DoctorCard({ d }: { d: Doctor }) {
  return (
    <article className="rounded-lg border p-4 space-y-2">
      <h3 className="font-semibold">{d.name}</h3>
      <p className="text-sm text-muted-foreground">
        {d.specialty} · {d.location}
      </p>
      <p className="text-xs text-muted-foreground">
        {"Languages"}: {d.languages.join(", ")}
      </p>
      <p className="text-xs">
        {"Rating"}: {d.rating} ⭐
      </p>
      <div className="flex gap-2">
        <Link
          className="rounded bg-primary px-3 py-1 text-primary-foreground text-sm"
          href={`/healthcare/appointments?doctor=${d.id}`}
        >
          {"Book"}
        </Link>
        <Link className="rounded border px-3 py-1 text-sm" href={`/healthcare/consultations?doctor=${d.id}`}>
          {"Consult"}
        </Link>
      </div>
    </article>
  )
}
