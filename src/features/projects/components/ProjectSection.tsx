import type { Project } from "../types/project";

import { ProjectArchitecture } from "./ProjectArchitecture";
import { ProjectHero } from "./ProjectHero";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectOverview } from "./ProjectOverview";
// import { ProjectScreenshot } from "./ProjectScreenshot";
import { ProjectTechStack } from "./ProjectTechStack";
import { ProjectVisual } from "./ProjectVisual";

type ProjectSectionProps = {
  project: Project;
  index: number;
};

export function ProjectSection({ project, index }: ProjectSectionProps) {
  return (
    <article className="space-y-12" aria-labelledby={`${project.id}-title`}>
      <ProjectHero project={project} index={index} />

      <ProjectVisual project={project} />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <ProjectOverview project={project} />

        <div className="space-y-10">
          <ProjectArchitecture project={project} />

          <ProjectTechStack project={project} />

          <ProjectLinks project={project} />
        </div>
      </div>
      {/* <div className="mt-24 border-t border-(--color-border)" /> */}
      <footer className="pt-20">
        <div className="border-t border-(--color-border)" />
      </footer>
    </article>
  );
}
