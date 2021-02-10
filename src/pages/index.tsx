import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useSpring, animated } from 'react-spring';
import useMeasure from 'src/hooks/useMeasure';

import { Container } from '../styles/pages/Home';

import img from 'src/assets/img/logo-white.png';

const Home: React.FC = () => {
  const router = useRouter();

  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();

  const props = useSpring({
    width: open ? width : 0,
    backgroundColor: open ? 'hotpink' : 'turquoise',
    config: { duration: 1000 },
  });

  const handleClick = e => {
    e.preventDefault();
    toggle(!open);
    setTimeout(() => {
      router.push('/login');
    }, 1500);
  };

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image
        src={img}
        alt="iNova Logo"
        layout="fixed"
        height={100}
        width={180}
      />

      <div {...ref} className="main">
        <animated.div className="fill" style={props} />
        <animated.div className="content">
          {props.width.interpolate((x: any) =>
            Math.floor((x.toFixed(0) * 100) / width)
          )}
        </animated.div>
      </div>

      <button
        className="prose lg:prose-sm mt-4 bg-purple-600 rounded-md  p-5"
        onClick={handleClick}
      >
        <h2>Ir para login</h2>
      </button>
    </Container>
  );
};

export default Home;
