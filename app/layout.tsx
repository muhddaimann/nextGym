import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LayoutProvider } from '@/contexts/useLayout';
import { ThemeProvider } from '@/contexts/useTheme';
import { Toaster } from '@/components/ui/toaster';
import LayoutWrapper from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gym App',
  description: 'Track your fitness journey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LayoutProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </LayoutProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
