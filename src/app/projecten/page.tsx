import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { Section, SectionHeading } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Projecten & referenties",
  description:
    "Selectie van CityTech-projecten: o.a. GVB, RET, Shell, Esso en meer. Showcase wordt uitgebreid met nieuwe cases.",
};

const projects = [
  { title: "Reclame Objecten", client: "GVB" },
  { title: "LED Wall", client: "Esso" },
  { title: "Forecourt 32'", client: "Shell" },
  { title: "Wachtvoorzieningen", client: "GVB" },
  { title: "Afroep & reclame", client: "RET" },
  { title: "Reclame", client: "Lijncom.be" },
  { title: "CityVastgoed", client: "Vastgoed" },
  { title: "Infra uitbreiding F35", client: "Koninklijke Luchtmacht" },
  { title: "Shell Frankrijk", client: "Shell" },
  { title: "Reclame Objecten", client: "RET" },
];

const energyVisuals = [
  {
    src: "/images/energy/bess-landscape.jpg",
    alt: "Batterijcontainers in een energiepark",
    label: "Energieopslag",
  },
  {
    src: "/images/energy/solar-wind-farm.jpg",
    alt: "Zonnepark en windturbines",
    label: "Opwek & opslag",
  },
  {
    src: "/images/energy/solar-workers.jpg",
    alt: "Installatieteam op zonnedak",
    label: "Installatie",
  },
];

export default function ProjectenPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/energy/solar-wind-farm.jpg"
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Projecten
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Referenties die voor zich spreken
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Een selectie uit eerdere DOOH- en installatieprojecten. Foto’s en
              nieuwe BESS-/laadcases volgen.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Richting"
          title="De energietransitie in beeld"
          description="Sfeerbeelden van opwek, opslag en installatie — tot de eerste eigen BESS-cases online staan."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {energyVisuals.map((visual, i) => (
            <FadeIn key={visual.src} delay={i * 0.05}>
              <figure className="overflow-hidden rounded-2xl shadow-lg shadow-black/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="border border-t-0 border-border bg-white px-4 py-3 text-sm font-medium text-ink">
                  {visual.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Showcase"
          title="Uitgelichte projecten"
          description="Placeholder-kaarten — vervang door projectfoto’s en casebeschrijvingen."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={`${project.client}-${project.title}`} delay={i * 0.03}>
              {/* TODO: vervang door eigen foto - projectbeeld {project.title} / {project.client} */}
              <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-black/5">
                <div
                  className="aspect-[16/10] bg-gradient-to-br from-ink/90 via-brand-dark to-brand"
                  aria-hidden
                />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {project.client}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-bold text-ink">
                    {project.title}
                  </h2>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection
        title="Uw project bespreken?"
        description="Of het nu elektrotechniek, opslag of laden is — we denken graag mee."
        primaryHref="/contact"
        primaryLabel="Neem contact op"
      />
    </>
  );
}
