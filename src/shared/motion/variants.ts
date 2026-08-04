import type { Variants } from "motion/react";

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  visible: {},
};
