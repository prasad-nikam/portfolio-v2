import { Projects } from "@/features/projects/components/Projects";
import { Hero } from "../components/hero/Hero";
import { Experience } from "@/features/experience/components/Experience";
import { About } from "@/features/about/components/About";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { Footer } from "@/features/footer/components/Footer";

function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
