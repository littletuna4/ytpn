/**
 * Utility Functions
 * 
 * Functional Requirements:
 * - Provides common utility functions for the application
 * - Includes className merging utility for conditional styling
 * - Supports Tailwind CSS class name conflicts resolution
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge
 * Handles conditional classes and resolves Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
