# Intelligent Theme System

This project includes a comprehensive dark and light mode theme system built with Tailwind CSS 4 and React. The system provides intelligent color management, smooth transitions, and excellent accessibility features.

## Features

### 🎨 Intelligent Color Palette

- **HSL-based colors** for better color manipulation
- **Semantic color naming** for intuitive usage
- **Automatic dark mode adaptation** with proper contrast ratios
- **10-shade primary color system** (50-900)
- **Semantic colors** for success, warning, error, and info states

### 🌓 Theme Modes

- **Light Mode**: Clean, bright interface optimized for daytime use
- **Dark Mode**: Eye-friendly dark interface for low-light environments
- **System Mode**: Automatically follows user's system preference
- **Smooth transitions** between themes (300ms ease)

### 💾 Persistence

- **localStorage integration** to remember user preferences
- **Hydration-safe** implementation to prevent flash of unstyled content
- **System preference detection** with real-time updates

### ♿ Accessibility

- **WCAG 2.1 compliant** contrast ratios
- **Focus indicators** for keyboard navigation
- **Screen reader friendly** with proper ARIA labels
- **High contrast support** for better visibility

## Usage

### Basic Theme Toggle

```tsx
import { SimpleThemeToggle } from "@/components/ui/SimpleThemeToggle";

function Header() {
  return (
    <header className="bg-background border-b border-border">
      <SimpleThemeToggle />
    </header>
  );
}
```

### Advanced Theme Control

```tsx
import { useTheme } from "@/components/providers/ThemeProvider";

function ThemeSelector() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {resolvedTheme}</p>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
```

### Using Theme Colors

```tsx
// Background colors
<div className="bg-background">Main background</div>
<div className="bg-background-secondary">Secondary background</div>
<div className="bg-background-tertiary">Tertiary background</div>
<div className="bg-background-muted">Muted background</div>

// Text colors
<p className="text-foreground">Primary text</p>
<p className="text-foreground-secondary">Secondary text</p>
<p className="text-foreground-tertiary">Tertiary text</p>
<p className="text-foreground-muted">Muted text</p>

// Primary colors
<button className="bg-primary text-primary-foreground">Primary button</button>
<div className="bg-primary-100 text-primary-900">Light primary</div>
<div className="bg-primary-900 text-primary-100">Dark primary</div>

// Semantic colors
<div className="bg-success text-success-foreground">Success message</div>
<div className="bg-warning text-warning-foreground">Warning message</div>
<div className="bg-destructive text-destructive-foreground">Error message</div>
<div className="bg-info text-info-foreground">Info message</div>
```

## Color System

### Light Mode Colors

- **Background**: Pure white (#ffffff)
- **Foreground**: Near black (#171717)
- **Primary**: Blue (#3b82f6)
- **Secondary**: Light gray (#f8fafc)
- **Accent**: Purple (#8b5cf6)

### Dark Mode Colors

- **Background**: Near black (#0a0a0a)
- **Foreground**: Near white (#ededed)
- **Primary**: Light blue (#60a5fa)
- **Secondary**: Dark gray (#1e293b)
- **Accent**: Light purple (#a78bfa)

### Semantic Colors

- **Success**: Green (#16a34a)
- **Warning**: Orange (#ea580c)
- **Destructive**: Red (#dc2626)
- **Info**: Blue (#0ea5e9)

## Components

### ThemeProvider

The main provider that manages theme state and applies CSS classes.

```tsx
import { ThemeProvider } from "@/components/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

### ThemeToggle

A comprehensive theme selector with three options (Light, Dark, System).

### SimpleThemeToggle

A compact toggle that cycles through themes (Light → Dark → System → Light).

## CSS Custom Properties

The theme system uses CSS custom properties for all colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 221 83% 53%;
  /* ... more colors */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 217 91% 60%;
  /* ... more colors */
}
```

## Tailwind Configuration

The theme is configured in `tailwind.config.ts` with semantic color names:

```ts
theme: {
  extend: {
    colors: {
      background: {
        DEFAULT: "hsl(var(--background))",
        secondary: "hsl(var(--background-secondary))",
        // ...
      },
      // ... more color definitions
    }
  }
}
```

## Best Practices

1. **Use semantic color names** instead of hardcoded colors
2. **Test in both light and dark modes** during development
3. **Use the theme toggle** to verify contrast and readability
4. **Prefer opacity modifiers** for hover states (e.g., `hover:bg-primary/90`)
5. **Use the demo page** (`/theme-demo`) to test all color combinations

## Demo

Visit `/theme-demo` to see the theme system in action with:

- Color palette showcase
- UI component examples
- Interactive theme toggle
- Accessibility features demonstration

## Browser Support

- Modern browsers with CSS custom properties support
- Automatic fallback to light mode for older browsers
- Progressive enhancement approach

## Performance

- **CSS-only transitions** for smooth theme switching
- **No JavaScript required** for basic theme application
- **Minimal bundle size** impact
- **Efficient re-renders** with React context optimization

## Keeping Palette and CSS Aligned

> **IMPORTANT:**
> The color palette used in JS/TS (`src/styles/palette.ts`) and the CSS custom properties in `globals.css` must always be kept in sync. Any time you update a color in one, update the other to match. This ensures a single source of truth for both CSS and JS/TS color usage, and prevents visual inconsistencies.
>
> - Use `palette.ts` for all color values in JS/TS (e.g., for embedded component theming, JS-driven styles, etc.)
> - Use CSS variables in `globals.css` for all Tailwind and CSS-based styling.
>
> **When adding or changing a color:**
>
> 1. Update the value in both `globals.css` and `palette.ts`.
> 2. Double-check the mapping for both light and dark mode.
> 3. Test in both modes to ensure consistency.
