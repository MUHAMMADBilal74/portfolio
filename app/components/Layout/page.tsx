// app/components/Layout/page.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;  // This defines the type for the children prop
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Any layout-related elements */}
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;

