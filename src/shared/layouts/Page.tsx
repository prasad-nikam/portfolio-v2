import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

type PageProps = ComponentPropsWithoutRef<"main">;

export function Page({ className, ...props }: PageProps) {
  return (
    <main className={cn("flex min-h-screen flex-col bg-(--color-surface)", className)} {...props} />
  );
}
