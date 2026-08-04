import type { Theme } from "./types";

export const THEMES = ["light", "dark", "system"] as const;

export const DEFAULT_THEME: Theme = "system";

export const STORAGE_KEY = "theme";

export const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
