import type { Project } from "../types/project";

import { Heading, Text } from "@/shared/typography";

type ProjectHeroProps = {
  project: Project;
  index: number;
};

export function ProjectHero({ project, index }: ProjectHeroProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <header className="max-w-4xl" aria-labelledby={`${project.id}-title`}>
      <Text as="p" size="sm" weight="medium" tone="muted" className="tracking-[0.18em] uppercase">
        Project {projectNumber}
      </Text>

      <Heading id={`${project.id}-title`} as="h3" size="h2" className="mt-4 text-balance">
        {project.title}
      </Heading>

      <Text size="lg" tone="secondary" className="mt-6 max-w-3xl text-pretty">
        {project.tagline}
      </Text>
    </header>
  );
}
