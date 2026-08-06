import { contact } from "../data/contact";

import { Heading, Text } from "@/shared/typography";

export function ContactHeader() {
  return (
    <header className="max-w-3xl">
      <Text tone="muted" weight="medium" className="mb-4">
        Contact
      </Text>

      <Heading as="h2" size="h2" className="text-balance">
        {contact.heading}
      </Heading>

      <Text tone="secondary" size="lg" className="mt-6 max-w-2xl text-pretty">
        {contact.description}
      </Text>
    </header>
  );
}
