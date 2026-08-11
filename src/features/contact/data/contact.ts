import { FileText, Mail, MessageCircleMore } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import type { Contact } from "../types";

export const contact: Contact = {
  heading: "Let's build something reliable.",

  description:
    "I'm currently looking for opportunities where I can contribute to production software, solve meaningful engineering problems, and continue learning from experienced teams. If my work resonates with what you're building, I'd be happy to connect.",

  actions: [
    {
      label: "Email",
      href: "mailto:prasadnikam@example.com",
      icon: Mail,
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: FileText,
    },
    {
      label: "GitHub",
      href: "https://github.com/prasad-nikam",
      icon: SiGithub,
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prasadnikam52/",
      icon: MessageCircleMore,
      external: true,
    },
  ],

  availability: [
    {
      label: "Currently",
      value: "Open to Software Engineering opportunities",
    },
    {
      label: "Location",
      value: "Pune, India",
    },
    {
      label: "Preferred",
      value: "Remote • Hybrid • Relocation",
    },
  ],

  footer: "Thanks for taking the time to explore my work.",
};
