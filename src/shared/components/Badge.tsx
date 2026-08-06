import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

const badgeVariants = cva("inline-flex items-center rounded-full border transition-colors", {
  variants: {
    size: {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
    },

    tone: {
      default: "border-(--color-border) bg-(--color-surface) text-(--color-ink-secondary)",

      interactive:
        "border-(--color-border) bg-(--color-surface) text-(--color-ink) hover:border-(--color-border-strong)",
    },
  },

  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ size, tone, className, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ size, tone }), className)} {...props} />;
}
