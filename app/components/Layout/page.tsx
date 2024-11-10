import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Ensuring children is defined as ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>Header content</header>
      <main>{children}</main> {/* Render children here */}
      <footer>Footer content</footer>
    </div>
  );
};

export default Layout;

