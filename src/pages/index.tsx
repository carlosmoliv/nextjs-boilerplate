import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image
        src="/logo-white.png"
        alt="iNova Logo"
        layout="fixed"
        height={100}
        width={180}
      />

      <Link href="/login">
        <article className="prose lg:prose-sm mt-4">
          <h2 className="cursor-pointer p-5 bg-purple-600 rounded-md">
            Ir para login
          </h2>
        </article>
      </Link>
    </Container>
  );
};

export default Home;
