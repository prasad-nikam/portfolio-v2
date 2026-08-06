import type { Project } from "../types/project";

import { Heading, Text } from "@/shared/typography";

type ProjectOverviewProps = {
  project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section aria-labelledby={`${project.id}-overview`}>
      <Heading id={`${project.id}-overview`} as="h4" size="h5">
        Overview
      </Heading>

      <Text tone="secondary" size="lg" className="mt-5 max-w-prose text-pretty">
        {project.overview}
      </Text>
    </section>
  );
}
