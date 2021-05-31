import Head from 'next/head';
import Header from '../components/header/Header';
import HomeLayout from '../components/home/HomeLayout';

export default function Home() {
  return (
    <main>
      <Header />
      <HomeLayout />
    </main>
  );
}
