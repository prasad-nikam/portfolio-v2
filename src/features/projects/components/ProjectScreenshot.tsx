import { ImageOff } from "lucide-react";

import type { Project } from "../types/project";

type ProjectScreenshotProps = {
  project: Project;
};

export function ProjectScreenshot({ project }: ProjectScreenshotProps) {
  if (!project.image) {
    return (
      <div
        className="flex aspect-16/8 w-full items-center justify-center rounded-xl border border-(--color-border) bg-(--color-surface-secondary)"
        aria-label={`${project.title} has no public screenshot`}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <ImageOff size={24} className="text-(--color-ink-muted)" />

          <p className="text-sm text-(--color-ink-secondary)">No public screenshot available</p>
        </div>
      </div>
    );
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
