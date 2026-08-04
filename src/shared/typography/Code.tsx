import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

type CodeProps = ComponentPropsWithoutRef<"code">;

export function Code({ className, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        `rounded-md bg-(--color-surface-secondary) px-1.5 py-0.5 font-mono text-sm font-medium text-(--color-ink) tabular-nums`,
        className,
      )}
      {...props}
    />
  );
}
