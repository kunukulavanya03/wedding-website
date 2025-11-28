import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to our wedding website!</h1>
        <p className="text-lg mb-8">We are excited to share our special day with you.</p>
        <Link href="/about">
          <a className="bg-primary text-white py-2 px-4 rounded">Learn more</a>
        </Link>
      </div>
    </div>
  );
}