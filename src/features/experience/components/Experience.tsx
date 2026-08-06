import { experiences } from "../data/experience";

import { Education } from "./Education";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceItem } from "./ExperienceItem";

import { Container, Section } from "@/shared/layouts";

export function Experience() {
  return (
    <Section id="experience">
      <Container className="space-y-24">
        <ExperienceHeader />

        <div className="space-y-32">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        <Education />
      </Container>
    </Section>
  );
}
