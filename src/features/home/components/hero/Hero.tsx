import { Container, Section } from "@/shared/layouts";

import { HeroContent } from "./HeroContent";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <Section id="home" spacing="none" className="min-h-svh overflow-hidden">
      <Container>
        <div className="grid min-h-svh items-center gap-12 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="order-1 lg:-translate-y-4">
            <HeroContent />
          </div>

          <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
            <HeroPortrait />
          </div>
        </div>
      </Container>
    </Section>
  );
}
