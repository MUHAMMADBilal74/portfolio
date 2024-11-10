
// components/Header.tsx
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 p-4 text-white">
    <nav className="flex justify-center gap-4">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  </header>
);

export default Header;

