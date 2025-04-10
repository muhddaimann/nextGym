'use client';

import {
  Dumbbell, Home, ActivitySquare, Compass, User,
  Sun, Moon, Menu,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/useTheme';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/progress', icon: ActivitySquare, label: 'Progress' },
  { href: '/explore', icon: Compass, label: 'Explore' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export default function MobileLayout() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 flex items-center justify-between">
        {/* Left - Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Open Menu"
              className="rounded-md border border-border bg-card hover:bg-card/70"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
                  <Dumbbell className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  <span className="text-primary">Next</span>
                  <span className="text-secondary">Gym</span>
                </span>
              </div>

              <nav className="flex flex-col gap-2">
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
                          : 'text-secondary hover:bg-secondary hover:text-secondary-foreground'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="mt-6 flex items-center gap-2 text-foreground hover:bg-primary hover:text-primary-foreground"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </Button>
          </SheetContent>
        </Sheet>

        {/* Center - Icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
            <Dumbbell className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>

        {/* Right - Theme Toggle */}
        <Button
          onClick={toggleTheme}
          size="icon"
          variant="ghost"
          className="rounded-md border border-border bg-card hover:bg-card/70"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
        </Button>
      </header>
    </>
  );
}
