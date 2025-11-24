"use client"

import { useLang } from "./language-provider"
import Link from "next/link"
import Image from "next/image"

function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t mt-12 bg-background">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/images/digital-hub-logo.png"
              alt="Digital Hub Myanmar Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <h3 className="font-bold text-lg text-black dark:text-white">{t("common.brand")}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{"Building equitable access to education and healthcare in rural Myanmar."}</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">{"Explore"}</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="/education">
                {t("common.nav.education")}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/healthcare">
                {t("common.nav.healthcare")}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/support">
                {t("common.nav.support")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">{"Social"}</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="hover:underline" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter/X
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">{t("common.newsletter.title")}</h4>
          <form className="flex gap-2" action="/api/newsletter" method="post">
            <input
              className="w-full rounded border px-3 py-2 text-sm"
              name="email"
              type="email"
              required
              placeholder={t("common.newsletter.placeholder")}
              aria-label="Email"
            />
            <button className="rounded bg-primary px-3 py-2 text-primary-foreground text-sm" type="submit">
              {t("common.newsletter.button")}
            </button>
          </form>
          <form className="space-y-2" action="/api/feedback" method="post">
            <label className="sr-only" htmlFor="feedback">
              {t("common.feedback.title")}
            </label>
            <textarea
              id="feedback"
              className="w-full rounded border p-3 text-sm"
              name="message"
              required
              placeholder={t("common.feedback.placeholder")}
            />
            <button className="rounded bg-secondary px-3 py-2 text-secondary-foreground text-sm" type="submit">
              {t("common.feedback.button")}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        {new Date().getFullYear()} · {t("common.brand")} · {t("common.copyright")}
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
