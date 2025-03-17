import React from "react";
import TWITTER from "/public/static/images/footer/twitter.svg";
import ELEMENT from "/public/static/images/landing/element.svg";
import Image from "next/image";
import Buttons from "./Buttons";
const Banner = () => {
  return (
    <div className="flex max-lg:h-[250px] max-sm:h-[320px] lg:h-[390px] w-full overflow-hidden mt-20 -mb-20 relative max-w-[1920px] mx-auto">
      <Image
        src={"/static/images/landing/cumming-banner/background.png"}
        alt="banner"
        className="w-[1920px] h-[392px] max-lg:w-[1344px] max-lg:h-[274px] hidden sm:block object-cover"
        width={1920}
        height={392}
        quality={100}
      />
      <Image
        src={"/static/images/landing/cumming-banner/background-mobile.png"}
        alt="banner"
        className="w-full h-[320px] sm:hidden object-cover"
        width={1920}
        height={392}
        quality={100}
      />
      <Image
        src={"/static/images/landing/cumming-banner/pengmilio-eggs.svg"}
        alt="banner"
        className="w-[660px] h-[392px] max-lg:w-[462px] max-lg:h-[274px] max-sm:w-[330px] max-sm:h-[196px] hidden sm:block bottom-0 left-0 max-xl:-left-16 absolute"
        width={924}
        height={860}
        quality={100}
      />
      <Image
        src={"/static/images/landing/cumming-banner/pengmilio-eggs-mobile.svg"}
        alt="banner"
        className="w-[300px] h-[300px] sm:hidden bottom-0 left-0 absolute"
        width={400}
        height={400}
        quality={100}
      />

      <div className="flex justify-end items-center w-full px-20 max-lg:px-10 max-md:px-3 text-[125px] max-2xl:text-[95px] max-xl:text-[75px] max-lg:text-[60px] max-md:text-[50px] max font-normal bebas-neue-regular [text-edge:cap] [leading-trim:both] [line-height:88%] text-white  absolute top-1/2 -translate-y-1/2">
        <div className=" w-full text-right max-sm:w-[180px]">
          SOMETHING IS CUMMING
        </div>
      </div>

      <Buttons />
    </div>
  );
};
export default Banner;
