import { hero } from "@/features/home/data/hero";
import { Stack } from "@/shared/layouts";
import { Heading, Text } from "@/shared/typography";

import { HeroActions } from "./HeroActions";
import { HeroEvidence } from "./HeroEvidence";

export function HeroContent() {
  return (
    <Stack gap="xl" className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-2xl">
      <Stack gap="lg">
        <Text
          as="p"
          size="sm"
          weight="semibold"
          className="tracking-[0.18em] text-(--color-ink-secondary) uppercase"
        >
          {hero.name}
        </Text>

        <Heading as="h1" size="display" className="mt-8 max-w-none text-balance sm:max-w-[12ch]">
          {hero.headline}
        </Heading>

        <Text
          size="lg"
          tone="secondary"
          className="mb-5 max-w-none text-lg leading-8 sm:max-w-[60ch]"
        >
          {hero.description}
        </Text>
      </Stack>

      <HeroActions />

      <HeroEvidence />
    </Stack>
  );
}
