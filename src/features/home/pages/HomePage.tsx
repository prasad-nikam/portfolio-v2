import { Projects } from "@/features/projects/components/Projects";
import { Hero } from "../components/hero/Hero";
import { Experience } from "@/features/experience/components/Experience";
import { About } from "@/features/about/components/About";

function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <About />
    </div>
  );
}

export default HomePage;
