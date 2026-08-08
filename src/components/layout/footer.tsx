import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Image
            src="/logo/logo.png"
            alt="CityTech"
            width={140}
            height={99}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.legalName} — elektrotechniek, energieopslag en
            laadinfrastructuur voor zakelijke klanten.
          </p>
          <p className="text-xs text-white/45">
            KVK: {siteConfig.kvk || "—"} · BTW: {siteConfig.btw || "—"}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/50">
            Navigatie
          </h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/50">
            Pijlers
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/elektrotechniek" className="hover:text-white">
                Elektrotechniek & utiliteit
              </Link>
            </li>
            <li>
              <Link href="/mw-batterijen" className="hover:text-white">
                MW-batterijen / BESS
              </Link>
            </li>
            <li>
              <Link href="/laadpalen" className="hover:text-white">
                Zakelijke laadpalen
              </Link>
            </li>
            <li>
              <Link href="/projecten" className="hover:text-white">
                Projecten
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </li>
            <li>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone className="size-4 text-brand" aria-hidden />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Mail className="size-4 text-brand" aria-hidden />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Alle rechten
            voorbehouden.
          </p>
          <p>Ma–vr 08:00–18:00 · 24/7 service in overleg</p>
        </div>
      </div>
    </footer>
  );
}
