import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export function ButtonLink({
  href,
  children,
  className,
  variant,
  size,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const external =
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http");

  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
