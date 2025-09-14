'use client';

import { ThemeToggle, SimpleThemeToggle, useTheme } from '@/components';

export default function ThemeDemoPage() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Theme System Demo
            </h1>
            <p className="text-xl text-foreground-secondary mb-8">
              Explore the intelligent theme system with light, dark, and system modes.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <ThemeToggle />
              <SimpleThemeToggle />
            </div>
            <div className="text-sm text-foreground-muted">
              Current theme: <span className="font-semibold text-foreground">{theme}</span> 
              {theme === 'system' && (
                <span className="ml-2">
                  (resolved: <span className="font-semibold text-foreground">{resolvedTheme}</span>)
                </span>
              )}
            </div>
          </div>

          {/* Color Palette Showcase */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Color Palette</h2>
            
            {/* Background Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Background Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-foreground">background</div>
                </div>
                <div className="bg-background-secondary border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-foreground">background-secondary</div>
                </div>
                <div className="bg-background-tertiary border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-foreground">background-tertiary</div>
                </div>
                <div className="bg-background-muted border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-foreground">background-muted</div>
                </div>
              </div>
            </div>

            {/* Foreground Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Foreground Colors</h3>
              <div className="bg-background-secondary rounded-lg p-6 space-y-2">
                <div className="text-foreground text-lg font-medium">Primary Text (foreground)</div>
                <div className="text-foreground-secondary text-base">Secondary Text (foreground-secondary)</div>
                <div className="text-foreground-tertiary text-sm">Tertiary Text (foreground-tertiary)</div>
                <div className="text-foreground-muted text-xs">Muted Text (foreground-muted)</div>
              </div>
            </div>

            {/* Primary Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-primary-50 border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-primary-900">primary-50</div>
                </div>
                <div className="bg-primary-200 border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-primary-900">primary-200</div>
                </div>
                <div className="bg-primary-500 border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-primary-foreground">primary-500</div>
                </div>
                <div className="bg-primary-700 border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-primary-foreground">primary-700</div>
                </div>
                <div className="bg-primary-900 border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-primary-foreground">primary-900</div>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-success text-success-foreground rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Success</div>
                </div>
                <div className="bg-warning text-warning-foreground rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Warning</div>
                </div>
                <div className="bg-destructive text-destructive-foreground rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Error</div>
                </div>
                <div className="bg-info text-info-foreground rounded-lg p-4 text-center">
                  <div className="text-sm font-medium">Info</div>
                </div>
              </div>
            </div>
          </section>

          {/* UI Component Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">UI Component Examples</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cards */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Cards</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Card Title</h4>
                    <p className="text-foreground-secondary">This is a card with proper theme colors.</p>
                  </div>
                  <div className="bg-background-secondary border border-border rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Secondary Card</h4>
                    <p className="text-foreground-secondary">This uses background-secondary.</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Buttons</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors">
                      Primary Button
                    </button>
                    <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md font-medium transition-colors">
                      Secondary Button
                    </button>
                    <button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-md font-medium transition-colors">
                      Destructive Button
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="text-primary hover:text-primary/80 px-4 py-2 font-medium transition-colors">
                      Text Button
                    </button>
                    <button className="border border-border hover:bg-background-secondary px-4 py-2 rounded-md font-medium transition-colors">
                      Outline Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Accessibility Features</h2>
            <div className="bg-background-secondary rounded-lg p-6">
              <ul className="space-y-2 text-foreground-secondary">
                <li>• <strong className="text-foreground">WCAG 2.1 compliant</strong> contrast ratios</li>
                <li>• <strong className="text-foreground">Focus indicators</strong> for keyboard navigation</li>
                <li>• <strong className="text-foreground">Screen reader friendly</strong> with proper ARIA labels</li>
                <li>• <strong className="text-foreground">High contrast support</strong> for better visibility</li>
                <li>• <strong className="text-foreground">Smooth transitions</strong> between themes (300ms ease)</li>
              </ul>
            </div>
          </section>

          {/* Performance Notes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Performance</h2>
            <div className="bg-background-secondary rounded-lg p-6">
              <ul className="space-y-2 text-foreground-secondary">
                <li>• <strong className="text-foreground">CSS-only transitions</strong> for smooth theme switching</li>
                <li>• <strong className="text-foreground">No JavaScript required</strong> for basic theme application</li>
                <li>• <strong className="text-foreground">Minimal bundle size</strong> impact</li>
                <li>• <strong className="text-foreground">Efficient re-renders</strong> with React context optimization</li>
                <li>• <strong className="text-foreground">localStorage integration</strong> to remember user preferences</li>
                <li>• <strong className="text-foreground">Hydration-safe</strong> implementation to prevent flash of unstyled content</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
