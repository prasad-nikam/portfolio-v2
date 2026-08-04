export type Theme = "light" | "dark" | "system";

export type ResolvedTheme = Exclude<Theme, "system">;

export interface ThemeContextValue {
  /**
   * User's selected preference.
   * Can be "system".
   */
  theme: Theme;

  /**
   * Actual theme currently applied to the document.
   * Always "light" or "dark".
   */
  resolvedTheme: ResolvedTheme;

  /**
   * Update the user's theme preference.
   */
  setTheme: (theme: Theme) => void;

  /**
   * Toggle between light and dark.
   * If the current preference is "system",
   * toggle based on the resolved theme.
   */
  toggleTheme: () => void;
}
