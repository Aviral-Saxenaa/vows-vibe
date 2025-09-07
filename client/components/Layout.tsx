import { ReactNode } from 'react';
import { MainNavigation } from './MainNavigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile: Full-width navigation */}
      <div className="lg:hidden w-full">
        <MainNavigation />
      </div>
      
      {/* Desktop: Sidebar navigation */}
      <div className="hidden lg:block">
        <MainNavigation />
      </div>
      
      {/* Main content area - hidden on mobile when showing nav, full width on desktop */}
      <div className="hidden lg:flex flex-1 flex-col">
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
