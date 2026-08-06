import { Projects } from "@/features/projects/components/Projects";
import { Hero } from "../components/hero/Hero";
import { Experience } from "@/features/experience/components/Experience";

function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
}

export default HomePage;
