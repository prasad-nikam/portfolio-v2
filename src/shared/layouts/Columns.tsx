import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

const columnsVariants = cva("grid", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
    },

    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    },
  },

  defaultVariants: {
    columns: 2,
    gap: "md",
  },
});

type GridProps = ComponentPropsWithoutRef<"div"> & VariantProps<typeof columnsVariants>;

export function Columns({ columns, gap, className, ...props }: GridProps) {
  return <div className={cn(columnsVariants({ columns, gap }), className)} {...props} />;
}
