import type { Education, Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "frappe-intern",

    role: "Frappe Developer Intern",

    company: "Aaimaa Web Solutions",

    period: "Mar 2024 – Apr 2024",

    location: "Pune, India",

    overview:
      "Built production-oriented ERP solutions using the Frappe Framework, contributing to both a Learning Management System and an e-commerce platform while working across backend APIs, integrations, and core application features.",

    highlights: [
      "Developed RESTful APIs using the Frappe Framework.",
      "Built examination and assessment modules for the LMS.",
      "Developed an e-commerce system for educational products.",
      "Integrated Razorpay and Shiprocket APIs.",
      "Focused on scalability, reliability, and maintainability.",
    ],

    // technologies: ["Python", "Frappe", "MariaDB", "REST API", "Razorpay", "Shiprocket"],
  },

  {
    id: "msc",

    role: "Assistant – Export Documentation",

    company: "Mediterranean Shipping Company (MSC)",

    period: "Jul 2024 – Jan 2026",

    location: "Pune, India",

    overview:
      "Worked in a high-volume operational environment managing international shipping documentation, quality assurance, hazardous cargo compliance, and customer-critical workflows requiring precision and consistency.",

    highlights: [
      "Managed export documentation for international shipments.",
      "Handled hazardous cargo documentation and compliance.",
      "Processed priority customer bookings.",
      "Conducted quality audits to ensure documentation accuracy.",
      "Trained new team members on operational workflows.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "msc-cs",

    degree: "M.Sc. Computer Science",

    institution: "G H Raisoni College, Pune",

    period: "2024 – Present",

    description: "Currently pursuing postgraduate studies.",
  },

  {
    id: "bsc-cs",

    degree: "B.Sc. Computer Science",

    institution: "New Arts, Commerce and Science College, Ahmednagar",

    period: "2021 – 2024",

    description: "Graduated with a CGPA of 8.90.",
  },
];
