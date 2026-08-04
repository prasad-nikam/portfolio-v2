import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
  },

  defaultVariants: {
    gap: "md",
  },
});

type StackProps = ComponentPropsWithoutRef<"div"> & VariantProps<typeof stackVariants>;

export function Stack({ gap, className, ...props }: StackProps) {
  return <div className={cn(stackVariants({ gap }), className)} {...props} />;
}
