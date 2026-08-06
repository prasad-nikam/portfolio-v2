import { Heading, Text } from "@/shared/typography";

export function ProjectsHeader() {
  return (
    <header className="max-w-3xl">
      <Heading as="h2" size="h2" className="text-balance">
        Selected Work
      </Heading>

      <Text tone="secondary" size="lg" className="mt-6 max-w-2xl text-pretty">
        A selection of systems I've designed and built, with an emphasis on architecture,
        scalability, and long-term maintainability.
      </Text>
    </header>
  );
}
