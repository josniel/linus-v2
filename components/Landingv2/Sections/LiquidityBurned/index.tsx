'use client';
import Image from 'next/image';
import { useRef, useState, useEffect, useMemo } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  LiquidityBurnedDecorator,
  LiquidityBurnedGradients,
} from '@/components/layout/BackgroundDecorator';
import Clipboard from 'clipboard';
const LiquidityBurned = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const elonRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  const isMobileSM = useMediaQuery('(min-width: 640px)');
  const [showTooltip, setShowTooltip] = useState(false);
  const [NFTMuskLoaded, setNFTMuskLoaded] = useState(false);
  const [elonLoaded, setElonLoaded] = useState(false);

  const allLoaded = useMemo(
    () => NFTMuskLoaded && elonLoaded,
    [NFTMuskLoaded, elonLoaded]
  );
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

  useEffect(() => {
    new Clipboard('p');
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // apenas entra un 10% del elemento en pantalla
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView || !elonRef.current) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const visibleAmount = Math.min(windowHeight - rect.top, rect.height);
      const progress = Math.max(0, Math.min(visibleAmount / rect.height, 1));

      // Aquí se define la animación
      const rotate = -35 * progress;
      const translateY = -40 * progress;
      const translateX = -20 * progress;

      elonRef.current.style.transform = `
        rotate(${rotate}deg)
        translateY(${translateY}px)
        translateX(${translateX}px)
      `;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);
  return (
    <div
      className={`relative bg-white py-[80px] max-lg:pt-[40px] max-lg:pb-[150px] ${className}`}
      id={id}
    >
      <div className="container relative flex flex-col items-center justify-center gap-5 2xl:!max-w-[70%] lg:!max-w-[90%] max-lg:!max-w-[85%]">
        <div
          className={`flex flex-col justify-center w-[100%] bg-[#111B4D] [box-shadow:_0px_9px_0px_0px_#000] rounded-[50px] px-[50px] lg:min-w-[360px] py-[35px] gap-5 max-lg:gap-0`}
        >
          <div
            className={`__className_02ffdd text-white whitespace-nowrap text-[64px] font-normal leading-normal max-lg:text-[24px] [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] tracking-[-5px] max-lg:tracking-[-1px] [word-spacing:2px] ${
              isDesktopLG
                ? '[text-shadow:_0px_9px_0px_#000] [-webkit-text-stroke-width:_5.07px]'
                : '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
            }`}
          >
            Supply Burnt?
          </div>
          <div
            className={`text-white whitespace-nowrap text-[48px] font-normal leading-normal __className_02ffdd max-lg:text-[24px] [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] tracking-[-5px] max-lg:tracking-[-1px] [word-spacing:2px] ${
              isDesktopLG
                ? '[-webkit-text-stroke-width:_4.07px]'
                : '[-webkit-text-stroke-width:_2.07px]'
            }`}
          >
            Yes, 25%
          </div>
          <div className="flex items-center gap-4 justify-between w-full max-lg:flex-col mt-4">
            <a
              target="_blank"
              href={
                'https://lineascan.build/tx/0xec53afb5d358c6b9694e61c1f17e91cd33dbf6ae5a258f64c9d245db479371de'
              }
              className="w-full relative bg-black rounded-[10px] group transition-all"
            >
              <div className="text-[#000] text-2xl max-lg:text-xs font-normal flex items-center px-[10px] text-center py-[10px] rounded-[10px] gap-3 w-full cursor-pointer bg-white transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                <p className="overflow-hidden text-nowrap w-[100%]">
                  {shortenString(
                    '0xec53afb5d358c6b9694e61c1f17e91cd33dbf6ae5a258f64c9d245db479371de',
                    20
                  )}{' '}
                  <span className="icon-copy-1"></span>
                </p>
              </div>
            </a>
            <a
              target="_blank"
              href={
                'https://lineascan.build/tx/0xec53afb5d358c6b9694e61c1f17e91cd33dbf6ae5a258f64c9d245db479371de'
              }
              className="w-full relative bg-black rounded-[10px] group transition-all"
            >
              <div className="text-[#000] text-2xl max-lg:text-xs font-normal flex items-center px-[10px] text-center py-[10px] max rounded-[10px] gap-3 w-full cursor-pointer bg-white transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                <p className="flex items-center gap-2 w-full justify-center">
                  <span className="icon-arrow-right-up text-black text-lg max-lg:text-xs"></span>{' '}
                  View More
                </p>
              </div>
              <div className="absolute w-[420px] bottom-[calc(100%-9px)] right-0 overflow-hidden max-lg:hidden">
                <video
                  className="w-[100%] max-lg:min-h-[500px] scale-x-[-1] relative top-[200px]"
                  style={{ mixBlendMode: 'lighten' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={'/static/videos/linus-flames.mp4'}
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between max-lg:flex-col gap-5  w-full">
          <div
            className={`flex flex-col justify-center w-[100%] bg-[#D3C9FD] [box-shadow:_0px_9px_0px_0px_#000] rounded-[50px] px-[50px] lg:min-w-[360px] py-[35px] gap-5 max-lg:gap-0`}
          >
            <div
              className={`text-white whitespace-nowrap text-[64px] font-normal leading-normal __className_02ffdd max-lg:text-[24px] [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] tracking-[-5px] max-lg:tracking-[-1px] ${
                isDesktopLG
                  ? '[text-shadow:_0px_9px_0px_#000] [-webkit-text-stroke-width:_5.07px]'
                  : '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
              }`}
            >
              Liquidity?
            </div>
            <div
              className={`text-white whitespace-nowrap text-[48px] font-normal leading-normal __className_02ffdd max-lg:text-[24px] [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] tracking-[-5px] max-lg:tracking-[-1px] ${
                isDesktopLG
                  ? '[-webkit-text-stroke-width:_4.07px]'
                  : '[-webkit-text-stroke-width:_2.07px]'
              }`}
            >
              Burned!
            </div>
            <div className="flex items-center gap-2 justify-between w-full mt-4">
              <a
                target="_blank"
                href={
                  'https://lineascan.build/tx/0x509b798c3e9975d038c5a526166a8c489f3716dea10e4d8767a45649ee46ac3e'
                }
                className="w-full relative bg-black rounded-[10px] group transition-all"
              >
                <div className="text-[#000] text-2xl max-lg:text-xs font-normal flex items-center px-[10px] text-center py-[10px] rounded-[10px] gap-3 w-full cursor-pointer bg-white transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                  <p className="overflow-hidden text-nowrap w-[100%]">
                    {shortenString(
                      '0x509b798c3e9975d038c5a526166a8c489f3716dea10e4d8767a45649ee46ac3e',
                      20
                    )}{' '}
                    <span className="icon-copy-1"></span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center w-[100%] bg-[#E6E2FD] [box-shadow:_0px_9px_0px_0px_#000] rounded-[50px] px-[50px] lg:min-w-[360px] py-[35px] gap-5 max-lg:gap-0`}
          >
            <div
              className={`text-white whitespace-nowrap text-[64px] font-normal leading-normal __className_02ffdd max-lg:text-[24px] [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] tracking-[-5px] max-lg:tracking-[-1px] ${
                isDesktopLG
                  ? '[text-shadow:_0px_9px_0px_#000] [-webkit-text-stroke-width:_5.07px]'
                  : '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
              }`}
            >
              Fees?
            </div>
            <div
              className={`text-white whitespace-nowrap text-[48px] font-normal leading-normal __className_02ffdd max-lg:text-[24px] [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] tracking-[-5px] max-lg:tracking-[-1px] ${
                isDesktopLG
                  ? '[-webkit-text-stroke-width:_4.07px]'
                  : '[-webkit-text-stroke-width:_2.07px]'
              }`}
            >
              None!
            </div>
            <div className="flex items-center gap-2 justify-between w-full mt-4">
              <a
                target="_blank"
                href={
                  'https://lineascan.build/tx/0xec53afb5d358c6b9694e61c1f17e91cd33dbf6ae5a258f64c9d245db479371de'
                }
                className="w-full relative bg-black rounded-[10px] group transition-all"
              >
                <div className="text-[#000] text-2xl max-lg:text-xs font-normal flex items-center px-[10px] text-center py-[10px] rounded-[10px] gap-3 w-full cursor-pointer bg-white transition-all group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                  <p className="overflow-hidden text-nowrap w-[100%] flex items-center gap-2 justify-center">
                    <span className="icon-arrow-right-up text-black text-lg max-lg:text-xs"></span>{' '}
                    View More
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 max-xl:-right-7 w-[474px] max-2xl:w-[380px] max-2xl:h-[483px] h-[604px] group max-lg:hidden"
        ref={containerRef}
      >
        <Image
          src={'/static/images/landing/liquidity-burned/nft-musk.png'}
          alt="NFT Musk"
          width={474}
          height={604}
          quality={100}
          className={`absolute bottom-0 right-0 w-[354px] max-2xl:w-[283px] max-2xl:h-auto ${
            allLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={(e) => {
            setNFTMuskLoaded(true);
          }}
        />
        <Image
          src={'/static/images/landing/liquidity-burned/elon.svg'}
          alt="Elon"
          width={474}
          height={604}
          className={`absolute -bottom-6 max-2xl:bottom-0 right-0 group-hover:rotate-[-35deg] group-hover:-translate-y-10 group-hover:-translate-x-5 origin-right transition-all max-2xl:w-[380px] max-2xl:h-[483px] ${
            allLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={(e) => {
            setElonLoaded(true);
          }}
          ref={elonRef}
        />
      </div>
      <Image
        src={'/static/images/landing/liquidity-burned/nft-musk-mobile.png'}
        alt="NFT Musk"
        width={141}
        height={184}
        quality={100}
        className="absolute bottom-0 right-0 lg:hidden"
      />
      {/* <div
        className={`fixed bottom-5 right-5 rounded-xl border-2 border-picton-blue-400 bg-picton-blue-400 text-black font-medium text-sm flex items-center justify-center w-fit px-4 py-3 bg-opacity-80 z-[500] transition-all opacity-0 ${
          showTooltip ? 'opacity-100' : ''
        }`}
      >
        Address copied!
      </div> */}
    </div>
  );
};

export default LiquidityBurned;
