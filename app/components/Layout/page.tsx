// components/Layout.tsx
import { ReactNode } from 'react';
import Header from '../Header/page';
import Footer from '../Footer/page';

const Layout = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8 bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
  
  export default Layout;
