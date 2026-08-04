import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";

import { COLOR_SCHEME_QUERY } from "@/features/theme/constants";
import { getStoredTheme, setStoredTheme } from "@/features/theme/storage";
import type { ResolvedTheme, Theme, ThemeContextValue } from "@/features/theme/types";
import { ThemeContext } from "@/features/theme/context";

const resolveTheme = (theme: Theme): ResolvedTheme => {
  if (theme !== "system") {
    return theme;
  }

  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? "dark" : "light";
};

const applyTheme = (theme: ResolvedTheme) => {
  document.documentElement.dataset.theme = theme;
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme();
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(theme));

  useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);

    const updateTheme = () => {
      const resolved = resolveTheme(theme);

      setResolvedTheme(resolved);
      applyTheme(resolved);
    };

    updateTheme();

    if (theme !== "system") {
      return;
    }

    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, [theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    setStoredTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
