// app/components/Layout/page.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;  // children prop must be typed as ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Any layout-related elements */}
      <header>Header</header>
      <main>{children}</main>  {/* Render children here */}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;  // Ensure default export

