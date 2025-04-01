'use client';
import Image from 'next/image';
import { TakeToActionDecorator } from '@/components/layout/BackgroundDecorator';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState, useEffect } from 'react';

const TakeToAction = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isMobileSM = useMediaQuery('(min-width: 640px)');
  const mainBrands = [
    {
      logo: '/static/images/landing/take-to-action/llama-swap.svg',
      url: 'https://swap.defillama.com',
    },
    {
      logo: '/static/images/landing/take-to-action/linex.svg',
      url: 'https://app.lynex.fi/swap?outputCurrency=0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2',
    },
    {
      logo: '/static/images/landing/take-to-action/nile.svg',
      url: 'https://www.thenile.exchange/swap',
    },
  ];
  const brands = [
    {
      logo: '/static/images/landing/take-to-action/dexscreener.svg',
      url: 'https://dexscreener.com/linea/0xfb26fdeb0d7151731afccdffb0e38d2c5f33c807',
    },
    {
      logo: '/static/images/landing/take-to-action/defined.svg',
      url: 'https://www.defined.fi/linea/0xfb26fdeb0d7151731afccdffb0e38d2c5f33c807?quoteToken=token0&cache=a46c9',
    },
    {
      logo: '/static/images/landing/take-to-action/dextools.svg',
      url: 'https://www.dextools.io/app/en/linea/pair-explorer/0xfb26fdeb0d7151731afccdffb0e38d2c5f33c807?t=1713546089382',
    },
  ];

  const [showTooltip, setShowTooltip] = useState(false);
  const [animate, setAnimate] = useState(true);

  const handleCopyToClipboard = () => {
    const textToCopy = '0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2';

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

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
    <div
      className={`relative mt-[100px] max-lg:mt-[165px] flex flex-col ${className}`}
      id={id}
    >
      <TakeToActionDecorator />
      <div className="container relative flex flex-col items-center justify-center gap-8 max-xl:mx-auto h-[500px]">
        <Image
          src={'/static/images/landing/take-to-action/grid.svg'}
          width={1586}
          height={608}
          className={`absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1586px] max-lg:w-full z-[-2] opacity-40 max-lg:hidden`}
          alt="Grid"
        />
        <Image
          src={'/static/images/landing/take-to-action/radial-gradient.svg'}
          width={1246}
          height={1246}
          className={`absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1246px] z-[-1] max-lg:w-[80%] max-lg:hidden`}
          alt="Radial Gradient"
        />
        <Image
          src={'/static/images/landing/take-to-action/star.svg'}
          width={55}
          height={55}
          className={`absolute top-[-180px] left-[280px] w-[55px] z-[0] max-xl:hidden`}
          alt="Star"
        />
        <Image
          src={'/static/images/landing/take-to-action/star.svg'}
          width={87}
          height={87}
          className={`absolute top-[-100px] right-[100px] w-[87px] z-[0] max-xl:hidden`}
          alt="Star"
        />

        <Image
          src={'/static/images/landing/take-to-action/eFrog.png'}
          width={128}
          height={125}
          className={`absolute top-[-60px] left-[250px] max-xl:left-[180px] w-[128px] h-[125px] z-[-1] max-lg:hidden mix-blend-lighten`}
          alt="eFrog"
        />
        {/* <Image
          src={"/static/images/landing/take-to-action/green.svg"}
          width={87}
          height={87}
          className={`absolute top-[100px] right-[0px] w-[128px] h-[125px] z-[-1] max-lg:hidden`}
          alt="Green"
        /> */}
        <div
          id="section1"
          className="text-white text-[48px] font-medium text-center max-lg:text-[48px] leading-normal z-[400]"
        >
          Buy Here!
        </div>
        <div className="flex items-center max-lg:justify-center max-lg:gap-5 max-lg:flex-col lg:w-[70%] w-[100%] justify-around mt-4 z-[400]">
          {mainBrands.map((item, index) => (
            <a
              target="_blank"
              href={item.url}
              onMouseEnter={() => setAnimate(false)}
              onMouseLeave={() => setAnimate(true)}
              key={index}
              className={`flex items-center justify-center px-7 py-4 rounded-[17px] border-2 border-picton-blue-400 bg-picton-blue-400 bg-opacity-40 ${
                item.logo === '/static/images/landing/take-to-action/linex.svg'
                  ? `w-[38%] motion-safe:animate-scale-shak`
                  : 'w-[26%]'
              } max-lg:w-[80%] cursor-pointer transition-all hover:bg-opacity-100`}
            >
              <Image
                src={item.logo}
                alt=""
                width={20}
                height={20}
                className={`h-[40px] w-auto`}
              />
            </a>
          ))}
        </div>
        <div className="text-white text-[36px] mt-10 font-medium text-center max-lg:text-[24px] leading-normal z-[400]">
          Token Contract
        </div>
        <div
          className="text-white text-xs font-normal flex items-center text-center px-[30px] justify-center py-[15px] mt-2 w-[370px] max-xs:w-[80%] border-2 border-white rounded-[100px] gap-3 z-[400] cursor-pointer transform transition-all hover:bg-picton-blue-400 hover:border-picton-blue-400 "
          onClick={handleCopyToClipboard}
        >
          <Image
            src={'/static/images/landing/liquidity-burned/copy.svg'}
            width={18}
            height={18}
            className={`w-[18px]`}
            alt="copy"
          />
          <p className=" text-nowrap w-[90%]">
            {shortenString(
              '0xe07C2bdbb8C787962C2C6e93C11a152110E7E4d2',
              isMobileSM ? 50 : 30
            )}
          </p>
        </div>
        <div className="flex items-center max-lg:flex-col max-lg:gap-5 lg:w-[70%] w-[100%] justify-center mt-10 z-[400] gap-1">
          {brands.map((item, index) => (
            <a
              target="_blank"
              href={item.url}
              key={index}
              className="flex items-center justify-center w-[30%] max-lg:w-[80%] cursor-pointer transform transition-all px-7 py-4 rounded-[17px] border-2 border-transparent hover:border-picton-blue-400 hover:bg-picton-blue-400 hover:bg-opacity-40"
            >
              <Image
                src={item.logo}
                alt=""
                width={20}
                height={20}
                className="h-[40px] w-auto"
              />
            </a>
          ))}
        </div>
      </div>
      <div
        className={`fixed bottom-5 right-5 rounded-xl border-2 border-picton-blue-400 bg-picton-blue-400 text-white font-medium text-sm flex items-center justify-center w-fit px-4 py-3 bg-opacity-80 z-[500] transition-all opacity-0 ${
          showTooltip ? 'opacity-100' : ''
        }`}
      >
        Address copied!
      </div>

      <Image
        src={'/static/images/footer/blue.png'}
        alt={'Blue'}
        className="absolute right-[0px] 2xl:right-[70px] top-[-40px] w-[188.286px] h-[387.869px] rotate-[32deg] max-lg:hidden"
        width={188.286}
        height={387.869}
      />

      <Image
        src={'/static/images/footer/red.png'}
        width={117.564}
        height={237.587}
        className={`absolute bottom-[0] left-[-50px] w-[117.564px] h-[237.587px] z-[-1] lg:hidden rotate-[-22deg]`}
        alt="Red"
      />
      <Image
        src={'/static/images/footer/purple.png'}
        width={91.415}
        height={187.86}
        className={`absolute bottom-[205px] right-[-44px] w-[91.415px] h-[187.86px] z-[-1] lg:hidden rotate-[16deg]`}
        alt="Purple"
      />
    </div>
  );
};

export default TakeToAction;
