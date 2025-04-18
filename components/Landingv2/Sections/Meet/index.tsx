'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  PENGMILIOS,
  PENGMILIOS_MOBILE,
} from '@/components/Landingv2/Sections/Data';

const Meet = ({ className = '', id }: { className?: string; id?: string }) => {
  const [pengmilios, setPengmilios] = useState(PENGMILIOS);
  const [pengmiliosMobile, setPengmiliosMobile] = useState(PENGMILIOS_MOBILE);
  return (
    <div className={`w-full relative ${className} bg-[#78d3ff]`} id={id}>
      <Image
        src={'/static/images/landing/meet/background.png'}
        alt=""
        fill
        quality={100}
        placeholder="blur"
        className="object-cover"
        blurDataURL="/static/images/landing/meet/background-blur.jpg"
      />
      <div className="h-[1000px] max-sm:h-[1450px] flex items-center justify-center flex-col gap-7 py-16 container">
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] z-[1] max-lg:max-w-[85%] text-center lg:[text-shadow:_0px_6px_0px_#000] lg:[-webkit-text-stroke-width:_6.07px] [text-shadow:_0px_3px_0px_#000] [-webkit-text-stroke-width:_3.07px]`}
        >
          Meet the Pengmilios
        </div>
        <div className="text-black font-medium text-2xl max-lg:text-sm max-lg:max-w-[85%] max-w-[1000px] text-center leading-none z-[1]">
          This is just a little taste! Each Pengmilio is unique, with its own
          style and epic story. Flip their cards to discover their secrets and
          get ready to collect many more in this digital party. The Pengmilios
          never stop surprising!
        </div>

        <div className="flex items-center gap-20 max-xl:gap-10 justify-center w-full max-lg:hidden">
          {pengmilios.map((pengmilioArr, index) => (
            <div key={index} className="flex flex-col gap-10 items-center">
              {pengmilioArr.map((pengmilio, indexPengmilio) => (
                <div
                  key={indexPengmilio}
                  className={`relative w-[150px] h-[150px] bg-black rounded-[20px] group transition-all`}
                >
                  <div
                    className={`relative flex flex-col items-center justify-center w-[150px] h-[150px] ${
                      pengmilio.backgroundColor
                    } ${
                      !pengmilio.loaded && 'animate-pulse'
                    } rounded-[20px] group transition-all hover:-translate-x-[16px] hover:-translate-y-[16px]`}
                  >
                    <Image
                      src={pengmilio.image}
                      alt={'Pengmilio' + indexPengmilio}
                      width={150}
                      height={150}
                      className={`w-[150px] h-[150px] rounded-[20px] border-[3px] border-black group-hover:opacity-0 opacity-100 transition-all ${
                        pengmilio.loaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => {
                        pengmilios[index][indexPengmilio].loaded = true;
                        setPengmilios([...pengmilios]);
                      }}
                    ></Image>
                    <div
                      className={`flex items-center p-4 justify-center __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] text-sm font-normal text-center opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 top-0 w-full h-full leading-none transition-all ${pengmilio.textColor}`}
                    >
                      {pengmilio.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid max-lg:grid-cols-4 max-sm:grid-cols-2 gap-4 max-sm:gap-6 justify-items-center place-content-center lg:hidden max-w-[95%]">
          {pengmiliosMobile.map((pengmilio, index) => (
            <div
              className={`relative w-[150px] h-[150px] bg-black rounded-[20px] group transition-all ${
                Number(index) === pengmiliosMobile.length - 1 ||
                Number(index) === pengmiliosMobile.length - 2
                  ? `sm:col-span-2 ${
                      Number(index) === pengmiliosMobile.length - 1 &&
                      'sm:place-self-start'
                    } ${
                      Number(index) === pengmiliosMobile.length - 2 &&
                      'sm:place-self-end'
                    }`
                  : ''
              }`}
              key={index}
            >
              <div
                className={`relative flex flex-col items-center justify-center w-[150px] h-[150px] ${
                  pengmilio.backgroundColor
                } ${
                  !pengmilio.loaded && 'animate-pulse'
                } rounded-[20px] group transition-all hover:-translate-x-[16px] hover:-translate-y-[16px]`}
              >
                <Image
                  src={pengmilio.image}
                  alt={'Pengmilio' + index}
                  width={150}
                  height={150}
                  className={`w-[150px] h-[150px] rounded-[20px] border-[3px] border-black group-hover:opacity-0 opacity-100 transition-all ${
                    pengmilio.loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => {
                    pengmiliosMobile[index].loaded = true;
                    setPengmiliosMobile([...pengmiliosMobile]);
                  }}
                ></Image>
                <div
                  className={`flex items-center p-4 justify-center __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] text-sm font-normal text-center opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 top-0 w-full h-full leading-none transition-all ${pengmilio.textColor}`}
                >
                  {pengmilio.description}
                </div>
                {index === 0 ? (
                  <Image
                    src={'/static/images/landing/meet/tap.png'}
                    alt="Tap"
                    width={50}
                    height={50}
                    className="absolute -bottom-8 -right-8 "
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meet;
