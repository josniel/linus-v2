'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';

const LinusThesis = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const [armLoaded, setArmLoaded] = useState(false);
  const [spaceLoaded, setSpaceLoaded] = useState(false);
  const [setupLoaded, setSetupLoaded] = useState(false);

  const allLoaded = useMemo(
    () => armLoaded && spaceLoaded && setupLoaded,
    [armLoaded, spaceLoaded, setupLoaded]
  );
  // console.log('calc :>> ', (1660 * 80) / 100);
  // console.log('calc :>> ', (934 * 80) / 100);

  return (
    <div className={`w-full relative ${className} bg-[#2f5975]`} id={id}>
      <Image
        src={'/static/images/landing/the-linus-thesis/background.png'}
        alt=""
        fill
        className="object-cover"
        placeholder="blur"
        quality={100}
        blurDataURL="/static/images/landing/the-linus-thesis/background-blur.jpg"
      />
      <div className="w-full relative !h-[800px] max-xs:!h-[650px] container pt-20 max-xs:pt-16">
        <div
          className={`text-white lg:hidden w-full text-center __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] max-xs:[text-shadow:_0px_4px_0px_#000] max-xs:[-webkit-text-stroke-width:_2.07px] [text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_3.07px] [-webkit-text-stroke-color:_#000] max-xs:text-[24px] text-[48px] leading-none tracking-[-2px] [word-spacing:2px] max-w-[95%]`}
        >
          A complete view <br /> to the Linus Thesis
        </div>
        <Image
          src={'/static/images/landing/the-linus-thesis/comments.svg'}
          alt="Comments"
          width={860}
          height={297}
          priority={true}
          className="absolute top-20 max-lg:top-48 max-xs:top-[130px] max-sm:top-[220px] max-w-[90%] lg:right-10 max-lg:left-1/2 max-lg:-translate-x-1/2 w-[750px] max-lg:w-[550px] max-xs:w-[350px] z-[5]"
          unoptimized={true}
        ></Image>
        <a
          className="absolute -left-40 bottom-0 h-[702px] w-[1539.9px] max-2xl:w-[1231.92px] max-2xl:h-[561.6px] group cursor-pointer max-lg:hidden"
          target="_blank"
          href={
            'https://mirror.xyz/pengmilio.eth/3ZjfcIn9tuTFoKvX-rfwwK2GoKkcDsFQHQQUqKSrLWA'
          }
        >
          <>
            <Image
              src={'/static/images/landing/the-linus-thesis/setup.png'}
              alt="SetUp"
              width={1328}
              height={747.2}
              className={`absolute left-0 bottom-0 z-[0] ${
                allLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={(e) => {
                setSetupLoaded(true);
              }}
              quality={100}
            ></Image>
            <Image
              src={'/static/images/landing/the-linus-thesis/arm.png'}
              alt="Arm"
              width={1328}
              height={747.2}
              className={`absolute left-0 bottom-0 rotate-0 group-hover:rotate-[7deg] group-hover:translate-x-20 origin-top-left transition-all transform z-[1] ${
                allLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={(e) => {
                setArmLoaded(true);
              }}
              quality={100}
            ></Image>
            <Image
              src={
                '/static/images/landing/the-linus-thesis/space-pengmilio.webp'
              }
              alt="Space Pengmilio"
              width={1328}
              height={747.2}
              className={`absolute left-0 bottom-0 z-[2] group-hover:translate-x-20 transition-all ${
                allLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={(e) => {
                setSpaceLoaded(true);
              }}
              quality={100}
            ></Image>
          </>
          {!allLoaded ? (
            <>
              <Image
                src={
                  '/static/images/landing/the-linus-thesis/group-spaced-pengmilio.png'
                }
                alt="SetUp"
                width={1578}
                height={845}
                className="absolute left-[128px] w-[1210px] bottom-0 z-[0]"
                quality={100}
                placeholder="blur"
                blurDataURL="/static/images/landing/the-linus-thesis/group-spaced-pengmilio-blur.png"
              ></Image>
            </>
          ) : null}
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
            width={808}
            height={460}
            quality={100}
            className="absolute left-0 bottom-0 z-[0]"
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
