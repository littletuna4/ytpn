/**
 * Facebook Icon Component
 * 
 * Functional Requirements:
 * - Renders the Facebook logo as a theme-aware React component
 * - Integrates with the theme system for automatic light/dark mode support
 * - Supports customizable sizing and colors through the base Icon component
 * - Maintains accessibility with proper ARIA attributes
 * - Provides consistent styling with other icon components
 * - Uses semantic color classes for theme integration
 */

import React from 'react';
import { Icon, type IconProps } from './Icon';

export interface FacebookIconProps extends Omit<IconProps, 'children'> {
  /**
   * Whether to show the Facebook text along with the icon
   * @default false
   */
  showText?: boolean;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
  ...props
}) => {
  return (
    <Icon {...props}>
      <g>
        <path d="M26,1H5C3.3,1,2,2.3,2,4v21c0,1.7,1.3,3,3,3h10.5V17.5h-3v-3.7h3v-3.1c0-3.2,1.8-5.5,5.6-5.5l2.7,0v3.9h-1.8
          c-1.5,0-2.1,1.1-2.1,2.2v2.5h3.9L23,17.5h-3V28h6c1.7,0,3-1.3,3-3V4C29,2.3,27.7,1,26,1z"/>
      </g>
    </Icon>
  );
};

export default FacebookIcon;
