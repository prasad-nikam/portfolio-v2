import { navigationItems } from "../data/navigation";
import { NavigationItem } from "./NavigationItem";
import { NavigationThemeToggle } from "./NavigationThemeToggle";

export function NavigationDesktop() {
  return (
    // top-8 ()
    <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 lg:block">
      <div className="flex items-center gap-6 rounded-3xl border border-(--color-border)/60 bg-(--color-surface)/72 px-6 py-3.5 shadow-xs backdrop-blur-xl">
        <span className="font-display text-lg font-semibold tracking-tight">PN</span>

        <ul className="flex items-center gap-6">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavigationItem item={item} />
            </li>
          ))}
        </ul>

        <NavigationThemeToggle />
      </div>
    </nav>
  );
}
