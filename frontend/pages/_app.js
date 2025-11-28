import Head from 'next/head';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Wedding Website</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}