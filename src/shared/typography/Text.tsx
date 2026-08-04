import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/shared/lib/cn";

const textVariants = cva("font-(--font-sans)", {
  variants: {
    tone: {
      primary: "text-(--color-ink)",
      secondary: "text-(--color-ink-secondary)",
      muted: "text-(--color-ink-muted)",
    },

    size: {
      sm: "text-(--text-sm)",
      base: "text-(--text-base)",
      lg: "text-(--text-lg)",
    },

    weight: {
      regular: "font-(--font-weight-regular)",
      medium: "font-(--font-weight-medium)",
      semibold: "font-(--font-weight-semibold)",
    },
  },

  compoundVariants: [
    {
      size: "sm",
      className: "leading-(--leading-normal)",
    },
    {
      size: "base",
      className: "leading-(--leading-normal)",
    },
    {
      size: "lg",
      className: "leading-(--leading-relaxed)",
    },
  ],

  defaultVariants: {
    tone: "primary",
    size: "base",
    weight: "regular",
  },
});

type TextProps = ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof textVariants> & {
    as?: ElementType;
  };

export function Text({ as, tone, size, weight, className, ...props }: TextProps) {
  const Component = as ?? "p";

  return <Component className={cn(textVariants({ tone, size, weight }), className)} {...props} />;
}
