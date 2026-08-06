import type { Project } from "../types/project";

type ProjectScreenshotProps = {
  project: Project;
};

export function ProjectScreenshot({ project }: ProjectScreenshotProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-(--color-border)">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="aspect-16/8 max-h-170 w-full object-cover object-top"
      />
    </figure>
  );
}
