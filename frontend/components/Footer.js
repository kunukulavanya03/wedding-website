import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white p-4">
      <p>
        &copy; 2024 Wedding Website
      </p>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}