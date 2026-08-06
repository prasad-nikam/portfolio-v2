export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;

  title: string;
  tagline: string;

  overview: string;

  architecture: string[];

  technologies: string[];

  image: string;

  links: ProjectLink[];

  featured: boolean;
};
