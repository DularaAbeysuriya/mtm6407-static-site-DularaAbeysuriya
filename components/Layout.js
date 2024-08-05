import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/portfolio">Portfolio</Link> | 
        <Link href="/blog">Blog</Link> | 
        <Link href="/gallery">Gallery</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
