import "./globals.css";
import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import { ClientThemeProvider } from "@/components/providers/ClientThemeProvider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "YTPN",
  description: "YTPN is a technology service provider offering software engineering, data science and support services.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "YTPN",
  description: "YTPN is a technology service provider offering software engineering, data science and support services.",
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const isDark = theme === 'dark' || 
                    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to system preference if localStorage fails
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <ClientThemeProvider defaultTheme="system">
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
    
  );
}
