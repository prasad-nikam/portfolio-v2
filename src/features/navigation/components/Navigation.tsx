import { motion } from "motion/react";
import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

export function Navigation() {
  const showNavigation = useScrollTrigger();

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50"
        animate={{
          opacity: showNavigation ? 1 : 0,
          y: showNavigation ? 0 : -12,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          pointerEvents: showNavigation ? "auto" : "none",
        }}
      >
        <NavigationDesktop />
        <NavigationMobile />
      </motion.div>
    </>
  );
}
