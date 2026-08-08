import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

type PillarCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  tone?: "light" | "dark";
};

export function PillarCard({
  href,
  title,
  description,
  icon: Icon,
  delay = 0,
  tone = "light",
}: PillarCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={href}
        className={cn(
          "group flex h-full flex-col rounded-2xl border p-6 shadow-lg shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-xl sm:p-8",
          tone === "dark"
            ? "border-white/10 bg-white/5 hover:border-brand/50"
            : "border-border bg-white hover:border-brand/30"
        )}
      >
        <div
          className={cn(
            "mb-5 inline-flex size-12 items-center justify-center rounded-xl",
            tone === "dark" ? "bg-brand text-white" : "bg-brand-soft text-brand"
          )}
        >
          <Icon className="size-6" aria-hidden />
        </div>
        <h3
          className={cn(
            "font-display text-xl font-bold",
            tone === "dark" ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3 flex-1 text-sm leading-relaxed sm:text-base",
            tone === "dark" ? "text-white/65" : "text-muted"
          )}
        >
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
          Meer info
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </span>
      </Link>
    </FadeIn>
  );
}
