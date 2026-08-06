import type { Project } from "../types/project";

import { Heading, Text } from "@/shared/typography";

type ProjectArchitectureProps = {
  project: Project;
};

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  return (
    <section aria-labelledby={`${project.id}-architecture`}>
      <Heading id={`${project.id}-architecture`} as="h4" size="h5">
        Architecture
      </Heading>

      <ul className="mt-5 space-y-4">
        {project.architecture.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.55em] size-1.5 rounded-full bg-(--color-interactive)"
            />

            <Text tone="secondary" className="text-pretty">
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  );
}
