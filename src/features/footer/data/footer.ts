import type { Footer } from "../types";

export const footer: Footer = {
  message: "Designed & engineered by Prasad Nikam.",

  links: [
    {
      label: "View Source",
      href: "https://github.com/prasad-nikam/portfolio-v2",
      external: true,
    },
  ],

  year: new Date().getFullYear(),
};
