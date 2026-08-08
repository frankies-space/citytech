export const siteConfig = {
  name: "CityTech",
  legalName: "CityTech Engineering B.V.",
  tagline: "Voor bedrijven die tijd waarderen",
  description:
    "Elektrotechnisch installatiebedrijf in Aalsmeer — van utiliteit en Digital out of Home tot zakelijke energieopslag (BESS) en laadinfrastructuur.",
  phone: "036 700 9700",
  phoneHref: "tel:+31367009700",
  email: "info@citytech.nl",
  emailHref: "mailto:info@citytech.nl",
  address: {
    street: "Zwarteweg 97",
    postalCode: "1431 VK",
    city: "Aalsmeer",
  },
  kvk: "", // TODO: KVK-nummer aanvullen
  btw: "", // TODO: BTW-nummer aanvullen
  openingHours: [
    { day: "Maandag", hours: "08:00 – 18:00" },
    { day: "Dinsdag", hours: "08:00 – 18:00" },
    { day: "Woensdag", hours: "08:00 – 18:00" },
    { day: "Donderdag", hours: "08:00 – 18:00" },
    { day: "Vrijdag", hours: "08:00 – 18:00" },
    { day: "Zaterdag", hours: "Gesloten" },
    { day: "Zondag", hours: "Gesloten" },
  ],
  usps: [
    "Snelheid & flexibiliteit zonder concessies aan kwaliteit",
    "NEN1010 & NEN3140 gecertificeerd",
    "Ervaring sinds 2010, o.a. GVB, RET en Shell",
    "24/7 service mogelijk via SLA",
  ],
} as const;

export const navItems = [
  { href: "/elektrotechniek", label: "Elektrotechniek" },
  { href: "/mw-batterijen", label: "MW-Batterijen" },
  { href: "/laadpalen", label: "Laadpalen" },
  { href: "/projecten", label: "Projecten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

export const interestOptions = [
  { value: "elektrotechniek", label: "Elektrotechniek" },
  { value: "mw-batterijen", label: "MW-batterijen" },
  { value: "laadpalen", label: "Laadpalen" },
  { value: "anders", label: "Anders" },
] as const;

export const zteSpecs = [
  { label: "Model", value: "ZTE ZXEPG E260C4" },
  {
    label: "Type",
    value: "All-in-one industrieel/zakelijk batterijcontainer, plug-and-play",
  },
  { label: "Celtype", value: "LFP (lithium-ijzerfosfaat), 3,2V / 314Ah" },
  { label: "Nominale capaciteit", value: "261 kWh" },
  { label: "Nominale spanning", value: "832 Vdc (bereik 728–936 Vdc)" },
  { label: "Laad-/ontlaadsnelheid", value: "≤ 0,5C" },
  {
    label: "Levensduur cellen",
    value: "8.000 cycli @ 25°C / 90% DoD / 70% EOL",
  },
  { label: "Nominaal vermogen (PCS)", value: "125 kW (piek 138 kW)" },
  { label: "Uitgangsspanning", value: "230/400 Vac, driefasig (3W+N+PE)" },
  { label: "Netfrequentie", value: "50/60 Hz" },
  { label: "Overbelastbaarheid", value: "110% langdurig" },
  { label: "Max. rendement", value: "≥ 90%" },
  {
    label: "Koeling",
    value: "Vloeistofkoeling, celtemperatuurverschil ≤ 2°C",
  },
  { label: "Afmetingen (B×D×H)", value: "1170 × 1300 × 2210 mm" },
  { label: "Gewicht", value: "2.510 kg" },
  { label: "Beschermingsklasse", value: "IP55, corrosieklasse C4" },
  {
    label: "Werktemperatuur",
    value: "-30°C tot 55°C (derating boven 45°C)",
  },
  { label: "Geluid", value: "≤ 65 dB op 1 m" },
  {
    label: "Parallelschakelen",
    value: "Tot 16 units on-grid / 10 units off-grid",
  },
  {
    label: "Brandveiligheid",
    value:
      "Actieve detectie + aerosol-blussysteem, meerlaagse brandbeveiliging",
  },
  {
    label: "Certificering",
    value:
      "CE, IEC62619:2022, IEC62477-1, IEC/EN61000-6-2/4, EN50549, UL9540A, RoHS 2.0, UN38.3",
  },
] as const;
