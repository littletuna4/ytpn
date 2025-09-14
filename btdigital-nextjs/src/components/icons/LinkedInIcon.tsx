/**
 * LinkedIn Icon Component
 * 
 * Functional Requirements:
 * - Renders the LinkedIn logo as a theme-aware React component
 * - Integrates with the theme system for automatic light/dark mode support
 * - Supports customizable sizing and colors through the base Icon component
 * - Maintains accessibility with proper ARIA attributes
 * - Provides consistent styling with other icon components
 * - Uses semantic color classes for theme integration
 */

import React from 'react';
import { Icon, type IconProps } from './Icon';

export interface LinkedInIconProps extends Omit<IconProps, 'children'> {
  /**
   * Whether to show the LinkedIn text along with the icon
   * @default false
   */
  showText?: boolean;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({
  ...props
}) => {
  return (
    <Icon {...props}>
      <g>
        <g>
          <path d="M8.3,3.7c0,1.4-0.9,2.6-2.7,2.6C4,6.3,3,5.2,3,3.7C3,2.3,4,1,5.7,1S8.3,2.2,8.3,3.7z M3,25V7.7h5.3V25H3z"/>
          <path d="M11,13.6c0-2.1-0.1-3.8-0.1-5.3h4.8l0.2,2.3H16C16.7,9.5,18.3,8,21.1,8c3.4,0,5.9,2.3,5.9,7.1V25h-5.3v-9.1
            c0-2.1-0.8-3.7-2.7-3.7c-1.4,0-2.1,1.1-2.5,2.1c-0.1,0.3-0.2,0.8-0.2,1.3V25H11V13.6z"/>
        </g>
      </g>
    </Icon>
  );
};

export default LinkedInIcon;
