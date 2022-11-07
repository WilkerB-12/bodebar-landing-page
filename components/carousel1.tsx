import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved
import mainImage from '../public/mainImage.svg';

export function Carousel1(): JSX.Element {
  return (
    <>
      <div id="carousel" className="static" />
      <div className="w-screen hcarousel">
        <Image src={mainImage} />
      </div>
      <div className="relative inset-x-1/2 bottom-12">
        <span className="relative dot1" />
        <span className="relative inset-y-0 -inset-x-16 dot2" />
        <span className="relative inset-y-0 -inset-x-2 dot2" />
      </div>

      <div />
    </>
  );
}
