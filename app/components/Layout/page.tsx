// app/components/Layout/page.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;  // Make sure children are typed correctly
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Layout elements, such as a header and footer */}
      <header>Header</header>
      <main>{children}</main> {/* This renders the children components */}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout; // Ensure the default export

