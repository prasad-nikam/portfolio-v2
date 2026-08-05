import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      sm: "py-16",
      md: "py-24",
      lg: "py-32",
      none: "py-0",
    },
  },

  defaultVariants: {
    spacing: "md",
  },
});

type SectionProps = ComponentPropsWithoutRef<"section"> & VariantProps<typeof sectionVariants>;

export function Section({ spacing, className, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ spacing }), className)} {...props} />;
}
