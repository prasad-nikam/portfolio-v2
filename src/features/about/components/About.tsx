import { AboutHeader } from "./AboutHeader";
import { AboutStory } from "./AboutStory";
import { Principles } from "./Principles";

import { Container, Section } from "@/shared/layouts";

export function About() {
  return (
    <Section id="about">
      <Container className="space-y-16">
        <AboutHeader />

        <AboutStory />

        <Principles />
      </Container>
    </Section>
  );
}
