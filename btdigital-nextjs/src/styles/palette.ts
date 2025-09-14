/**
 * Color palette for JavaScript/TypeScript usage
 * 
 * IMPORTANT: Keep this file in sync with the CSS custom properties in globals.css
 * Any time you update a color in one, update the other to match.
 */

export const palette = {
  // Light mode colors
  light: {
    // Background colors
    background: 'hsl(0 0% 100%)',
    backgroundSecondary: 'hsl(0 0% 98%)',
    backgroundTertiary: 'hsl(0 0% 96%)',
    backgroundMuted: 'hsl(0 0% 94%)',

    // Foreground colors
    foreground: 'hsl(240 10% 3.9%)',
    foregroundSecondary: 'hsl(240 5% 26%)',
    foregroundTertiary: 'hsl(240 4% 46%)',
    foregroundMuted: 'hsl(240 3% 64%)',

    // Primary colors - Blue
    primary: 'hsl(221 83% 53%)',
    primaryForeground: 'hsl(0 0% 98%)',
    primary50: 'hsl(213 100% 96%)',
    primary100: 'hsl(214 95% 93%)',
    primary200: 'hsl(213 97% 87%)',
    primary300: 'hsl(212 96% 78%)',
    primary400: 'hsl(213 94% 68%)',
    primary500: 'hsl(221 83% 53%)',
    primary600: 'hsl(217 91% 60%)',
    primary700: 'hsl(215 25% 27%)',
    primary800: 'hsl(217 33% 17%)',
    primary900: 'hsl(222 84% 5%)',

    // Secondary colors - Gray
    secondary: 'hsl(240 5% 96%)',
    secondaryForeground: 'hsl(240 6% 10%)',

    // Accent colors - Purple
    accent: 'hsl(262 83% 58%)',
    accentForeground: 'hsl(0 0% 98%)',

    // Semantic colors
    destructive: 'hsl(0 84% 60%)',
    destructiveForeground: 'hsl(0 0% 98%)',
    success: 'hsl(142 76% 36%)',
    successForeground: 'hsl(0 0% 98%)',
    warning: 'hsl(38 92% 50%)',
    warningForeground: 'hsl(0 0% 98%)',
    info: 'hsl(199 89% 48%)',
    infoForeground: 'hsl(0 0% 98%)',

    // UI elements
    border: 'hsl(240 6% 90%)',
    input: 'hsl(240 6% 90%)',
    ring: 'hsl(221 83% 53%)',
    card: 'hsl(0 0% 100%)',
    cardForeground: 'hsl(240 10% 3.9%)',
    popover: 'hsl(0 0% 100%)',
    popoverForeground: 'hsl(240 10% 3.9%)',
    muted: 'hsl(240 5% 96%)',
    mutedForeground: 'hsl(240 4% 46%)',
  },

  // Dark mode colors
  dark: {
    // Background colors
    background: 'hsl(240 10% 3.9%)',
    backgroundSecondary: 'hsl(240 6% 6%)',
    backgroundTertiary: 'hsl(240 5% 9%)',
    backgroundMuted: 'hsl(240 4% 12%)',

    // Foreground colors
    foreground: 'hsl(0 0% 98%)',
    foregroundSecondary: 'hsl(240 5% 84%)',
    foregroundTertiary: 'hsl(240 4% 74%)',
    foregroundMuted: 'hsl(240 3% 64%)',

    // Primary colors - Blue (adjusted for dark mode)
    primary: 'hsl(217 91% 60%)',
    primaryForeground: 'hsl(222 84% 5%)',
    primary50: 'hsl(222 84% 5%)',
    primary100: 'hsl(217 33% 17%)',
    primary200: 'hsl(215 25% 27%)',
    primary300: 'hsl(217 91% 60%)',
    primary400: 'hsl(213 94% 68%)',
    primary500: 'hsl(221 83% 53%)',
    primary600: 'hsl(217 91% 60%)',
    primary700: 'hsl(213 94% 68%)',
    primary800: 'hsl(212 96% 78%)',
    primary900: 'hsl(214 95% 93%)',

    // Secondary colors - Gray (adjusted for dark mode)
    secondary: 'hsl(240 4% 16%)',
    secondaryForeground: 'hsl(0 0% 98%)',

    // Accent colors - Purple (adjusted for dark mode)
    accent: 'hsl(263 70% 71%)',
    accentForeground: 'hsl(0 0% 98%)',

    // Semantic colors (adjusted for dark mode)
    destructive: 'hsl(0 63% 31%)',
    destructiveForeground: 'hsl(0 0% 98%)',
    success: 'hsl(142 71% 45%)',
    successForeground: 'hsl(0 0% 98%)',
    warning: 'hsl(38 92% 50%)',
    warningForeground: 'hsl(0 0% 98%)',
    info: 'hsl(199 89% 48%)',
    infoForeground: 'hsl(0 0% 98%)',

    // UI elements (adjusted for dark mode)
    border: 'hsl(240 4% 16%)',
    input: 'hsl(240 4% 16%)',
    ring: 'hsl(217 91% 60%)',
    card: 'hsl(240 10% 3.9%)',
    cardForeground: 'hsl(0 0% 98%)',
    popover: 'hsl(240 10% 3.9%)',
    popoverForeground: 'hsl(0 0% 98%)',
    muted: 'hsl(240 4% 16%)',
    mutedForeground: 'hsl(240 4% 74%)',
  },
} as const;

// Helper function to get current theme colors
export function getThemeColors(theme: 'light' | 'dark' = 'light') {
  return palette[theme];
}

// Helper function to get color by name
export function getColor(
  colorName: keyof typeof palette.light,
  theme: 'light' | 'dark' = 'light'
) {
  return palette[theme][colorName];
}

// Export individual color getters for convenience
export const getBackgroundColor = (theme: 'light' | 'dark' = 'light') => 
  getColor('background', theme);
export const getForegroundColor = (theme: 'light' | 'dark' = 'light') => 
  getColor('foreground', theme);
export const getPrimaryColor = (theme: 'light' | 'dark' = 'light') => 
  getColor('primary', theme);
export const getSecondaryColor = (theme: 'light' | 'dark' = 'light') => 
  getColor('secondary', theme);
