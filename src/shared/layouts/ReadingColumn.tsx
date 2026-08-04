import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/shared/lib/cn";

type ReadingColumnProps = ComponentPropsWithoutRef<"div">;

export function ReadingColumn({ className, ...props }: ReadingColumnProps) {
  return <div className={cn("max-w-(--reading-width)", className)} {...props} />;
}
