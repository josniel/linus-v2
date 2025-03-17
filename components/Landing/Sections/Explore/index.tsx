'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const Explore = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  return (
    // [background:_url(/static/images/landing/the-linus-thesis/background.png)_lightgray_-42px_-107.332px_/_124.703%_122.004%_no-repeat] [background-size:cover] object-center
    <div className={`w-full relative bg-[#D3C9FD] ${className}`} id={id}>
      <div className="w-full relative container flex items-center justify-center flex-col gap-7 py-20 !h-[900px]">
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] text-center max-lg:w-[85%] ${
            isDesktopLG
              ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
              : '[text-shadow:_0px_3px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
          }`}
        >
          Explore the World of Linus
        </div>
        <div className="text-black font-medium text-2xl max-lg:text-sm max-w-[1000px] max-lg:max-w-[85%] text-center leading-none">
          Dive into the evolution of Linus Eggs and discover how they become
          Pengmilios. Explore our exclusive videos where we share the latest
          updates and the epic story behind our penguins. Watch, learn, and be
          part of this incredible adventure!
        </div>
        <div className="border-[6px] rounded-[30px] border-black overflow-hidden w-[1000px] h-[685px] max-lg:w-[85%] relative max-lg:px-4 max-lg:pt-4 max-lg:pb-28 max-lg:bg-white flex items-center gap-4 flex-col">
          <Image
            src={'/static/images/landing/explore/explore.svg'}
            alt="explore"
            width={1285}
            height={685}
            className="w-full h-full object-cover object-center rounded-[30px]"
          ></Image>
          <div className="flex items-center justify-between gap-4 lg:hidden px-4 w-full">
            <div className="rounded-full bg-black group w-[39px] h-[39px] flex items-center justify-center cursor-pointer">
              <div className="bg-[#D3C9FD] border border-[#D3C9FD] rounded-full flex items-center w-[40px] h-[40px] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                <span className="icon-filled-arrow text-black text-xl mx-auto"></span>
              </div>
            </div>
            <div className="flex items-center w-full h-2.5 rounded-[20px] bg-[#CBCBCB] relative">
              <div className="bg-[#D3C9FD] w-[20%] absolute top-0 left-0 bottom-0 h-full rounded-[20px]"></div>
              <div className="bg-[#D3C9FD] absolute top-1/2 -translate-y-1/2 left-[19%] h-[14px] w-[14px] rounded-full"></div>
            </div>
          </div>
          <div className="rounded-full bg-black group w-[86px] h-[86px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer max-lg:hidden">
            <div className="bg-[#D3C9FD] border border-[#D3C9FD] rounded-full flex items-center w-[87px] h-[87px] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
              <span className="icon-filled-arrow text-black text-[44px] mx-auto"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
