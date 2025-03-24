'use client';
import Image from 'next/image';
import { TakeToActionDecorator } from '@/components/layout/BackgroundDecorator';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState, useEffect } from 'react';
import Clipboard from 'clipboard';

const Bridges = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery('(min-width: 1280px)');
  const brands = [
    {
      logo: '/static/images/footer/linea 2.svg',
      url: 'https://bridge.linea.build/',
    },
    {
      logo: '/static/images/footer/debridge.svg',
      url: 'https://app.debridge.finance/deswap?inputChain=7565164&outputChain=59144&inputCurrency=&outputCurrency=&dlnMode=simple&address=',
    },
    {
      logo: '/static/images/footer/symbiosis.svg',
      url: 'https://app.symbiosis.finance/swap?amountIn&chainIn=Base&chainOut=Linea&tokenIn=ETH&tokenOut=ETH',
    },
    {
      logo: '/static/images/footer/jumper.svg',
      url: 'https://jumper.exchange/es/?fromChain=8453&fromToken=0x0000000000000000000000000000000000000000&toChain=59144&toToken=0x0000000000000000000000000000000000000000',
    },
  ];

  const [showTooltip, setShowTooltip] = useState(false);

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

  return (
    <div
      className={`relative mt-[300px] max-lg:mt-[240px] flex flex-col ${className}`}
      id={id}
    >
      <div className="container relative flex flex-col items-center justify-center gap-8 max-xl:mx-auto max-lg:h-[700px] h-[500px]">
        <div
          className="text-white text-[48px] leading-none font-medium text-center max-lg:text-[48px] relative mb-10"
          id="section2"
        >
          Bridges
        </div>
        <div className="flex max-lg:flex-col max-lg:gap-10 items-center lg:items-end justify-center max-lg:justify-end w-[70%] gap-1 z-50">
          {brands.map((item, index) => (
            <a
              target="_blank"
              href={item.url}
              key={index}
              className="flex items-center justify-center w-[35%] max-lg:w-[80%] cursor-pointer transition-all px-7 py-4 rounded-[17px] border-2 border-transparent hover:border-picton-blue-400 hover:bg-picton-blue-400 hover:bg-opacity-40"
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
        {/* <div className="absolute top-[80px] max-lg:top-[30px] flex flex-col items-center transform -translate-x-1/2 left-1/2 w-[70%] max-xs:w-[95%] max-lg:w-[80%] h-[50px] max-lg:h-[480px]">
          <Image
            src={"/static/images/landing/take-to-action/eFrog.png"}
            alt={"eFrog"}
            className="absolute lg:hidden left-0 top-[-70px] w-[114px] h-[114px] z-[-60] mix-blend-lighten"
            width={114}
            height={114}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Bridges;
