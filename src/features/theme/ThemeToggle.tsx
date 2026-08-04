import { Moon, Sun } from "lucide-react";

import { useTheme } from "./useTheme";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-(--color-ink-secondary) transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:bg-(--color-surface-secondary) hover:text-(--color-ink) focus-visible:ring-2 focus-visible:ring-(--color-focus-ring) focus-visible:outline-none"
    >
      {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
    </button>
  );
}
