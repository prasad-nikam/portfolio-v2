import { education } from "../data/experience";

import { Heading, Text } from "@/shared/typography";

export function Education() {
  return (
    <section aria-labelledby="education-title">
      <Heading id="education-title" as="h3" size="h3" className="mt-20">
        Education
      </Heading>

      <div className="mt-10 space-y-8">
        {education.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between gap-2 border-b border-(--color-border) pb-8 last:border-none last:pb-0 sm:flex-row sm:items-start"
          >
            <div>
              <Heading as="h4" size="h5">
                {item.degree}
              </Heading>

              <Text tone="secondary" className="mt-2">
                {item.institution}
              </Text>

              {item.description && (
                <Text tone="muted" size="sm" className="mt-3">
                  {item.description}
                </Text>
              )}
            </div>

            <Text tone="muted" size="sm" className="shrink-0">
              {item.period}
            </Text>
          </article>
        ))}
      </div>
    </section>
  );
}
