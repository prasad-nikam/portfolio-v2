import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/shared/lib/cn";

const headingVariants = cva("font-display text-[var(--color-ink)]", {
  variants: {
    size: {
      display:
        "text-5xl font-semibold leading-[0.94] tracking-[-0.02em] sm:text-6xl lg:text-7xl xl:text-8xl",

      h1: "text-5xl font-bold leading-tight",

      h2: "text-4xl font-bold leading-tight",

      h3: "text-3xl font-semibold leading-snug",

      h4: "text-2xl font-semibold leading-snug",

      h5: "text-xl font-semibold leading-snug",

      h6: "text-lg font-semibold leading-snug",
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
