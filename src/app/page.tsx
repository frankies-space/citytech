import type { Metadata } from "next";
import Image from "next/image";
import {
  BatteryCharging,
  Cable,
  CheckCircle2,
  PlugZap,
  ShieldCheck,
  Timer,
  Zap,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Section, SectionHeading } from "@/components/ui/section";
import { VideoBackground } from "@/components/ui/video-background";
import { PillarCard } from "@/components/sections/pillar-card";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elektrotechniek partner voor energieopslag & laadinfra",
  description:
    "CityTech: elektrotechniek, MW-batterijen (BESS) en zakelijke laadpalen — één partner voor installatie én energietransitie.",
};

const usps = [
  {
    icon: Timer,
    title: "Snel & flexibel",
    text: "Korte lijnen en snelle opschaling — zonder concessies aan kwaliteit of veiligheid.",
  },
  {
    icon: ShieldCheck,
    title: "Gecertificeerd",
    text: "NEN1010 en NEN3140. Installaties die voldoen aan de geldende normen.",
  },
  {
    icon: CheckCircle2,
    title: "Bewezen projecten",
    text: "Sinds 2010 actief voor o.a. GVB, RET en Shell in Digital out of Home en utiliteit.",
  },
  {
    icon: Zap,
    title: "24/7 mogelijk",
    text: "SLA’s met storingsdienst en monitoring, zodat installaties blijven draaien.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink text-white sm:min-h-[92vh]">
        <VideoBackground
          src="/videos/engineer.mp4"
          poster="/images/hero/engineer-portrait.jpg"
          overlayClassName="bg-gradient-to-r from-ink/90 via-ink/75 to-ink/45"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <FadeIn>
            <p className="mb-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {siteConfig.name}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Elektrotechniek. Energieopslag. Laadinfra.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Eén partner voor elektrische installaties én de energietransitie —
              van utiliteit tot MW-batterijen en zakelijke laadpalen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg" variant="default">
                Vraag een adviesgesprek aan
              </ButtonLink>
              <ButtonLink
                href="/mw-batterijen"
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Ontdek MW-batterijen
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Drie pijlers"
          title="Alles onder één dak"
          description="Van klassieke elektrotechniek tot moderne energieopslag en laden — CityTech verbindt installatiekennis met de energietransitie."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PillarCard
            href="/elektrotechniek"
            title="Elektrotechniek"
            description="Utiliteit, DOOH-installaties, groepenkasten en storingsoplossing — NEN-gecertificeerd en projectmatig aangepakt."
            icon={Cable}
          />
          <PillarCard
            href="/mw-batterijen"
            title="MW-Batterijen"
            description="Zakelijke BESS-systemen die pieken afvlakken, kosten verlagen en ruimte geven bij netcongestie."
            icon={BatteryCharging}
            delay={0.08}
          />
          <PillarCard
            href="/laadpalen"
            title="Laadpalen"
            description="Laadpleinen en slim laden voor personeel en vloot — met of zonder batterijondersteuning."
            icon={PlugZap}
            delay={0.16}
          />
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Waarom CityTech"
          title="Voor bedrijven die tijd waarderen"
          description="Intelligent, efficiënt en kwalitatief — de kern van hoe wij werken sinds 2010."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5">
                <item.icon className="size-7 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Energietransitie
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Waarom batterijen en laadpalen logisch bij CityTech passen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Netcongestie, stijgende energiekosten en elektrificatie van
              wagenparken vragen om meer dan alleen een nieuwe groepenkast.
              Met onze installatie-ervaring en projectaanpak helpen we bedrijven
              om opslag en laden veilig en slim te integreren in de bestaande
              elektrische infrastructuur.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Piekvermogen beheersen zonder directe netaansluitverzwaring",
                "Meer eigen of goedkope stroom benutten wanneer het telt",
                "Laadinfra uitbreiden zonder het net te overvragen",
                "Eén aanspreekpunt van advies tot installatie en service",
              ].map((text) => (
                <li key={text} className="flex gap-3 text-sm text-ink sm:text-base">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    aria-hidden
                  />
                  {text}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg shadow-black/10 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/energy/wind-data.jpg"
                alt="Energie-infrastructuur en monitoring"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTASection
        title="Klaar voor een vrijblijvend gesprek?"
        description="Vertel ons over uw installatie, verbruik of laadbehoefte — we denken mee over de juiste volgende stap."
        primaryHref="/contact"
        primaryLabel="Offerte aanvragen"
        secondaryHref={siteConfig.phoneHref}
        secondaryLabel={siteConfig.phone}
      />
    </>
  );
}
