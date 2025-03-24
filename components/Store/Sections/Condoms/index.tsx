'use client';
import { useRef, useState, Fragment, useMemo } from 'react';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import MiniBanner from '@/components/MiniBanner';
import Button from '@/components/UI/Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useCart } from '@/hooks/useCart';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Condoms = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const { addToCart } = useCart();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleCartClick = async () => {
    // await addToCart(product, 1);
  };
  return (
    <div
      className={`w-full relative mt-[550px] lg:pt-[60px] [background:radial-gradient(56.65%_255.63%_at_71%_161.25%,_#42A4EB_0%,_#0B0541_100%)] ${className}`}
      id={id}
    >
      <Image
        src={'/static/images/store/condoms/stars.svg'}
        alt="Stars"
        width={2189}
        height={1422}
        quality={100}
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <Image
        src={'/static/images/store/condoms/rocks.svg'}
        alt="Rocks"
        width={227}
        height={197}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[140px]"
      />
      <Image
        src={'/static/images/store/condoms/rocks2.svg'}
        alt="Rocks 2"
        width={230}
        height={210}
        className="absolute bottom-2 left-[300px] w-[180px]"
      />
      <Image
        src={'/static/images/store/condoms/planet.png'}
        alt="Planet"
        width={1727}
        height={1783}
        quality={100}
        className="absolute bottom-0 right-0 w-[1200px] object-cover object-center max-lg:hidden"
      />
      <Image
        src={'/static/images/store/condoms/planet-mobile.png'}
        alt="Planet"
        width={1727}
        height={1783}
        quality={100}
        className="absolute bottom-[-1150px] left-1/2 -translate-x-1/2 w-[1727px] h-[1783px] object-cover object-center lg:hidden"
      />
      <Image
        src={'/static/images/store/condoms/linus-astronaut.png'}
        alt="Planet"
        width={563}
        height={573}
        quality={100}
        className="absolute bottom-0 right-20 w-[563px] object-cover object-center z-[1] max-lg:hidden max-2xl:-right-28"
      />
      <div className="h-[985px] max-sm:h-[785px] flex items-center flex-col gap-7 py-16 relative w-full container">
        <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[1] w-[834px] transition-all">
          <Image
            src={'/static/images/store/condoms/extra-sensitive-condom.png'}
            alt="Linus"
            width={512}
            height={503}
            className="rotate-[-22deg] max-md:-translate-y-20 max-sm:translate-x-6 transition-all max-sm:w-[375px]"
          />
          <Image
            src={'/static/images/store/condoms/textured-condom.png'}
            alt="Linus"
            width={512}
            height={503}
            className="rotate-[-22deg] max-md:translate-y-20 max-sm:-translate-x-6 -ml-48 transition-all max-sm:w-[375px]"
          />
        </div>
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[32px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] lg:mt-28 text-center max-w-[95%] min-w-[300px] 
          ${
            isDesktop
              ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
              : '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_4.07px]'
          }`}
        >
          Limited Special edition
        </div>
        <div
          className={`${bebasNeue.className} [background-clip:text] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] bg-condoms-gradient text-[256px] max-xl:text-[200px] font-normal leading-none mix-blend-overlay w-full max-w-[1340px] max-lg:w-[940px] max-lg:absolute max-lg:top-0 max-lg:left-1/2 max-lg:-translate-x-1/2 text-center [leading-trim:both] [text-edge:cap]`}
        >
          Condoms limited edition
        </div>
        <div className="flex items-end max-lg:items-center gap-8 absolute left-1/2 -translate-x-1/2 z-[1] bottom-24 max-sm:bottom-12 max-xxs:gap-2">
          <div className="text-white font-medium text-[32px] max-lg:text-sm leading-none whitespace-nowrap">
            Linus condoms <br /> deez nuts textured
          </div>
          <div className="bg-black rounded-[10px] group">
            <Button
              variant="primary"
              className="group-hover:-translate-x-2 group-hover:-translate-y-2 max-lg:px-7 transition-all whitespace-nowrap"
              onClick={handleCartClick}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <MiniBanner backgroundClass="bg-[#FDC860]" />
    </div>
  );
};

export default Condoms;
