import { Link } from "react-router";

type NavigationItemProps = {
  item: {
    label: string;
    href: string;
  };
};

export function NavigationItem({ item }: NavigationItemProps) {
  return (
    <Link
      to={item.href}
      className="relative text-sm font-medium text-(--color-ink-secondary) transition-colors duration-200 hover:text-(--color-ink)"
    >
      {item.label}
    </Link>
  );
}
