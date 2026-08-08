import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dark?: boolean;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        dark
          ? "bg-gradient-to-br from-ink via-[#2a1210] to-brand-dark text-white"
          : "bg-brand-soft"
      )}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            className={cn(
              "font-display text-3xl font-bold tracking-tight sm:text-4xl",
              dark ? "text-white" : "text-ink"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg",
              dark ? "text-white/75" : "text-muted"
            )}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              href={primaryHref}
              variant={dark ? "light" : "default"}
              size="lg"
            >
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink
                href={secondaryHref}
                variant={dark ? "outline" : "secondary"}
                size="lg"
                className={
                  dark
                    ? "border-white/30 bg-transparent text-white hover:bg-white/10"
                    : undefined
                }
              >
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
