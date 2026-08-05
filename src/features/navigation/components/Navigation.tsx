import { AnimatePresence, motion } from "motion/react";

import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";
// import { useScrollTrigger } from "../hooks/useScrollTrigger";

export function Navigation() {
  const showNavigation = true;

  return (
    <>
      <AnimatePresence>
        {showNavigation && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
          >
            <NavigationDesktop />
            <NavigationMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
