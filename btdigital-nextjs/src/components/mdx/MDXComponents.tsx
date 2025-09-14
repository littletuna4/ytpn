'use client';
import type { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';

// Custom components for MDX
const CustomHeading = ({ 
  children, 
  level 
}: { 
  children: ReactNode; 
  level: number; 
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const baseClasses = "font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8";
  
  const sizeClasses = {
    1: "text-4xl",
    2: "text-3xl", 
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base"
  };

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level as keyof typeof sizeClasses]}`}>
      {children}
    </Tag>
  );
};

const CustomParagraph = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    {children}
  </p>
);

const CustomCode = ({ children, className }: { children: ReactNode; className?: string }) => {
  const isInline = !className;
  
  if (isInline) {
    return (
      <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  return (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
      <code className={`text-sm font-mono text-gray-800 dark:text-gray-200 ${className}`}>
        {children}
      </code>
    </pre>
  );
};

const CustomBlockquote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 italic text-justify">
    {children}
  </blockquote>
);

const CustomList = ({ children, ordered }: { children: ReactNode; ordered?: boolean }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  const classes = ordered 
    ? "list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify"
    : "list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify";
  
  return <ListTag className={classes}>{children}</ListTag>;
};

const CustomLink = ({ href, children }: { href?: string; children: ReactNode }) => (
  <a 
    href={href}
    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
  >
    {children}
  </a>
);

const CustomTable = ({ children }: { children: ReactNode }) => (
  <div className="overflow-x-auto mb-4">
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
      {children}
    </table>
  </div>
);

const CustomTableHead = ({ children }: { children: ReactNode }) => (
  <thead className="bg-gray-50 dark:bg-gray-800">
    {children}
  </thead>
);

const CustomTableBody = ({ children }: { children: ReactNode }) => (
  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
    {children}
  </tbody>
);

const CustomTableRow = ({ children }: { children: ReactNode }) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
    {children}
  </tr>
);

const CustomTableCell = ({ children, isHeader }: { children: ReactNode; isHeader?: boolean }) => {
  const Tag = isHeader ? 'th' : 'td';
  const classes = isHeader
    ? "border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100"
    : "border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300 text-justify";
  
  return <Tag className={classes}>{children}</Tag>;
};

// Export MDX components
export const mdxComponents: MDXComponents = {
  h1: (props) => <CustomHeading level={1} {...props} />,
  h2: (props) => <CustomHeading level={2} {...props} />,
  h3: (props) => <CustomHeading level={3} {...props} />,
  h4: (props) => <CustomHeading level={4} {...props} />,
  h5: (props) => <CustomHeading level={5} {...props} />,
  h6: (props) => <CustomHeading level={6} {...props} />,
  p: CustomParagraph,
  code: CustomCode,
  pre: ({ children }) => <>{children}</>,
  blockquote: CustomBlockquote,
  ul: (props) => <CustomList {...props} />,
  ol: (props) => <CustomList ordered {...props} />,
  li: ({ children }) => <li className="text-gray-700 dark:text-gray-300 text-justify">{children}</li>,
  a: CustomLink,
  table: CustomTable,
  thead: CustomTableHead,
  tbody: CustomTableBody,
  tr: CustomTableRow,
  th: (props) => <CustomTableCell isHeader {...props} />,
  td: CustomTableCell,
  hr: () => <hr className="my-8 border-gray-300 dark:border-gray-600" />,
  img: ({ src, alt, ...props }) => (
    <div className="flex justify-center mb-4">
      <img 
        src={src} 
        alt={alt}
        className="max-w-full h-auto rounded-lg shadow-sm"
        {...props}
      />
    </div>
  ),
};
