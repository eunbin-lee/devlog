import Head from 'next/head';
import HomeLayout from '../components/home/HomeLayout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devlog</title>
        <meta name="description" content="devlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeLayout />
      </main>
    </div>
  );
}
