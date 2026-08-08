import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Car,
  Gauge,
  Users,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Section, SectionHeading } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Zakelijke laadpalen & laadpleinen",
  description:
    "Laadoplossingen voor bedrijven: AC-laden, snellaadpleinen en slim lastmanagement — optioneel gekoppeld aan batterijopslag.",
};

const solutions = [
  {
    icon: Users,
    title: "AC-laadpalen",
    text: "Voor personeel en bezoekers: comfortabel laden tijdens werktijd zonder onnodige nethype.",
  },
  {
    icon: Car,
    title: "Snellaadpleinen (fleet)",
    text: "Hoger vermogen voor bedrijfswagens en vloot — gepland rond routes en beschikbaarheid.",
  },
  {
    icon: Gauge,
    title: "Slim laden / lastmanagement",
    text: "Koppeling met uw gecontracteerd vermogen zodat u niet boven de limiet uitkomt.",
  },
  {
    icon: Building2,
    title: "Thuisladen voor leaserijders",
    text: "Waar gewenst ook thuislaadpunten voor medewerkers met leaseauto’s — afgestemd op beleid en verrekening.",
  },
];

export default function LaadpalenPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Laadpalen
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Zakelijke laadoplossingen voor bedrijven
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Van enkele laadpunten tot een volledig laadplein: CityTech
              ontwerpt en installeert laadinfra die past bij uw aansluiting,
              beleid en groei.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact?interesse=laadpalen" size="lg">
                Laadscan aanvragen
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Oplossingen"
          title="Welk type past bij u?"
          description="We kijken naar gebruikers, piekvermogen en de limieten van uw netaansluiting."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {solutions.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5 sm:p-8">
                <item.icon className="size-7 text-brand" aria-hidden />
                <h2 className="mt-4 font-display text-xl font-bold text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-brand">
              <BatteryCharging className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Laadpalen + batterijopslag = slimmer laden
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Een MW-batterij kan een laadplein ondersteunen met peak shaving:
              meerdere voertuigen laden met hoog vermogen, zonder uw hele
              netaansluiting te verzwaren. Zo groeit uw laadinfra mee — binnen
              de grenzen van het net.
            </p>
            <Link
              href="/mw-batterijen"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-soft"
            >
              Meer over MW-batterijen
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
          {/* TODO: vervang door eigen foto - laadplein / laadpalen in gebruik */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <ul className="space-y-4 text-sm text-white/80 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-brand" />
                  Minder piekbelasting op de aansluiting
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-brand" />
                  Meer gelijktijdige laadsessies mogelijk
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-brand" />
                  Betere benutting van goedkope of eigen stroom
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-brand" />
                  Eén partij voor elektra, laden én opslag
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTASection
        title="Offerte of laadscan aanvragen"
        description="Vertel hoeveel voertuigen u wilt bedienen — we rekenen mee of batterijondersteuning zinvol is."
        primaryHref="/contact?interesse=laadpalen"
        primaryLabel="Offerte aanvragen"
        secondaryHref="/mw-batterijen"
        secondaryLabel="Koppeling met BESS"
      />
    </>
  );
}
