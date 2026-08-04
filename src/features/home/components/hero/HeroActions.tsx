import { ArrowRight } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Link } from "react-router";

import { hero } from "@/features/home/data/hero";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        to={hero.actions.projects}
        className="inline-flex items-center gap-2 rounded-lg bg-(--color-ink) px-5 py-3 text-sm font-medium text-(--color-surface) transition-colors hover:opacity-90"
      >
        View Projects
        <ArrowRight size={16} />
      </Link>

      <a
        href={hero.actions.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
      >
        <SiGithub className="h-4 w-4" />
        GitHub
      </a>

      <a
        href={hero.actions.x}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
      >
        <SiX className="h-4 w-4" />
      </a>
    </div>
  );
}
