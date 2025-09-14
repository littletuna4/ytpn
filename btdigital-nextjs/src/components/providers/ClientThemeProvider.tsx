'use client';

import { ThemeProvider } from './ThemeProvider';

interface ClientThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system";
}

/**
 * Client-side wrapper for ThemeProvider to handle server/client component boundary
 * 
 * Functional Requirements:
 * - Wraps ThemeProvider to ensure it only runs on the client side
 * - Prevents createContext errors in server components
 * - Maintains theme functionality across the application
 * - Provides proper hydration handling
 */
export function ClientThemeProvider({ 
  children, 
  defaultTheme = "system" 
}: ClientThemeProviderProps) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
}
