import type { Project } from "../types/project";

type ProjectScreenshotProps = {
  project: Project;
};

export function ProjectScreenshot({ project }: ProjectScreenshotProps) {
  if (!project.image) {
    return null;
  }

  return (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      className="aspect-16/8 max-h-170 w-full rounded-xl object-cover object-top"
    />
  );
}
