import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

import { Text } from "./Text";

type LeadProps = ComponentPropsWithoutRef<typeof Text>;

export function Lead({ className, ...props }: LeadProps) {
  return (
    <Text
      size="lg"
      tone="secondary"
      className={cn("max-w-(--reading-width) leading-relaxed", className)}
      {...props}
    />
  );
}
