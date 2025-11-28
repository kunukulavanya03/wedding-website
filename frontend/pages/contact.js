import Head from 'next/head';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Contact />
    </div>
  );
}