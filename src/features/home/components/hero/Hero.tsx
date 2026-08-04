import { Container, Section } from "@/shared/layouts";

import { HeroContent } from "./HeroContent";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="grid min-h-[calc(100svh-var(--header-height))] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="order-1">
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
