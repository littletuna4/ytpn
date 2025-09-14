'use client';

import { MDXProvider } from './MDXProvider';

interface ClientMDXProviderProps {
  children: React.ReactNode;
}

/**
 * Client-side wrapper for MDXProvider to handle server/client component boundary
 * 
 * Functional Requirements:
 * - Wraps MDXProvider to ensure it only runs on the client side
 * - Prevents createContext errors in server components from @mdx-js/react
 * - Maintains MDX functionality across the application
 * - Provides proper hydration handling for MDX content
 */
export function ClientMDXProvider({ children }: ClientMDXProviderProps) {
  return (
    <MDXProvider>
      {children}
    </MDXProvider>
  );
}
