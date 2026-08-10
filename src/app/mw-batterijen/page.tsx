import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  BadgeCheck,
  Battery,
  Cpu,
  Gauge,
  Network,
  Shield,
  Sun,
  TrendingDown,
  Zap,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { Section, SectionHeading } from "@/components/ui/section";
import { VideoBackground } from "@/components/ui/video-background";
import { CTASection } from "@/components/sections/cta-section";
import { SpecTable, StepTimeline } from "@/components/sections/step-timeline";
import { zteSpecs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zakelijke energieopslag / BESS | MW-batterijen",
  description:
    "MW-batterijen voor bedrijven: piekvermijding, energiearbitrage en netcongestie-oplossingen. Voorbeeld: ZTE ZXEPG E260C4 (261 kWh).",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Lagere energiekosten",
    text: "Laad ’s nachts goedkoop en gebruik of lever terug wanneer stroom duur is (energiearbitrage).",
  },
  {
    icon: Gauge,
    title: "Piekvermijding",
    text: "Vlakt verbruikspieken af zodat een dure netaansluitverzwaring vaak niet nodig is.",
  },
  {
    icon: Sun,
    title: "Meer eigen zonnestroom",
    text: "Sla overschot op in plaats van terugleveren of curtailment bij netbeperking.",
  },
  {
    icon: Zap,
    title: "Backup bij uitval",
    text: "Afhankelijk van de configuratie kan het systeem noodstroom bieden bij storingen.",
  },
  {
    icon: Activity,
    title: "Extra verdienmogelijkheid",
    text: "Deelname aan energiemarkten of congestiemanagement — een extra inkomstenstroom.",
  },
  {
    icon: Network,
    title: "Antwoord op netcongestie",
    text: "Als een grotere aansluiting (nog) niet kan, biedt opslag vaak wel ruimte om te groeien.",
  },
];

const bessSteps = [
  {
    icon: Battery,
    title: "Batterij (LFP)",
    text: "Veilige, langlevende cellen die stroom opslaan.",
  },
  {
    icon: Shield,
    title: "BMS",
    text: "Bewaakt cellen op spanning, temperatuur en balans.",
  },
  {
    icon: Cpu,
    title: "PCS",
    text: "Zet gelijkstroom om naar bruikbare wisselstroom.",
  },
  {
    icon: Activity,
    title: "EMS / net",
    text: "Bepaalt automatisch wanneer laden of ontladen het meeste oplevert.",
  },
];

const certs = [
  {
    name: "CE",
    why: "Voldoet aan Europese productveiligheidseisen voor de markt.",
  },
  {
    name: "UL9540A",
    why: "Relevant voor brandveiligheid van energieopslagsystemen.",
  },
  {
    name: "IEC62619",
    why: "Internationale veiligheidsnorm voor industriële batterijen.",
  },
  {
    name: "RoHS",
    why: "Beperkt gevaarlijke stoffen — kwaliteit en milieueisen.",
  },
];

const process = [
  {
    title: "Intake & verbruiksscan",
    description:
      "We brengen aansluiting, verbruikspatronen en doelen in kaart.",
  },
  {
    title: "Haalbaarheidsadvies",
    description:
      "Indicatie van besparing, terugverdientijd en technische fit.",
  },
  {
    title: "Ontwerp & vergunningen",
    description:
      "Dimensionering, netbeheerder-afstemming en benodigde procedures.",
  },
  {
    title: "Installatie & inbedrijfstelling",
    description:
      "Plaatsing, aansluiting en veilig in bedrijf stellen van het systeem.",
  },
  {
    title: "Monitoring & service",
    description:
      "Inzicht in prestaties en ondersteuning wanneer u die nodig heeft.",
  },
];

export default function MwBatterijenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0c1524] text-white">
        <VideoBackground
          src="/videos/forest-drone.mp4"
          poster="/images/energy/bess-landscape.jpg"
          overlayClassName="bg-gradient-to-r from-[#0c1524]/92 via-[#0c1524]/80 to-[#0c1524]/55"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              MW-Batterijen · BESS
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Zakelijke energieopslag voor bedrijven en industrie
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Verlaag kosten, vlak pieken af en maak uw bedrijf
              toekomstbestendig — met industriële batterijsystemen die
              aansluiten op uw netaansluiting en processen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact?interesse=mw-batterijen" size="lg">
                Vraag een haalbaarheidsscan aan
              </ButtonLink>
              <ButtonLink
                href="#specificaties"
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Bekijk specificaties
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/images/mw-batterijen/zte-e260c4.jpg"
                alt="ZTE ZXEPG E260C4 Energy Master batterijcontainer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 90vw, 420px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Uitleg"
          title="Wat is een batterijsysteem (BESS)?"
          description="Een Battery Energy Storage System slaat stroom op en levert die terug wanneer dat voor uw bedrijf het meeste oplevert."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bessSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-6">
                <div className="mb-4 flex items-center justify-between">
                  <step.icon className="size-7 text-brand" aria-hidden />
                  <span className="font-display text-sm font-bold text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
                {i < bessSteps.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-brand lg:block">
                    →
                  </span>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Voordelen"
          title="Wat levert het bedrijven op?"
          description="Concrete waarde voor MKB en industrie — zonder onnodig jargon."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-lg shadow-black/5">
                <item.icon className="size-7 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <section className="relative min-h-[42vh] overflow-hidden sm:min-h-[48vh]">
        <Image
          src="/images/energy/bess-landscape.jpg"
          alt="Industrieel batterijpark met zonnepanelen en windturbines"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-transparent" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl items-end px-4 py-12 sm:min-h-[48vh] sm:px-6 lg:px-8">
          <FadeIn>
            <p className="max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              Opslag die past bij opwek én verbruik
            </p>
            <p className="mt-3 max-w-lg text-sm text-white/75 sm:text-base">
              Van enkele containers tot parallel geschakelde MW-systemen —
              schaalbaar naar uw energiebehoefte.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section id="specificaties">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Voorbeeldconfiguratie
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              ZTE ZXEPG E260C4
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              All-in-one industrieel batterijsysteem (plug-and-play). Modulair
              op te schalen door parallelschakeling — tot 16 units on-grid.
              Onderstaande specificaties zijn een voorbeeldconfiguratie.
            </p>
            <div className="relative mt-8 aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-black/5">
              <Image
                src="/images/mw-batterijen/zte-e260c4.jpg"
                alt="ZTE Energy Master E260C4 productfoto"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <SpecTable
              rows={zteSpecs}
              disclaimer="Specificaties o.b.v. ZTE ZXEPG E260C4 datasheet, kunnen wijzigen; vraag een actueel overzicht op maat aan."
            />
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Veiligheid & normen"
          title="Gecertificeerd voor professioneel gebruik"
          description="Belangrijke keurmerken — en waarom ze voor u relevant zijn."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 text-center shadow-lg shadow-black/5">
                <BadgeCheck className="mx-auto size-8 text-brand" aria-hidden />
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{cert.why}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Traject"
          title="Van scan tot service"
          description="Een helder stappenplan — de details stemmen we af op uw situatie."
        />
        <div className="mt-12">
          <StepTimeline steps={process} />
        </div>
      </Section>

      <CTASection
        title="Vraag een haalbaarheidsscan aan"
        description="We kijken naar uw verbruik, aansluiting en doelen — en geven een realistische indicatie van nut en terugverdientijd."
        primaryHref="/contact?interesse=mw-batterijen"
        primaryLabel="Haalbaarheidsscan aanvragen"
        secondaryHref="/laadpalen"
        secondaryLabel="Bekijk ook laadpalen"
      />
    </>
  );
}
