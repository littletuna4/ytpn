"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function SimpleThemeToggle() {
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
        className="rounded-md p-2 hover:bg-background-secondary transition-colors"
        aria-label="Theme toggle"
        disabled
      >
        <Sun className="h-5 w-5 text-foreground" />
      </button>
    );
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 hover:bg-background-secondary transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
      data-oid="_5ikfpw"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-foreground" data-oid="1fys5sh" />
      ) : theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground" data-oid="9lzhkv-" />
      ) : (
        <Sun className="h-5 w-5 text-foreground" data-oid="mis3jh." />
      )}
    </button>
  );
}
