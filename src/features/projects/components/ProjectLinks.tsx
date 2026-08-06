import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import type { Project } from "../types/project";

import { Heading } from "@/shared/typography";

type ProjectLinksProps = {
  project: Project;
};

export function ProjectLinks({ project }: ProjectLinksProps) {
  if (project.links.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={`${project.id}-links`}>
      <Heading id={`${project.id}-links`} as="h4" size="h5">
        Explore
      </Heading>

      <nav className="mt-5">
        <ul className="space-y-3">
          {project.links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
              >
                <span>{link.label}</span>

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
