import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

const containerVariants = cva("mx-auto w-full px-(--page-padding)", {
  variants: {
    size: {
      reading: "max-w-(--reading-width)",
      default: "max-w-(--content-width)",
      wide: "max-w-(--wide-width)",
      full: "max-w-none",
    },
  },

  defaultVariants: {
    size: "default",
  },
});

type ContainerProps = ComponentPropsWithoutRef<"div"> & VariantProps<typeof containerVariants>;

export function Container({ size, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />;
}
