import { Badge } from "@/shared/components/Badge";
import type { Project } from "../types/project";
import { Heading } from "@/shared/typography";

type ProjectTechStackProps = {
  project: Project;
};

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section aria-labelledby={`${project.id}-tech-stack`}>
      <Heading id={`${project.id}-tech-stack`} as="h4" size="h5">
        Built With
      </Heading>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
    </section>
  );
}
