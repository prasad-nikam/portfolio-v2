import { DEFAULT_THEME, STORAGE_KEY, THEMES } from "./constants";
import type { Theme } from "./types";

const isTheme = (value: unknown): value is Theme => {
  return typeof value === "string" && (THEMES as readonly string[]).includes(value);
};

export const getStoredTheme = (): Theme => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);

    return isTheme(value) ? value : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

export const setStoredTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors (private browsing, disabled storage, etc.)
  }
};

export const clearStoredTheme = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors.
  }
};
