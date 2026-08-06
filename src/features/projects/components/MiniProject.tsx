import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Heading, Text } from "@/shared/typography";

import type { Project } from "../types/project";

type MiniProjectProps = {
  project: Project;
};

export function MiniProject({ project }: MiniProjectProps) {
  const primaryLink = project.links[0];

  return (
    <article className="border-b border-(--color-border) py-8 last:border-none">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <Heading as="h4" size="h5">
            {project.title}
          </Heading>

          <Text tone="secondary" className="mt-3 max-w-prose text-pretty">
            {project.tagline}
          </Text>

          <Text as="p" size="sm" tone="muted" className="mt-5">
            {project.technologies.join(" · ")}
          </Text>
        </div>

        {primaryLink && (
          <Link
            to={primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="group mt-1 shrink-0 text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
      </div>
    </article>
  );
}
