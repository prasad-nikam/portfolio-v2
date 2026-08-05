import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { MobileMenuContent } from "./MobileMenuContent";

const transition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function NavigationMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      transition={transition}
      className="fixed inset-0 z-50 lg:hidden"
      animate={{
        pointerEvents: open ? "auto" : "none",
      }}
    >
      {/* Surface */}
      <motion.div
        layout
        transition={transition}
        className="absolute inset-0 z-0 bg-(--color-surface) backdrop-blur-md"
        animate={{
          opacity: open ? 1 : 0,
        }}
      />

      {/* Floating header */}
      <motion.header
        transition={transition}
        className="pointer-events-auto absolute inset-x-0 top-0 z-10 border-b border-(--color-border) bg-(--color-surface)/72 shadow-xs backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-3">
          <span className="font-display text-lg font-semibold tracking-tight">
            {open ? "Prasad Nikam" : "PN"}
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="relative flex size-10 items-center justify-center rounded-full transition-colors hover:bg-(--color-surface-secondary)"
          >
            <motion.div
              animate={{
                opacity: open ? 0 : 1,
                rotate: open ? -90 : 0,
                scale: open ? 0.8 : 1,
              }}
              transition={transition}
              className="absolute"
            >
              <Menu size={20} />
            </motion.div>

            <motion.div
              animate={{
                opacity: open ? 1 : 0,
                rotate: open ? 0 : 90,
                scale: open ? 1 : 0.8,
              }}
              transition={transition}
              className="absolute"
            >
              <X size={20} />
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Menu */}
      <motion.div
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : 12,
        }}
        transition={{
          ...transition,
          delay: open ? 0.05 : 0,
        }}
        className="flex h-full flex-col pt-20"
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <MobileMenuContent open={open} />
      </motion.div>
    </motion.nav>
  );
}
