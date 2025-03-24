'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import { MAIN_BRANDS, BRANDS } from '@/components/Landingv2/Sections/Data';
import useMediaQuery from '@/hooks/useMediaQuery';
import NFTKing from './NFTKing';
import NFTDP from './NFTDP';

const BuyHere = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  const shortenString = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    }

    const startLength = Math.ceil((maxLength - 3) / 2);
    const endLength = Math.floor((maxLength - 3) / 2);

    const start = str.substring(0, startLength);
    const end = str.substring(str.length - endLength);

    return `${start}...${end}`;
  };
  return (
    // [background:_url(/static/images/landing/the-linus-thesis/background.png)_lightgray_-42px_-107.332px_/_124.703%_122.004%_no-repeat] [background-size:cover] object-center
    <div className={`w-full relative bg-[#B7F6AD] ${className}`} id={id}>
      <div className="w-full container relative flex pt-40 justify-center !h-[800px] max-lg:!h-[900px] pb-20 max-lg:pt-20 max-xs:pt-10">
        <div className="bg-[#D3C9FD] rounded-[50px] [box-shadow:_0px_9px_0px_0px_#000] h-fit flex flex-col gap-4 w-full max-w-[95%] py-10 items-center relative">
          <Image
            src={'/static/images/landing/buy-here/duck.svg'}
            alt="Duck"
            width={204}
            height={174}
            className="absolute -top-24 -right-12 max-lg:hidden"
          />
          <div
            className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[24px] text-center leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] ${
              isDesktopLG
                ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
                : '[text-shadow:_0px_2px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
            }`}
          >
            Buy Here!
          </div>
          <div
            className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[48px] max-lg:text-[20px] text-center leading-none text-white tracking-[-4px] max-lg:tracking-[-1px] ${
              isDesktopLG
                ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
                : '[text-shadow:_0px_3px_0px_#000] [-webkit-text-stroke-width:_0.87px]'
            }`}
          >
            Token Contract
          </div>
          <a
            target="_blank"
            href={
              'https://lineascan.build/tx/0xec53afb5d358c6b9694e61c1f17e91cd33dbf6ae5a258f64c9d245db479371de'
            }
            className="relative bg-black max-lg:w-[80%] rounded-[10px] group transition-all"
          >
            <div className="text-[#000] text-2xl max-lg:text-xs font-normal text-center flex items-center justify-center px-[12px] py-[10px] rounded-[10px] gap-3 cursor-pointer bg-white transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px] max-lg:w-full">
              <p className="overflow-hidden">
                {shortenString(
                  '0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2',
                  20
                )}{' '}
              </p>
              <span className="icon-copy-1"></span>
            </div>
          </a>
          <div className="flex items-center max-lg:justify-center max-lg:gap-5 max-lg:flex-col lg:w-[70%] w-[100%] justify-around">
            {MAIN_BRANDS.map((item, index) => (
              <a
                target="_blank"
                href={item.url}
                key={index}
                className={`relative bg-black rounded-[10px] group transition-all max-lg:w-[80%] w-[29%]`}
              >
                <div className="flex items-center justify-center px-7 py-4 rounded-[10px] bg-white w-full cursor-pointer transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                  <Image
                    src={item.logo}
                    alt=""
                    width={20}
                    height={20}
                    priority={true}
                    className={`h-[40px] w-auto`}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex items-center max-lg:flex-col max-lg:gap-5 lg:w-[70%] w-[100%] justify-center  gap-2">
            {BRANDS.map((item, index) => (
              <a
                target="_blank"
                href={item.url}
                key={index}
                className="relative bg-black rounded-[10px] group transition-all w-[30%] max-lg:w-[80%] bg-opacity-0 hover:bg-opacity-100 [transition-duration:100ms] [transition-delay:200ms]"
              >
                <div className="flex items-center justify-center w-full cursor-pointer transform px-7 py-4 rounded-[10px] border-2 border-transparent group-hover:bg-opacity-100 bg-opacity-0 bg-white transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                  <Image
                    src={item.logo}
                    alt=""
                    width={20}
                    height={20}
                    priority={true}
                    className="h-[40px] w-auto"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={'/static/images/landing/buy-here/nft-king-mobile.png'}
        alt="NFT King"
        width={145}
        height={203}
        quality={100}
        className="absolute bottom-0 left-0 max-xs:-left-8 w-[145px] h-[203px] md:hidden"
      />
      <NFTKing />
      <NFTDP />
    </div>
  );
};

export default BuyHere;
