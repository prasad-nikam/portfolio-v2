import { contact } from "../data/contact";

import { Heading, Text } from "@/shared/typography";

export function ContactAvailability() {
  return (
    <section
      aria-labelledby="availability-title"
      className="border-t border-(--color-border) pt-12"
    >
      <Heading id="availability-title" as="h3" size="h4">
        Availability
      </Heading>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {contact.availability.map((item) => (
          <div key={item.label}>
            <Text tone="muted" size="sm" weight="medium">
              {item.label}
            </Text>

            <Text className="mt-2 text-pretty">{item.value}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
