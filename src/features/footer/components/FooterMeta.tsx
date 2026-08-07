import type { Footer } from "../types";

import { Text } from "@/shared/typography";

type FooterMetaProps = {
  footer: Footer;
};

export function FooterMeta({ footer }: FooterMetaProps) {
  return (
    <div className="flex flex-col gap-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
      <Text tone="muted">{footer.message}</Text>

      <div className="flex items-center gap-6">
        {footer.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className="text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
          >
            {link.label}
          </a>
        ))}

        <Text tone="muted">{footer.year}</Text>
      </div>
    </div>
  );
}
