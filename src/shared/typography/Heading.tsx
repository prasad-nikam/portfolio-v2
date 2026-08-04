import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/shared/lib/cn";

const headingVariants = cva("font-(--font-sans) text-(--color-ink)", {
  variants: {
    size: {
      display:
        "text-(--text-display) font-(--font-weight-bold) leading-(--leading-tight) tracking-(--tracking-tight)",

      h1: "text-(--text-5xl) font-(--font-weight-bold) leading-(--leading-tight) tracking-(--tracking-tight)",

      h2: "text-(--text-4xl) font-(--font-weight-bold) leading-(--leading-tight) tracking-(--tracking-tight)",

      h3: "text-(--text-3xl) font-(--font-weight-semibold) leading-(--leading-snug)",

      h4: "text-(--text-2xl) font-(--font-weight-semibold) leading-(--leading-snug)",

      h5: "text-(--text-xl) font-(--font-weight-semibold) leading-(--leading-snug)",

      h6: "text-(--text-lg) font-(--font-weight-semibold) leading-(--leading-snug)",
    },
  },

  defaultVariants: {
    size: "h2",
  },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = ComponentPropsWithoutRef<HeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingElement;
  };

export function Heading({ as, size, className, ...props }: HeadingProps) {
  const Component: ElementType = as ?? "h2";

  return <Component className={cn(headingVariants({ size }), className)} {...props} />;
}
