import type { Metadata } from "next";
import Image from "next/image";
import {
  Cable,
  CircuitBoard,
  Home,
  MonitorPlay,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Section, SectionHeading } from "@/components/ui/section";
import { CTASection } from "@/components/sections/cta-section";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Elektrotechniek Aalsmeer | Installatie & utiliteit",
  description:
    "Elektrotechniek door CityTech: utiliteit, Digital out of Home, groepenkasten, storing & onderhoud. NEN1010 en NEN3140 gecertificeerd.",
};

const services = [
  {
    icon: MonitorPlay,
    title: "Installatietechniek / DOOH",
    text: "Sinds 2010 gespecialiseerd in Digital out of Home: montage, omkasting, multimedia en uitbreiding of hergebruik van bestaande constructies.",
  },
  {
    icon: Cable,
    title: "Elektrotechniek utiliteit",
    text: "Nieuwe installaties aanleggen, uitbreiden of wijzigen — met NEN1010 en NEN3140. Totaalservice in combinatie met DOOH-projecten.",
  },
  {
    icon: CircuitBoard,
    title: "Projectmanagement",
    text: "Breeddenkende ingenieurs die projecten efficiënt, veilig en duurzaam aanpakken — snelheid zonder concessie aan kwaliteit.",
  },
  {
    icon: Wrench,
    title: "Storing & onderhoud",
    text: "SLA’s, 24/7 storingsdienst, CT Dashboard-monitoring en gepland onderhoud zodat installaties blijven draaien.",
  },
  {
    icon: Home,
    title: "Particuliere elektra",
    text: "Keukenuitbreidingen, groepenkasten, tuinelektra, kortsluitingen en kleinere klussen zoals fornuisaansluitingen.",
  },
  {
    icon: ShieldCheck,
    title: "Assemblage & herstel",
    text: "Eigen assemblage- en herstellijn voor DOOH-producten en mediaschermen — kwaliteit dicht bij de bron.",
  },
];

export default function ElektrotechniekPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/team/engineer-clipboard.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-45"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Elektrotechniek
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Installateurs die graag ontzorgen
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Van utiliteit en Digital out of Home tot storingsoplossing en
              onderhoud: CityTech levert elektrotechniek met korte lijnen,
              gecertificeerde monteurs en een projectmatige aanpak.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact?interesse=elektrotechniek" size="lg">
                Vraag advies aan
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Diensten"
          title="Wat wij doen"
          description="Gebaseerd op onze bestaande expertise — herschreven voor duidelijkheid, zonder nieuwe claims."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5">
                <service.icon className="size-7 text-brand" aria-hidden />
                <h2 className="mt-4 font-display text-lg font-bold text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-ink">
              Normering & werkwijze
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Met NEN1010- en NEN3140-certificering leggen we nieuwe
              installaties aan of passen bestaande situaties aan. Voor
              particuliere klussen hanteren we een helder proces: aanvraag,
              gratis opname, offerte, uitvoering — en u betaalt pas als u
              tevreden bent.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative min-h-72 overflow-hidden rounded-2xl shadow-lg shadow-black/10">
              <Image
                src="/images/hero/engineer-portrait.jpg"
                alt="Elektrotechnisch specialist in veiligheidskleding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <p className="font-display text-xl font-bold">Veiligheid eerst</p>
                <p className="mt-2 text-sm text-white/70">
                  Kwaliteit en veiligheid staan centraal — inclusief garantie
                  op installatiewerkzaamheden.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTASection
        title="Elektrotechniek nodig?"
        description="Bel of mail ons — we denken mee over utiliteit, DOOH of een kleinere elektra-klus."
        primaryHref="/contact?interesse=elektrotechniek"
        primaryLabel="Offerte aanvragen"
      />
    </>
  );
}
