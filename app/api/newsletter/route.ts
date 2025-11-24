export async function POST(req: Request) {
  const form = await req.formData()
  const email = String(form.get("email") ?? "")
  if (!email) return new Response("Email required", { status: 400 })
  return new Response("OK")
}
