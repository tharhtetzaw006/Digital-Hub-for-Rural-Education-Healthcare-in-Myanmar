export async function POST(req: Request) {
  const form = await req.formData()
  const message = String(form.get("message") ?? "")
  if (!message) return new Response("Message required", { status: 400 })
  return new Response("OK")
}
