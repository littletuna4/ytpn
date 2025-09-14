"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";
import { toast } from "sonner";

const themes = ["light", "dark", "system"] as const;
const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};
const themeLabels = {
  light: "Light mode",
  dark: "Dark mode",
  system: "System mode",
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Find the next theme in the cycle
  const nextTheme = () => {
    const idx = themes.indexOf(theme ?? "system");
    return themes[(idx + 1) % themes.length];
  };

  const handleToggle = () => {
    const newTheme = nextTheme();
    setTheme(newTheme);
    toast.success(`${themeLabels[newTheme]} enabled`);
  };

  const Icon = themeIcons[theme ?? "system"];

  return (
    <button
      onClick={handleToggle}
      aria-label={themeLabels[theme ?? "system"]}
      className="rounded-full p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      type="button"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
