import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
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

      <h1>Hello World!</h1>
    </Container>
  );
};

export default Home;
