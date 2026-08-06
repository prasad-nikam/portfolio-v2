import { Text } from "@/shared/typography";

export function AboutStory() {
  return (
    <section aria-labelledby="about-story" className="max-w-4xl">
      <Text id="about-story" size="lg" className="max-w-3xl leading-relaxed text-pretty">
        I enjoy building software that remains understandable long after the first release. For me,
        maintainability isn't an afterthought—it's part of the product itself. I naturally gravitate
        toward modular architectures, reusable abstractions, and systems that become easier to
        extend as they grow.
      </Text>

      <Text tone="secondary" size="lg" className="mt-8 max-w-3xl text-pretty">
        Most of my learning comes from building. I like exploring unfamiliar technologies,
        rebuilding projects with better architectures, and refining developer workflows to
        understand not just what works, but why it scales. Every project becomes an opportunity to
        improve both the software and the way I think about engineering.
      </Text>
    </section>
  );
}
