import { Link } from "react-router";

import { NavigationThemeToggle } from "./NavigationThemeToggle";

export function MobileMenuFooter() {
  return (
    <footer className="border-t border-(--color-border) px-6 py-8">
      <div className="space-y-5">
        <Link
          to="#"
          className="block text-base font-medium text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
        >
          GitHub
        </Link>

        <Link
          to="#"
          className="block text-base font-medium text-(--color-ink-secondary) transition-colors hover:text-(--color-ink)"
        >
          X
        </Link>

        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-medium text-(--color-ink-secondary)">Theme</span>

          <NavigationThemeToggle />
        </div>
      </div>
    </footer>
  );
}
