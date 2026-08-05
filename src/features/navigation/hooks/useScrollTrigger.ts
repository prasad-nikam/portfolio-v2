import { useEffect, useState } from "react";

type UseScrollTriggerOptions = {
  offset?: number;
};

export function useScrollTrigger({ offset = 60 }: UseScrollTriggerOptions = {}) {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTriggered(window.scrollY > offset);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return isTriggered;
}
