"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/logo.png"
            alt="CityTech"
            width={140}
            height={99}
            className="h-10 w-auto lg:h-12"
            priority
          />
          <span className="sr-only">CityTech</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-soft text-brand"
                    : "text-ink/80 hover:bg-surface hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-brand"
          >
            <Phone className="size-4" aria-hidden />
            {siteConfig.phone}
          </a>
          <ButtonLink href="/contact" size="sm">
            Adviesgesprek
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobiel menu">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 px-3 text-sm font-medium text-ink"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.phone}
            </a>
            <ButtonLink href="/contact" className="w-full">
              Adviesgesprek
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
