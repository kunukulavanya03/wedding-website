import Head from 'next/head';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Blog />
    </div>
  );
}