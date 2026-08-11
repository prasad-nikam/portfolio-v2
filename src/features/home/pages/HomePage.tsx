import { Projects } from "@/features/projects/components/Projects";
import { Hero } from "../components/hero/Hero";
import { Experience } from "@/features/experience/components/Experience";
import { About } from "@/features/about/components/About";
import { ContactSection } from "@/features/contact/components/ContactSection";

function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <ContactSection />
    </div>
  );
}

export default HomePage;
