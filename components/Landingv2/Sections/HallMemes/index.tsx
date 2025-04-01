'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { MEMES } from '@/components/Landingv2/Sections/Data';
import useMediaQuery from '@/hooks/useMediaQuery';
import SwipeableContainer from './SwipeableContainer';

const HallMemes = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const [memes, setMemes] = useState(MEMES);
  const [lastDeleted, setLastDeleted] = useState<any>(null);
  const [animate, setAnimate] = useState(false);
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  const isMax2XL = useMediaQuery('(max-width: 1535px)');
  const isMaxXL = useMediaQuery('(max-width: 1279px)');
  const isMaxSM = useMediaQuery('(max-width: 639px)');
  const isMaxXS = useMediaQuery('(max-width: 529px)');

  const screenSizeEval = useMemo(() => {
    return (
      isMax2XL !== null &&
      isMaxXL !== null &&
      isMaxSM !== null &&
      isMaxXS !== null &&
      isDesktopLG !== null
    );
  }, [isMax2XL, isMaxXL, isMaxSM, isMaxXS, isDesktopLG]);

  const marginRight = useMemo(() => {
    const totalPixels =
      memes.length === 5
        ? isMaxXS
          ? 200
          : isMaxSM
          ? 300
          : isMaxXL
          ? 400
          : isMax2XL
          ? 540
          : 640
        : memes.length === 4
        ? isMaxXS
          ? 185
          : isMaxSM
          ? 285
          : isMaxXL
          ? 378
          : isMax2XL
          ? 518
          : 618
        : memes.length === 3
        ? isMaxXS
          ? 155
          : isMaxSM
          ? 255
          : isMaxXL
          ? 332
          : isMax2XL
          ? 472
          : 572
        : memes.length === 2
        ? isMaxXS
          ? 65
          : isMaxSM
          ? 165
          : isMaxXL
          ? 197
          : isMax2XL
          ? 340
          : 440
        : isMaxXL
        ? 160
        : isMax2XL
        ? 300
        : 400;
    return `-${totalPixels}px`;
  }, [memes.length, isMax2XL, isMaxXL, isMaxSM, isMaxXS]);

  const handleSwipeLeft = () => {
    if (lastDeleted <= MEMES.length - 1 && lastDeleted) {
      setAnimate(true);
      const memes_ = memes;
      MEMES[lastDeleted].loaded = false;
      memes_.push(MEMES[lastDeleted]);
      if (lastDeleted <= MEMES.length - 1) {
        setLastDeleted(lastDeleted + 1);
      }
    }
  };
  const handleSwipeRight = () => {
    if (memes.length > 1) {
      setAnimate(false);
      setLastDeleted(memes.length - 1);
      const memes_ = memes.slice(0, memes.length - 1);
      setMemes(memes_);
    }
  };

  return (
    // [background:_url(/static/images/landing/the-linus-thesis/background.png)_lightgray_-42px_-107.332px_/_124.703%_122.004%_no-repeat] [background-size:cover] object-center
    <div className={`w-full relative bg-[#1C3445] ${className}`} id={id}>
      <div className="h-[1100px] max-xl:h-[900px] max-lg:h-[720px] max-xs:h-[430px] container flex items-center flex-col gap-7 py-16 max-xs:pt-10">
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] text-center lg:[text-shadow:_0px_6px_0px_#000] lg:[-webkit-text-stroke-width:_6.07px] [text-shadow:_0px_3px_0px_#000] [-webkit-text-stroke-width:_3.07px]`}
        >
          Hall of Memes
        </div>
        <div className="w-[1400px] absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] max-lg:z-[0] max-xs:hidden">
          <Image
            src={'/static/images/landing/memes/pengmilio.png'}
            alt="pengmilio"
            width={790}
            height={1051}
            quality={100}
            className="absolute bottom-0 left-0 max-2xl:w-[690px] max-xl:w-[550px] max-2xl:left-20 max-xl:left-44 max-lg:left-auto max-lg:right-36 max-md:right-56 max-lg:scale-x-[-1] select-none"
            draggable={false}
          ></Image>
        </div>
        <Image
          src={'/static/images/landing/memes/pengmilio-mobile.png'}
          alt="pengmilio"
          width={217}
          height={339}
          quality={100}
          className="absolute bottom-0 -right-16 xs:hidden select-none"
          draggable={false}
        />
        <div className="flex items-center justify-start ml-[100px] max-2xl:ml-[-100px] max-lg:ml-[-470px] max-sm:ml-[-245px] max-2xl:mt-20 max-xl:mt-10 max-xs:mt-2 w-[800px] max-2xl:w-[700px] max-xl:w-[560px] max-sm:w-[460px] max-xs:w-[360px] relative">
          {memes.map((meme, index) => {
            return (
              <div
                key={index}
                className={`rounded-[50px] max-xl:rounded-[40px] max-sm:rounded-[30px] max-xs:rounded-[20px]  overflow-hidden w-[708px] h-[708px] max-2xl:w-[608px] max-2xl:h-[608px] max-xl:w-[468px] max-xl:h-[468px] max-sm:w-[345px] max-sm:h-[345px] max-xs:w-[245px] max-xs:h-[245px] relative transition-all cursor-pointer ${
                  Number(index) !== memes.length - 1
                    ? `blur-sm translate-x-[0px]`
                    : `translate-x-[38px] blur-0 right-[38px] max-2xl:right-[20px] max-xl:right-[10px] max-sm:right-[0px] max-2xl:translate-x-[20px] max-xl:translate-x-[10px] max-sm:translate-x-[0px] !scale-[1] group ${
                        animate ? 'animate-show' : ''
                      }`
                }`}
                onClick={() => {
                  if (Number(index) !== memes.length - 1) {
                    setAnimate(false);
                    setLastDeleted(index + 1);
                    const memes_ = memes.slice(0, index + 1);
                    setMemes(memes_);
                  } else {
                  }
                }}
                style={{
                  scale:
                    Number(index) !== memes.length - 1
                      ? `${
                          (Number(memes.length) === 2 ? 0.95 : 0.8) +
                          (index / (memes.length - 1)) * 0.2
                        }`
                      : '1',
                  marginRight: marginRight,
                  right:
                    memes.length === 1
                      ? isMaxSM
                        ? '-180px'
                        : isMaxXL
                        ? '-272px'
                        : '-268px'
                      : 'auto',
                }}
              >
                {screenSizeEval ? (
                  <div
                    className={`absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-white rounded-[50px] max-xl:rounded-[40px] max-sm:rounded-[30px] max-xs:rounded-[20px] z-1 shadow-sm ${
                      meme.loaded
                        ? 'opacity-0 animate-none'
                        : 'opacity-100 animate-pulse'
                    }`}
                  >
                    <div className="backdrop-blur-md absolute bottom-0 w-full flex flex-col gap-2 px-10 py-5 opacity-100">
                      {/* Botón flotante */}
                      <div className="w-[60px] h-[60px] max-2xl:w-[40px] max-2xl:h-[40px] max-sm:w-[30px] max-sm:h-[30px] absolute right-16 max-2xl:right-10 max-sm:right-5 -top-[30px] max-2xl:-top-[20px] rounded-[12px] max-2xl:rounded-[10px] bg-[#1c3445] animate-pulse"></div>

                      {/* Título */}
                      <div className="bg-[#1c3445] rounded-md h-[36px] max-2xl:h-[28px] max-sm:h-[18px] w-3/4 animate-pulse"></div>

                      {/* Descripción */}
                      <div className="bg-[#1c3445] rounded-md h-[20px] max-2xl:h-[18px] max-sm:h-[14px] w-full animate-pulse"></div>
                      <div className="bg-[#1c3445] rounded-md h-[20px] max-2xl:h-[18px] max-sm:h-[14px] w-5/6 animate-pulse"></div>
                    </div>
                  </div>
                ) : null}
                <SwipeableContainer
                  handleSwipeLeft={handleSwipeLeft}
                  handleSwipeRight={handleSwipeRight}
                >
                  <Image
                    src={meme.image}
                    alt={meme.title}
                    width={708}
                    height={708}
                    quality={100}
                    className={`w-full h-full select-none ${
                      meme.loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    draggable={false}
                    onLoad={() => {
                      memes[index].loaded = true;
                      setMemes([...memes]);
                    }}
                  ></Image>
                  {!meme.loaded ? <div className="w-full h-full"></div> : null}
                </SwipeableContainer>
                <div
                  className={`backdrop-blur-md absolute bottom-0 w-full flex flex-col gap-2 max-xs:gap-0.5 px-10 max-xs:px-4 max-xs:py-2.5 py-5 ${
                    meme.loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="w-[60px] h-[60px] max-2xl:w-[40px] max-2xl:h-[40px] max-sm:w-[30px] max-sm:h-[30px] absolute right-16 max-2xl:right-10 max-sm:right-5 -top-[30px] max-2xl:-top-[20px] rounded-[12px] max-2xl:rounded-[10px] bg-black">
                    <div className="flex items-center justify-center rounded-[10px] max-2xl:rounded-[8px] max-xl: bg-picton-blue-400 w-[60px] h-[60px] max-2xl:w-[40px] max-2xl:h-[40px] max-sm:w-[30px] max-sm:h-[30px] group-hover:-translate-x-2 max-lg:group-hover:-translate-x-1 group-hover:-translate-y-2 max-lg:group-hover:-translate-y-1 transition-all">
                      <span className="icon-arrow-right-up text-white text-4xl max-2xl:text-xl max-sm:text-base"></span>
                    </div>
                  </div>
                  <div className="text-white text-3xl max-2xl:text-2xl max-sm:text-xs font-medium __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] tracking-[-2px] max-sm:tracking-[-0.2px]">
                    {meme.title}
                  </div>
                  <div className="text-white text-lg max-2xl:text-base max-sm:text-xs font-normal leading-[1.1] max-2xl:leading-[1.05] max-sm:leading-[1.01]">
                    {meme.description.length > 100
                      ? `${meme.description.substring(0, 100)}...`
                      : meme.description}
                  </div>
                </div>
              </div>
            );
          })}
          {lastDeleted <= MEMES.length - 1 && lastDeleted ? (
            <div
              className={`rounded-full bg-[#F8F7FF] bg-opacity-50 hover:bg-opacity-100 w-[65px] h-[65px] max-sm:w-[40px] max-sm:h-[40px] absolute left-[230px] max-2xl:left-[215px] max-xl:left-[210px] max-sm:left-[135px] z-[10] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group`}
              onClick={handleSwipeLeft}
            >
              <span className="icon-filled-arrow text-black bg-opacity-75 group-hover:bg-opacity-100 text-[30px] max-sm:text-[22px] mx-auto scale-x-[-1]"></span>
            </div>
          ) : null}
          {memes.length > 1 ? (
            <div
              className={`rounded-full bg-[#F8F7FF] bg-opacity-50 hover:bg-opacity-100 w-[65px] h-[65px] max-sm:w-[40px] max-sm:h-[40px] absolute -right-[294px] max-2xl:right-[-274px] max-xl:right-[-260px] max-sm:right-[-110px] z-[10] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group`}
              onClick={handleSwipeRight}
            >
              <span className="icon-filled-arrow text-black bg-opacity-75 group-hover:bg-opacity-100 text-[30px] max-sm:text-[22px] mx-auto"></span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HallMemes;
