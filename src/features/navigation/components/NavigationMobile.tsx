import { Menu } from "lucide-react";

export function NavigationMobile() {
  return (
    <nav className="fixed top-4 right-0 left-0 z-50 lg:hidden">
      <div className="mx-auto flex max-w-(--container-xl) items-center justify-between px-6">
        <button
          type="button"
          className="font-display text-lg font-semibold tracking-tight text-(--color-ink)"
        >
          PN
        </button>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex size-10 items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface)/80 backdrop-blur-md transition-colors hover:border-(--color-border-strong)"
        >
          <Menu size={18} />
        </button>
      </div>
    </nav>
  );
}
