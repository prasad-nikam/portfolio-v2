import { motion } from "motion/react";
import { Link } from "react-router";

import { navigationItems } from "../data/navigation";
import { MobileMenuFooter } from "./MobileMenuFooter";

type MobileMenuContentProps = {
  open: boolean;
};

export function MobileMenuContent({ open }: MobileMenuContentProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        y: open ? 0 : -8,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      style={{
        pointerEvents: open ? "auto" : "none",
      }}
      className="z-99 flex flex-1 flex-col"
    >
      <nav className="flex-1 px-6 pt-10">
        <ul className="space-y-8">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="font-display text-4xl font-semibold tracking-tight text-(--color-ink) transition-colors hover:text-(--color-interactive)"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <MobileMenuFooter />
    </motion.div>
  );
}
