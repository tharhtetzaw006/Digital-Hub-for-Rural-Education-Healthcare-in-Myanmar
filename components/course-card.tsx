import Link from "next/link"
import type { Course } from "@/lib/data"

export default function CourseCard({ c }: { c: Course }) {
  return (
    <article className="rounded-lg border p-4 space-y-2">
      <h3 className="font-semibold">{c.title}</h3>
      <p className="text-sm text-muted-foreground">
        {c.subject} · {c.level}
      </p>
      <p className="text-sm">{c.description}</p>
      <div className="flex gap-2">
        <Link
          className="rounded bg-primary px-3 py-1 text-primary-foreground text-sm"
          href={`/education/syllabus/${c.id}`}
        >
          {"Syllabus"}
        </Link>
        <Link className="rounded border px-3 py-1 text-sm" href={`/education/courses/${c.id}`}>
          {"Details"}
        </Link>
        <a className="rounded border px-3 py-1 text-sm" href={`/materials/${c.id}.pdf`} download>
          {"Download Materials"}
        </a>
      </div>
    </article>
  )
}
