'use client';

import { useEffect, useState } from 'react';
import DesktopLayout from './layoutDesktop';
import MobileLayout from './layoutMobile';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="flex min-h-screen">
      {isMobile ? <MobileLayout /> : <DesktopLayout>{children}</DesktopLayout>}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
