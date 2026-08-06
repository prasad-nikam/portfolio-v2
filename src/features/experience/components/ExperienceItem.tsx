import { Badge } from "@/shared/components/Badge";
import type { Experience } from "../types/experience";
import { Heading, Text } from "@/shared/typography";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article
      className="border-b border-(--color-border) pb-24 last:border-none last:pb-0"
      aria-labelledby={`${experience.id}-title`}
    >
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Meta */}
        <aside>
          <Heading id={`${experience.id}-title`} as="h3" size="h4">
            {experience.role}
          </Heading>

          <Text size="lg" weight="medium" className="mt-3">
            {experience.company}
          </Text>

          <Text tone="muted" size="sm" className="mt-2">
            {experience.period}
          </Text>

          <Text tone="muted" size="sm" className="mt-1">
            {experience.location}
          </Text>
        </aside>

        {/* Content */}
        <div>
          <Text tone="secondary" size="lg" className="max-w-prose text-pretty">
            {experience.overview}
          </Text>

          <ul className="mt-8 space-y-4">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] size-1.5 rounded-full bg-(--color-interactive)"
                />

                <Text tone="secondary">{highlight}</Text>
              </li>
            ))}
          </ul>

          {experience.technologies && (
            <div className="mt-8 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
