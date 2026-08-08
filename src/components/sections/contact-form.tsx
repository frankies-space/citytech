"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { interestOptions } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(8, "Vul een telefoonnummer in"),
  interest: z.enum(["elektrotechniek", "mw-batterijen", "laadpalen", "anders"]),
  message: z.string().min(10, "Schrijf iets meer over uw vraag"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const searchParams = useSearchParams();
  const interesse = searchParams.get("interesse");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "elektrotechniek",
      message: "",
    },
  });

  useEffect(() => {
    const match = interestOptions.find((o) => o.value === interesse);
    if (match) {
      setValue("interest", match.value);
    }
  }, [interesse, setValue]);

  const onSubmit = async (_data: FormValues) => {
    // TODO: koppel aan formulier-endpoint of e-maildienst (Resend/Formspree/etc.)
    await new Promise((r) => setTimeout(r, 600));
    reset({
      name: "",
      email: "",
      phone: "",
      interest:
        (interesse as FormValues["interest"]) || "elektrotechniek",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Naam
          </label>
          <input id="name" className={fieldClass} {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-xs text-brand">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-brand">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefoon
          </label>
          <input id="phone" type="tel" className={fieldClass} {...register("phone")} />
          {errors.phone ? (
            <p className="mt-1 text-xs text-brand">{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="interest"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Interesse in
          </label>
          <select id="interest" className={fieldClass} {...register("interest")}>
            {interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Bericht
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldClass, "resize-y")}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-brand">{errors.message.message}</p>
        ) : null}
      </div>

      {isSubmitSuccessful ? (
        <p
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          role="status"
        >
          Bedankt! Uw bericht is ontvangen. We nemen zo snel mogelijk contact op.
          {/* TODO: echte verzending nog te koppelen */}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Versturen…" : "Versturen"}
      </Button>
    </form>
  );
}
