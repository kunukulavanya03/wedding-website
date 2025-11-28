import Link from 'next/link';

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Our blog</h1>
      <ul>
        <li>
          <Link href="/blog/post1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/post2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}