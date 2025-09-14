/**
 * Base Icon Component
 * 
 * Functional Requirements:
 * - Provides consistent styling and sizing for all icon components
 * - Integrates with the theme system for automatic light/dark mode support
 * - Supports customizable colors through theme-aware CSS classes
 * - Maintains accessibility with proper ARIA attributes
 * - Provides responsive sizing options
 * - Supports custom className overrides while maintaining theme consistency
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Size of the icon. Can be a number (pixels) or a predefined size string.
   * @default "default"
   */
  size?: number | 'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl';
  
  /**
   * Color variant for the icon. Uses theme-aware colors.
   * @default "current"
   */
  color?: 'current' | 'primary' | 'secondary' | 'muted' | 'destructive' | 'success' | 'warning' | 'info';
  
  /**
   * Additional CSS classes to apply to the icon
   */
  className?: string;
  
  /**
   * Whether the icon should inherit the current text color
   * @default true
   */
  inheritColor?: boolean;
}

const sizeMap = {
  xs: 12,
  sm: 16,
  default: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
} as const;

const colorMap = {
  current: 'text-current',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted-foreground',
  destructive: 'text-destructive',
  success: 'text-success',
  warning: 'text-warning',
  info: 'text-info',
} as const;

export const Icon: React.FC<IconProps> = ({
  size = 'default',
  color = 'current',
  className,
  inheritColor = true,
  children,
  ...props
}) => {
  const sizeValue = typeof size === 'number' ? size : sizeMap[size];
  const colorClass = inheritColor ? colorMap[color] : '';
  
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 30 30"
      fill="currentColor"
      className={cn(
        'inline-block transition-colors duration-300',
        colorClass,
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
