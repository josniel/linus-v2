'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const MainSection = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  return (
    <div
      className={`absolute top-0 left-0 w-full !h-[100%] max-h-[780px] ${className} bg-cover bg-center z-[1]`}
      style={{
        backgroundImage: 'url(/static/images/news/main-section/background.png)',
      }}
      id={id}
    >
      <div className="flex items-center flex-col gap-11 container justify-center h-full relative">
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[32px] leading-none text-white tracking-[-4px] max-lg:tracking-[-1.2px] text-center ${
            isDesktopLG
              ? '[text-shadow:_0px_7px_0px_#000] [-webkit-text-stroke-width:_7.07px]'
              : '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_4.07px]'
          }`}
        >
          Latest news of linus
        </div>
        <div className="text-black text-[32px] max-lg:text-sm leading-none font-medium text-center max-w-[800px] tracking-[-2px] max-lg:tracking-[0px]">
          Explore the unknown with our latest updates and news. Discover what's
          happening in the world of Linus.
        </div>
      </div>
    </div>
  );
};

export default MainSection;
