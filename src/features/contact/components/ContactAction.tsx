import { ArrowUpRight } from "lucide-react";

import type { ContactAction as ContactActionType } from "../types";

import { Heading } from "@/shared/typography";

type ContactActionProps = {
  action: ContactActionType;
};

export function ContactAction({ action }: ContactActionProps) {
  const Icon = action.icon;

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-(--color-border) py-5 transition-colors hover:border-(--color-border-strong)"
    >
      <div className="flex items-center gap-4">
        <Icon size={18} className="text-(--color-ink-secondary)" />

        <Heading
          as="h3"
          size="h5"
          className="transition-colors group-hover:text-(--color-interactive)"
        >
          {action.label}
        </Heading>
      </div>

      <ArrowUpRight
        size={18}
        className="text-(--color-ink-secondary) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
