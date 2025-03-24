'use client';
import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import MiniBanner from '@/components/MiniBanner';

const MainSection = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-[883px] max-md:h-[800px] ${className} bg-[#4897d3] overflow-hidden`}
      // style={{
      //   backgroundImage:
      //     'url(/static/images/landing/main-section/background.png)',
      // }}
      id={id}
    >
      <Image
        src={'/static/images/landing/main-section/background.png'}
        alt=""
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/static/images/landing/main-section/background-blur.jpg"
        priority={true}
        quality={100}
      />
      <div className="flex items-center flex-col gap-3 w-full relative z-[1] mt-[100px] max-md:mt-[120px] container">
        <Image
          src={'/static/images/landing/main-section/linus-on-linea.png'}
          alt="Linus on Linea"
          width={3028}
          height={1388}
          className="w-[500px] max-lg:max-w-[85%]"
          priority={true}
        ></Image>
        <div className="text-[#000] font-medium text-center text-[22px] max-lg:text-base max-w-[1092px] w-full max-xl:max-w-[85%] leading-normal">
          Pengmilio, our main character, is a Degen Penguin poised to take the
          crypto world by storm. As he embarks on this journey, he symbolizes
          the spirit of innovation and adventure, ready to engage in the
          revolution of the crypto universe and inspire our community along the
          way.
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 !w-[490px] md:hidden">
        <Image
          src={'/static/images/landing/main-section/eggs-mobile.png'}
          alt="Red Egg"
          width={490}
          height={282}
          quality={100}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] max-lg:w-[750px] lg:h-[250px] group max-md:hidden">
        <Image
          src={'/static/images/landing/main-section/yellow-egg.png'}
          alt="Yellow Egg"
          width={564}
          height={441}
          quality={100}
          className="absolute -bottom-[220px] -left-[200px] group-hover:translate-y-[-100px] transition-all group-hover:rotate-[20deg]"
        />
        <Image
          src={'/static/images/landing/main-section/red-egg.png'}
          alt="Red Egg"
          width={658}
          height={508}
          quality={100}
          className="absolute -bottom-[240px] -left-[80px] group-hover:translate-y-[-100px] transition-all group-hover:rotate-[20deg]"
        />
        <Image
          src={'/static/images/landing/main-section/purple-egg.png'}
          alt="Purple Egg"
          width={569}
          height={443}
          quality={100}
          className="absolute -bottom-[240px] right-[-220px] group-hover:translate-y-[-120px] transition-all group-hover:rotate-[-20deg]"
        />
        <Image
          src={'/static/images/landing/main-section/black-egg.png'}
          alt="Black Egg"
          width={657}
          height={508}
          quality={100}
          className="absolute -bottom-[240px] right-[-120px] group-hover:translate-y-[-120px] transition-all group-hover:rotate-[-20deg]"
        />
        <Image
          src={'/static/images/landing/main-section/white-egg.png'}
          alt="White Egg"
          width={391.5}
          height={521.25}
          quality={100}
          className="absolute -bottom-[240px] left-1/2 -translate-x-1/2 group-hover:translate-y-[-200px] transition-all"
        />
      </div>
      <MiniBanner backgroundClass={'bg-[#D3C9FD]'} />
    </div>
  );
};

export default MainSection;
