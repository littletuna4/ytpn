'use client';

import { useTheme } from '@/components/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          theme === 'light'
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
        }`}
        aria-label="Light mode"
      >
        ☀️
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          theme === 'dark'
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
        }`}
        aria-label="Dark mode"
      >
        🌙
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          theme === 'system'
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary'
        }`}
        aria-label="System mode"
      >
        💻
      </button>
    </div>
  );
}
