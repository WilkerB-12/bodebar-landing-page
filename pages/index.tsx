import React from 'react';
import Image from 'next/image';
import { Navbar } from '../components/navbar';
// eslint-disable-next-line import/namespace
import { Carousel1 } from '../components/carousel1';
import { Carousel2 } from '../components/carousel2';
// eslint-disable-next-line import/no-unresolved
import Rectangle31 from '../public/Rectangle 31.svg';

function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Carousel1 />
      </section>
      <section>
        <Carousel2 />
      </section>
      <section>
        <Image className="" src={Rectangle31} />
      </section>
      <footer>footer</footer>
    </>
  );
}

export default HomePage;
