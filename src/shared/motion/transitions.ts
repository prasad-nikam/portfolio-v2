import type { Transition } from "motion/react";

export const instant: Transition = {
  duration: 0,
};

export const smooth: Transition = {
  duration: 0.45,
  ease: [0.2, 0.8, 0.2, 1],
};

export const snappy: Transition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1],
};

export const slow: Transition = {
  duration: 0.8,
  ease: [0.2, 0.8, 0.2, 1],
};

export const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 1,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 1,
};

export const stagger = (delay = 0.08): Transition => ({
  staggerChildren: delay,
});
