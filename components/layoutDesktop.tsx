'use client';

import { ReactNode, useState } from 'react';
import { useTheme } from '@/contexts/useTheme';
import { useLayout } from '@/contexts/useLayout';
import {
  Dumbbell, Home, ActivitySquare, Compass, User,
  Sun, Moon, ChevronLeft, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/progress', icon: ActivitySquare, label: 'Progress' },
  { href: '/explore', icon: Compass, label: 'Explore' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export default function DesktopLayout({ children }: { children: ReactNode }) {
  const { showLayout, setShowLayout } = useLayout();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  if (!showLayout) return null;

  return (
    <aside className={cn(
      'hidden md:flex relative flex-col border-r bg-background py-6 transition-all duration-200',
      collapsed ? 'w-20 items-center px-2' : 'w-52 px-4'
    )}>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
          <Dumbbell className="h-6 w-6 text-primary-foreground" />
        </div>
        {!collapsed && (
          <span className="text-lg font-semibold text-foreground">
            <span className="text-primary">Next</span>
            <span className="text-secondary">Gym</span>
          </span>
        )}
      </div>

      <nav className="flex flex-col gap-2 w-full mb-6">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-secondary hover:bg-secondary hover:text-foreground',
                collapsed && 'justify-center px-0'
              )}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && label}
            </Link>
          );
        })}
      </nav>

      <Button
        onClick={toggleTheme}
        variant="ghost"
        size="sm"
        className={cn(
          'mt-auto flex items-center gap-2 hover:bg-primary hover:text-primary-foreground',
          collapsed && 'justify-center'
        )}
      >
        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        {!collapsed && (theme === 'dark' ? 'Light mode' : 'Dark mode')}
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-1/2 -translate-y-1/2 right-[-16px] border border-border bg-primary rounded-full shadow-sm hover:bg-secondary z-10"
      >
        {collapsed ? <ChevronRight className="w-4 h-4 text-background" /> : <ChevronLeft className="w-4 h-4 text-background" />}
      </Button>
    </aside>
  );
}

