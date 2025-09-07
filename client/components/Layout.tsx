import { ReactNode } from 'react';
import { MainNavigation } from './MainNavigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Desktop: Sidebar navigation */}
      <div className="hidden lg:block lg:w-80 flex-shrink-0">
        <MainNavigation />
      </div>

      {/* Mobile: Show navigation in a more compact way or full screen */}
      <div className="lg:hidden">
        <MainNavigation />
      </div>

      {/* Main content area - visible on desktop */}
      <div className="hidden lg:flex flex-1 flex-col bg-white">
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
