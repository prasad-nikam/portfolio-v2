import { contact } from "../data/contact";

import { ContactAction } from "./ContactAction";

export function ContactActions() {
  return (
    <section aria-label="Contact methods" className="space-y-3">
      {contact.actions.map((action) => (
        <ContactAction key={action.label} action={action} />
      ))}
    </section>
  );
}
