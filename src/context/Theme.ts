import { createContext } from "react";

export type ThemeType = "light" | "dark";

export interface ThemeContextType{
theme : ThemeType;
themeToggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  themeToggle: () => {},
});