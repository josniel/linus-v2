'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const LinusThesis = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isMobileXS = useMediaQuery('(max-width: 512px)');
  return (
    <div
      className={`w-full relative ${className} bg-cover bg-center`}
      style={{
        backgroundImage:
          'url(/static/images/landing/the-linus-thesis/background.png)',
      }}
      id={id}
    >
      <div className="w-full relative !h-[800px] max-xs:!h-[650px] container pt-20 max-xs:pt-16">
        <div
          className={`text-white lg:hidden w-full text-center __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_2.07px] [-webkit-text-stroke-color:_#000] max-xs:text-[24px] text-[48px] leading-none tracking-[-2px] [word-spacing:2px] max-w-[95%] ${
            isMobileXS
              ? '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
              : '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
          }`}
        >
          A complete view <br /> to the Linus Thesis
        </div>
        <Image
          src={'/static/images/landing/the-linus-thesis/comments.svg'}
          alt="Comments"
          width={860}
          height={297}
          className="absolute top-20 max-lg:top-48 max-xs:top-[130px] max-sm:top-[220px] max-w-[90%] lg:right-10 max-lg:left-1/2 max-lg:-translate-x-1/2 w-[750px] max-lg:w-[550px] max-xs:w-[350px] z-[5]"
        ></Image>
        <a
          className="absolute -left-40 bottom-0 h-[702px] w-[1539.9px] max-2xl:w-[1231.92px] max-2xl:h-[561.6px] group cursor-pointer max-lg:hidden"
          target="_blank"
          href={
            'https://mirror.xyz/pengmilio.eth/3ZjfcIn9tuTFoKvX-rfwwK2GoKkcDsFQHQQUqKSrLWA'
          }
        >
          <Image
            src={'/static/images/landing/the-linus-thesis/setup.svg'}
            alt="SetUp"
            width={1711}
            height={780}
            className="absolute left-0 bottom-0 w-full h-full z-[0]"
          ></Image>
          <Image
            src={'/static/images/landing/the-linus-thesis/arm.svg'}
            alt="Arm"
            width={1711}
            height={780}
            className="absolute left-0 bottom-0 w-full h-full rotate-0 group-hover:rotate-[7deg] group-hover:translate-x-20 origin-top-left transition-all transform z-[1]"
          ></Image>
          <Image
            src={'/static/images/landing/the-linus-thesis/space-pengmilio.svg'}
            alt="Space Pengmilio"
            width={1711}
            height={780}
            className="absolute left-0 bottom-0 w-full h-full z-[2] group-hover:translate-x-20 transition-all"
          ></Image>
        </a>
        <a
          className="absolute left-1/2 -translate-x-1/2 object-cover object-center bottom-0 h-[434px] w-[789px] cursor-pointer lg:hidden"
          target="_blank"
          href={
            'https://mirror.xyz/pengmilio.eth/3ZjfcIn9tuTFoKvX-rfwwK2GoKkcDsFQHQQUqKSrLWA'
          }
        >
          <Image
            src={
              '/static/images/landing/the-linus-thesis/setup-pengmilio-mobile.png'
            }
            alt="Setup Pengmilio"
            width={789}
            height={434}
            quality={100}
            className="absolute left-0 bottom-0 w-full h-full z-[0]"
          ></Image>
        </a>
        <a
          className="absolute top-[360px] right-[150px] z-[1] w-[441px] flex flex-col items-end gap-4 cursor-pointer max-lg:hidden"
          target="_blank"
          href={
            'https://mirror.xyz/pengmilio.eth/3ZjfcIn9tuTFoKvX-rfwwK2GoKkcDsFQHQQUqKSrLWA'
          }
        >
          <div className="text-right w-full __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [text-shadow:_0px_9px_0px_#000] [-webkit-text-stroke-width:_5.07px] [-webkit-text-stroke-color:_#000] text-[56px] leading-none text-white tracking-[-5px]">
            The $linus thesis
          </div>
          <div className="rounded-[15px] bg-black w-[70px] h-[70px] group">
            <div className="flex items-center justify-center rounded-[15px] bg-picton-blue-400 w-[70px] h-[70px] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all">
              <span className="icon-arrow-right-up text-white text-4xl"></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LinusThesis;
