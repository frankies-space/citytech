import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

export function StepTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl space-y-0">
      {steps.map((step, index) => (
        <FadeIn key={step.title} delay={index * 0.06}>
          <li className="relative flex gap-5 pb-10 last:pb-0">
            {index < steps.length - 1 ? (
              <span
                className="absolute left-[1.15rem] top-12 h-[calc(100%-1.5rem)] w-px bg-border"
                aria-hidden
              />
            ) : null}
            <div className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white shadow-lg shadow-brand/25">
              {index + 1}
            </div>
            <div className="pt-1">
              <h3 className="font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

export function SpecTable({
  rows,
  disclaimer,
}: {
  rows: readonly { label: string; value: string }[];
  disclaimer?: string;
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-black/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-ink text-white">
              <tr>
                <th className="px-5 py-4 font-display font-semibold">
                  Specificatie
                </th>
                <th className="px-5 py-4 font-display font-semibold">Waarde</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={cn(
                    "border-t border-border",
                    i % 2 === 0 ? "bg-white" : "bg-surface/60"
                  )}
                >
                  <th className="whitespace-nowrap px-5 py-3.5 font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="px-5 py-3.5 text-muted">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {disclaimer ? (
        <p className="mt-3 text-xs leading-relaxed text-muted">{disclaimer}</p>
      ) : null}
    </div>
  );
}
