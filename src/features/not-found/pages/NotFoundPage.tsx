import { Container, Page, Section, Stack } from "@/shared/layouts";
import { Heading, Text } from "@/shared/typography";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <Page>
      <Section spacing="lg">
        <Container size="reading">
          <Stack gap="lg">
            <Text
              size="sm"
              weight="medium"
              className="tracking-wide text-(--color-ink-muted) uppercase"
            >
              404
            </Text>

            <Heading as="h1" size="display">
              The requested route doesn&apos;t exist.
            </Heading>

            <Text size="lg" tone="secondary">
              It may have been moved, removed, or never existed.
            </Text>

            <Link
              to="/"
              className="inline-flex w-fit text-(--color-interactive) transition-colors hover:text-(--color-ink)"
            >
              Return home →
            </Link>
          </Stack>
        </Container>
      </Section>
    </Page>
  );
}
