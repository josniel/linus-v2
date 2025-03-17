'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import { BRIDGES } from '@/components/Landing/Sections/Data';
import { FooterLanding } from '@/components/layout/Footer';
import useMediaQuery from '@/hooks/useMediaQuery';

const Bridge = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  return (
    <div
      className={`w-full !h-[100%] ${className} relative bg-cover bg-center`}
      style={{
        backgroundImage: 'url(/static/images/landing/bridge/background.png)',
      }}
      id={id}
    >
      <div className="flex items-center flex-col gap-3 w-full relative z-[1] h-[831px] max-lg:h-[1000px] container py-16">
        <div className="flex flex-col items-center gap-6 rounded-[50px] bg-[#1C3445] px-20 max-2xl:px-16 max-xl:px-10 max-lg:px-28 max-sm:px-10 max-xs:px-5 py-10 [box-shadow:_0px_9px_0px_0px_#000] w-[85%]">
          <div
            className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] ${
              isDesktopLG
                ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
                : '[text-shadow:_0px_3px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
            }`}
          >
            Bridge
          </div>
          <div className="flex max-lg:flex-col max-lg:gap-10 max-2xl:gap-4 items-center lg:items-end justify-center max-lg:justify-end w-[90%] gap-10">
            {BRIDGES.map((item, index) => (
              <a
                target="_blank"
                href={item.url}
                key={index}
                className="w-full cursor-pointer transition-all rounded-[10px] bg-black group"
              >
                <div className="flex items-center justify-center w-full cursor-pointer px-4 py-4 rounded-[10px] bg-white group-hover:bg-[#D3C9FD] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all">
                  <Image
                    src={item.logo}
                    alt=""
                    width={20}
                    height={20}
                    className="h-[40px] w-auto"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        <Image
          src={'/static/images/landing/bridge/pengmilios.png'}
          alt="Pengmilios"
          width={1417}
          height={553}
          quality={100}
          className="absolute -bottom-0 left-1/2 -translate-x-1/2 max-lg:hidden"
        />
        {/* <div className='absolute -bottom-0 left-1/2 -translate-x-1/2 lg:hidden'>
        </div> */}
        <Image
          src={'/static/images/landing/bridge/pengmilios-mobile.png'}
          alt="Pengmilios"
          width={665}
          height={333}
          quality={100}
          className="absolute -bottom-4 left-1/2 w-[665px] h-[333px] -translate-x-1/2 lg:hidden object-cover object-center"
        />
      </div>
      {/* <FooterLanding /> */}
    </div>
  );
};

export default Bridge;
