export async function GET() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Digital Hub Myanmar//EN",
    "BEGIN:VEVENT",
    "UID:appointment-1@digitalhub.mm",
    "DTSTAMP:20250101T080000Z",
    "DTSTART:20250102T090000Z",
    "DTEND:20250102T093000Z",
    "SUMMARY:Telemedicine Appointment",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")
  return new Response(ics, { headers: { "Content-Type": "text/calendar" } })
}
