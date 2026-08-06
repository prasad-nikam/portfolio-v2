import { principles } from "../data/principles";

import { Heading, Text } from "@/shared/typography";

export function Principles() {
  return (
    <section aria-labelledby="principles-title">
      <Heading id="principles-title" as="h3" size="h3">
        Engineering Principles
      </Heading>

      <div className="mt-12">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="border-b border-(--color-border) py-8 first:pt-0 last:border-none last:pb-0"
          >
            <Heading as="h4" size="h5">
              {principle.title}
            </Heading>

            <Text tone="secondary" className="mt-3 max-w-2xl text-pretty">
              {principle.description}
            </Text>
          </article>
        ))}
      </div>
    </section>
  );
}
