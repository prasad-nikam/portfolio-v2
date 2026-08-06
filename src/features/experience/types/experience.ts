export type Experience = {
  id: string;

  role: string;
  company: string;

  period: string;
  location: string;

  overview: string;

  highlights: string[];

  technologies?: string[];
};

export type Education = {
  id: string;

  degree: string;
  institution: string;

  period: string;

  description?: string;
};
