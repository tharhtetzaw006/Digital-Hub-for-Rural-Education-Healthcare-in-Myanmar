export async function POST(req: Request) {
  const form = await req.formData()
  if (!form.get("name") || !form.get("email") || !form.get("datetime"))
    return new Response("Missing fields", { status: 400 })
  return new Response("OK")
}
