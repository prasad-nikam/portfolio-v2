export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Footer = {
  message: string;
  links: FooterLink[];
  year: number;
};
