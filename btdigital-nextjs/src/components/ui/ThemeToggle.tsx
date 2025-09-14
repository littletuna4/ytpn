"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <button
        aria-label="Theme toggle"
        className="rounded-full p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        type="button"
        disabled
      >
        <Sun className="h-5 w-5" />
      </button>
    );
  }

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
