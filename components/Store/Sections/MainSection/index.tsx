'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import { MainSectionDecorator } from '@/components/layout/BackgroundDecorator';
import useMediaQuery from '@/hooks/useMediaQuery';

const repeatedElements = Array(5).fill(
  <div className="flex items-center gap-2">
    <Image
      src={'/static/images/header/linus-white.svg'}
      alt="Linus"
      className="w-[32px] h-[32px]"
      width={32}
      height={32}
    />
    <div className="text-[#000] font-medium text-lg">
      Welcome to the home of pengmilio
    </div>
  </div>
);

const MainSection = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <div
      className={`absolute top-0 left-0 w-full flex items-center justify-center h-[100%] max-h-[780px] max-lg:max-h-[690px] lg:rounded-b-[100px] ${className} lg:z-[1] overflow-hidden bg-[#4d99d6]`}
      id={id}
    >
      <Image
        src={'/static/images/store/main-section/background.png'}
        alt=""
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/static/images/store/main-section/background-blur.jpg"
        priority={true}
        quality={100}
      />
      <div className="flex items-center justify-center container w-full h-full">
        <div className="flex items-start max-lg:items-center max-lg:mt-60 max-lg:justify-start w-full max-w-[90%] flex-col gap-5 justify-center h-full relative">
          <div
            className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off]  [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[42px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] z-[2] ${
              isDesktop
                ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
                : '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_4.07px]'
            }`}
          >
            Get your <br /> linus gear
          </div>
          <div className="text-black text-[32px] max-lg:text-[18px] z-[2] leading-none font-medium tracking-[-2px] max-lg:tracking-[-1px]">
            Because being part of Linus is a <br className="max-xxs:hidden" />{' '}
            lifestyle. Wear it and let the world{' '}
            <br className="max-xxs:hidden" /> know you're epic!
          </div>
          <Image
            src={'/static/images/store/main-section/linus-walk.png'}
            alt="Linus Walk"
            width={406}
            height={680}
            quality={100}
            className="absolute -bottom-7 max-lg:bottom-[105px] left-1/2 max-lg:w-[286px] -translate-x-1/2 max-xs:hidden"
          ></Image>
          <Image
            src={'/static/images/store/main-section/linus-walk-mobile.png'}
            alt="Linus Walk"
            width={272}
            height={456}
            className="absolute bottom-36 left-1/2 -translate-x-1/2 xs:hidden"
          ></Image>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] max-xs:w-[60%] max-lg:w-[300px] h-[700px] max-lg:h-[600px]">
            <Image
              src={'/static/images/store/main-section/duck.svg'}
              alt="Duck"
              width={168}
              height={117}
              className="absolute top-16 -left-20 max-lg:w-[113px] max-lg:h-[78px]"
            ></Image>
            <Image
              src={'/static/images/store/main-section/astronaut.svg'}
              alt="Astronaut"
              width={168}
              height={117}
              className="absolute bottom-16 max-lg:bottom-40 -left-20 max-lg:w-[103px] max-lg:h-[113px]"
            ></Image>
            <Image
              src={'/static/images/store/main-section/pipe.svg'}
              alt="Pipe"
              width={243}
              height={233}
              className="absolute bottom-16 -right-20 max-lg:hidden"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
