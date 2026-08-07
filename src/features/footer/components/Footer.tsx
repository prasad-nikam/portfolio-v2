import { footer } from "../data/footer";

import { FooterMeta } from "./FooterMeta";

import { Container } from "@/shared/layouts";

export function Footer() {
  return (
    <footer className="border-t border-(--color-border)">
      <Container>
        <FooterMeta footer={footer} />
      </Container>
    </footer>
  );
}
