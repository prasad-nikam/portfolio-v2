import { ProjectScreenshot } from "./ProjectScreenshot";
import type { Project } from "../types/project";

type ProjectVisualProps = {
  project: Project;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.image) {
    return <ProjectScreenshot project={project} />;
  }

  return (
    <div
      className="flex aspect-16/8 w-full items-center justify-center overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface-secondary)"
      aria-label={`${project.title} project visual`}
    >
      <div className="text-center">
        <p className="font-display text-lg font-semibold text-(--color-ink)">{project.title}</p>

        <p className="mt-2 text-sm text-(--color-ink-secondary)">Project preview</p>
      </div>
    </div>
  );
}
