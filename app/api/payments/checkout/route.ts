export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return new Response(JSON.stringify({ error: "Stripe not configured" }), { status: 400 })
  }
  // Normally: create Checkout Session and return url
  return new Response(JSON.stringify({ url: "#" }))
}
