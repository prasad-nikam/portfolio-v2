import { featuredProjects, miniProjects } from "../data/projects";

import { MoreProjects } from "./MoreProjects";
import { ProjectSection } from "./ProjectSection";
import { ProjectsHeader } from "./ProjectsHeader";

import { Container, Section } from "@/shared/layouts";

export function Projects() {
  return (
    <Section id="projects">
      <Container className="space-y-20">
        <ProjectsHeader />

        <div className="space-y-40">
          {featuredProjects.map((project, index) => (
            <ProjectSection key={project.id} project={project} index={index} />
          ))}
        </div>

        <MoreProjects projects={miniProjects} />
      </Container>
    </Section>
  );
}
