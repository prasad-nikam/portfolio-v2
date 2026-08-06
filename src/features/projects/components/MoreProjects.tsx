import type { Project } from "../types/project";

import { Heading, Text } from "@/shared/typography";

import { MiniProject } from "./MiniProject";

type MoreProjectsProps = {
  projects: Project[];
};

export function MoreProjects({ projects }: MoreProjectsProps) {
  return (
    <section aria-labelledby="more-projects-title" className="pt-8">
      <header className="max-w-2xl">
        <Heading id="more-projects-title" as="h3" size="h3">
          More Projects
        </Heading>

        <Text tone="secondary" className="mt-4 text-pretty">
          A collection of smaller experiments, utilities, and side projects exploring different
          technologies and ideas.
        </Text>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <MiniProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
