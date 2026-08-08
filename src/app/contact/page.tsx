import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met CityTech in Aalsmeer voor elektrotechniek, MW-batterijen of laadpalen. Tel. 036 700 9700.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Vraag een adviesgesprek aan
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Vertel waar u mee zit — elektrotechniek, energieopslag of laden.
            We reageren zo snel mogelijk op werkdagen.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-ink">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 text-brand" aria-hidden />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </li>
            <li>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-3 hover:text-brand"
              >
                <Phone className="size-5 text-brand" aria-hidden />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-3 hover:text-brand"
              >
                <Mail className="size-5 text-brand" aria-hidden />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5 sm:p-8">
            <Suspense fallback={<p className="text-sm text-muted">Formulier laden…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
