import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { Section, SectionHeading } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "CityTech Engineering B.V. — installatietechniek, elektrotechniek en nu ook energieopslag en laadinfra. Gevestigd in Aalsmeer.",
};

const team = [
  { name: "Omid Tehrani", role: "Algemeen Directeur" },
  { name: "Sherwin Tehrani", role: "Bedrijfsleider" },
  { name: "Jodie Otto", role: "Accountmanager" },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Over ons
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {siteConfig.legalName}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Gespecialiseerd in installatietechniek met een breed bereik aan
              installateurs — flexibiliteit is onze kracht. Nu breiden we uit
              met zakelijke energieopslag en laadinfrastructuur.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn>
            <h2 className="font-display text-xl font-bold text-ink">
              Waar staan wij voor?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Elektrotechnische bouwinstallaties met specialiteit in
              prefabriceren, installeren en onderhouden van LED-screens en
              automatiseringssystemen — business to business, van engineering
              tot uitvoering.
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display text-xl font-bold text-ink">
              Waar werken we naartoe?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Ideeën realiseren van ontwerp tot oplevering, met slimme en
              efficiënte oplossingen zodat snelheid gewaarborgd blijft — ook in
              de energietransitie.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="font-display text-xl font-bold text-ink">
              Hoe doen we dat?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Samenwerken met een gedreven netwerk van elektrotechnische
              professionals. Flexibel, snel schakelen en adequaat handelen.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Team"
          title="Behind the scenes"
          description="Passie voor het vak — en de bereidheid om die extra stap te zetten."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {team.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.05}>
              {/* TODO: vervang door eigen foto - teamportret */}
              <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-black/5">
                <div className="aspect-[4/3] bg-gradient-to-br from-surface to-brand-soft" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <blockquote className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-white p-6 text-center shadow-lg shadow-black/5 sm:p-8">
            <p className="text-base leading-relaxed text-ink italic sm:text-lg">
              “Onze kracht is de passie voor het vakgebied — hierdoor zetten we
              vaak net die extra stap en houden we flexibele tijden aan.”
            </p>
            <footer className="mt-4 text-sm font-medium text-muted">
              — Sherwin Tehrani, bedrijfsleider
            </footer>
          </blockquote>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeading eyebrow="Bereikbaarheid" title="Openingstijden & adres" />
        <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5">
            <h3 className="font-display font-bold text-ink">Openingstijden</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {siteConfig.openingHours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="text-ink">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              In overleg is ook 24/7 service mogelijk.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5">
            <h3 className="font-display font-bold text-ink">Bezoekadres</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
            <p className="mt-4 text-sm text-ink">
              {siteConfig.phone}
              <br />
              {siteConfig.email}
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Kennismaken?"
        description="Bel of plan een adviesgesprek — we horen graag waar we kunnen helpen."
        primaryHref="/contact"
        primaryLabel="Neem contact op"
      />
    </>
  );
}
