import { Fragment } from 'react';
import Image from 'next/image';

const repeatedElements = Array(5).fill(
  <div className="flex items-center gap-2 flex-nowrap">
    <Image
      src={'/static/images/header/linus-white.svg'}
      alt="Linus"
      className="w-[32px] h-[32px] max-md:w-[16px] max-md:h-[16px]"
      width={32}
      height={32}
      unoptimized={true}
    />
    <div className="text-[#000] font-medium text-lg max-md:text-[8px] leading-normal whitespace-nowrap">
      Welcome to the home of pengmilio
    </div>
  </div>
);

interface MiniBannerProps {
  backgroundClass: string;
}

const MiniBanner = ({ backgroundClass }: MiniBannerProps) => {
  return (
    <div
      className={`${backgroundClass} w-full h-14 max-md:h-7 mt-5 flex items-center justify-around gap-16 max-md:gap-8 absolute bottom-0 z-[3] overflow-scroll flex-nowrap hide-scroll px-4`}
    >
      {repeatedElements.map((element, index) => (
        <Fragment key={index}>{element}</Fragment>
      ))}
    </div>
  );
};
export default MiniBanner;
