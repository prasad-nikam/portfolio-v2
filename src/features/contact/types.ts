import type { LucideIcon } from "lucide-react";

export type ContactAction = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export type ContactAvailabilityItem = {
  label: string;
  value: string;
};

export type Contact = {
  heading: string;
  description: string;
  actions: ContactAction[];
  availability: ContactAvailabilityItem[];
  footer: string;
};
