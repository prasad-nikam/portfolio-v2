import { contact } from "../data/contact";

import { Text } from "@/shared/typography";

export function ContactFooter() {
  return (
    <footer className="pt-8">
      <Text tone="muted" size="sm">
        {contact.footer}
      </Text>
    </footer>
  );
}
