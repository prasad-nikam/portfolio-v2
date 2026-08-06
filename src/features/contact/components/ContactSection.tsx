import { ContactActions } from "./ContactActions";
import { ContactAvailability } from "./ContactAvailability";
import { ContactFooter } from "./ContactFooter";
import { ContactHeader } from "./ContactHeader";

import { Container, Section } from "@/shared/layouts";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container className="space-y-20">
        <ContactHeader />

        <ContactActions />

        <ContactAvailability />

        <ContactFooter />
      </Container>
    </Section>
  );
}
