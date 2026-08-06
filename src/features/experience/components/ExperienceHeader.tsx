import { Heading, Text } from "@/shared/typography";

export function ExperienceHeader() {
  return (
    <header className="max-w-3xl">
      <Heading as="h2" size="h2" className="text-balance">
        Experience
      </Heading>

      <Text tone="secondary" size="lg" className="mt-6 max-w-2xl text-pretty">
        The roles and experiences that shaped my approach to building production-ready software and
        solving real-world problems.
      </Text>
    </header>
  );
}
