import { hero } from "@/features/home/data/hero";

export function HeroEvidence() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {hero.evidence.map((item) => (
        <li key={item} className="text-sm font-medium text-(--color-ink-muted)">
          {item}
        </li>
      ))}
    </ul>
  );
}
