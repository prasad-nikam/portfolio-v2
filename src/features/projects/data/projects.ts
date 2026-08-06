import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    id: "lms",

    title: "Learning Management System",

    tagline:
      "A production-oriented LMS built around scalability, maintainability, and long-term growth.",

    overview:
      "Designed with a feature-based architecture, reusable UI system, and type-safe API layer to support students, instructors, and administrators through a single extensible platform.",

    architecture: [
      "Feature-based frontend architecture",
      "Shared design system",
      "Authentication & role-based authorization",
      "Scalable REST API",
      "Cloud storage integration",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudflare R2",
      "TanStack Query",
    ],

    image: "/projects/lms.webp",

    links: [
      {
        label: "Private Repository",
        href: "#",
      },
    ],
    featured: false,
  },

  {
    id: "telegram-bot",

    title: "Telegram Bot",

    tagline: "A production-ready automation bot built with Python for real-world workflows.",

    overview:
      "Focused on reliability, modular design, and automation. Built as a long-running service with clean architecture and maintainable command handling.",

    architecture: [
      "Modular command system",
      "Background task processing",
      "API integrations",
      "Error handling & logging",
      "Configuration-driven architecture",
    ],

    technologies: ["Python", "Telegram Bot API"],

    image: "/projects/telegram-bot.webp",

    links: [
      {
        label: "Private Repository",
        href: "#",
      },
    ],
    featured: false,
  },

  {
    id: "passionate",

    title: "Passionate",

    tagline:
      "A modern social media platform focused on meaningful interactions instead of endless feeds.",

    overview:
      "Built as a complete product with authentication, user profiles, posts, and social interactions while emphasizing scalable architecture over isolated features.",

    architecture: [
      "Full-stack application architecture",
      "Authentication & authorization",
      "Reusable component system",
      "RESTful API design",
      "Responsive UI",
    ],

    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],

    image: "/projects/passionate.webp",

    links: [
      {
        label: "GitHub",
        href: "#",
      },
    ],
    featured: false,
  },
];

export const miniProjects: Project[] = [
  {
    id: "hd-wallets",

    title: "HD Wallets",

    tagline: "Hierarchical deterministic wallet implementation.",

    overview: "",

    architecture: [],

    technologies: ["TypeScript", "Cryptography"],

    image: "/projects/hd-wallets.webp",

    links: [
      {
        label: "GitHub",
        href: "#",
      },
    ],
    featured: false,
  },

  {
    id: "hero",

    title: "Hero",

    tagline: "A collection of carefully crafted hero section experiments.",

    overview: "",

    architecture: [],

    technologies: ["React", "Motion", "Tailwind CSS"],

    image: "/projects/hero.webp",

    links: [
      {
        label: "GitHub",
        href: "#",
      },
    ],
    featured: false,
  },

  {
    id: "github-analytics",

    title: "GitHub Analytics",

    tagline: "Visualizing GitHub activity and repository insights.",

    overview: "",

    architecture: [],

    technologies: ["React", "GitHub API"],

    image: "/projects/github-analytics.webp",

    links: [
      {
        label: "GitHub",
        href: "#",
      },
    ],
    featured: false,
  },

  {
    id: "old-portfolio",

    title: "Portfolio v1",

    tagline: "The previous iteration of my personal website.",

    overview: "",

    architecture: [],

    technologies: ["React", "TypeScript"],

    image: "/projects/old-portfolio.webp",

    links: [
      {
        label: "GitHub",
        href: "#",
      },
    ],
    featured: false,
  },
];
