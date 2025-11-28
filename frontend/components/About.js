import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About us</h1>
      <p className="text-lg mb-8">We are a couple who loves to share our story with others.</p>
      <Image src="/images/about.jpg" alt="About us" width={400} height={300} />
    </div>
  );
}