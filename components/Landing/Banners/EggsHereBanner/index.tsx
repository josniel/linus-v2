import React from "react";
import TWITTER from "/public/static/images/footer/twitter.svg";
import ELEMENT from "/public/static/images/landing/element.svg";
import Image from "next/image";
const Banner = () => {
  const isPast1Agust = true;
  return (
    <div className="flex h-[250px] lg:h-[390px] w-full overflow-hidden mt-20 -mb-20 relative max-w-[1920px] mx-auto">
      <img
        src={
          isPast1Agust
            ? "static/images/landing/banner-3.png"
            : "static/images/landing/banner-1.png"
        }
        alt="banner"
        className="w-full h-full hidden lg:block object-cover"
      />
      <img
        src={
          isPast1Agust
            ? "static/images/landing/banner-3-movil.png"
            : "static/images/landing/banner-3-movil.png"
        }
        alt="banner"
        className="w-full h-full block lg:hidden object-cover"
      />
      {isPast1Agust ? (
        <>
          <div className="absolute top-[12px] lg:top-[153px] left-1/2 lg:left-[2.8%] xl2:left-[4%] text-white lg:pr-[335px] max-lg:-translate-x-1/2 z-10 [text-shadow:0px_4px_10px_rgba(0,0,0,.4)] whitespace-nowrap">
            <h4 className="text-[60px] xl:text-[87.9995px] xl2:text-[125.7136px] bebas-neue-regular leading-[61.6px] xl2:leading-[88px]">
              THE EGGS ARE HERE
            </h4>
            <p className="text-[22.674px] xl:text-[43.12px] xl2:text-[61.6px] text-center leading-[43px] bebas-neue-regular mt-[-20px] lg:mt-[9.1px] xl2:mt-[13px]">
              CHECK YOURS NOW
            </p>
            <img
              src="static/images/landing/banner-3-egg.png"
              alt="banner"
              className="absolute top-[calc(50%-39px)] -translate-y-1/2 right-0 w-[502px] h-[502px] max-lg:hidden "
            />
          </div>
          <div className="flex absolute items-center gap-[5px] lg:gap-3.5 xl2:gap-5 lg:right-[3.5%] xl2:right-[5%] lg:top-[152px] uppercase bebas-neue-regular text-white text-[14px] lg:text-[17.5px] xl2:text-[25px] max-lg:bottom-[22px] max-lg:left-1/2 max-lg:-translate-x-1/2 z-10">
            <a
              href="https://element.market/linea/launchpad/linus-eggs"
              target="_blank"
              className="whitespace-nowrap uppercase border-[#409BDD] border-[3px] xl2:border-[5px] rounded-[30px] bg-[rgba(64,155,221,0.30)] hover:bg-[#409BDD] transition-colors backdrop-blur-[10px] px-[7px] py-[7px] max-lg:pr-[17px] lg:px-[15px] lg:py-[17.5px] xl2:py-[25px] flex gap-[5px] items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="w-[24px] h-[24px] xl2:w-[32px] xl2:h-[32px]"
                fill="none"
              >
                <path
                  d="M15.9998 28.0024C13.3998 28.0024 11.1945 27.0971 9.38384 25.2864C7.57317 23.4758 6.66739 21.27 6.6665 18.6691C6.6665 16.958 6.95006 15.2358 7.51717 13.5024C8.08428 11.7691 8.81762 10.1971 9.71717 8.78644C10.6167 7.37578 11.6221 6.22555 12.7332 5.33578C13.8443 4.446 14.9332 4.00155 15.9998 4.00244C17.0887 4.00244 18.1834 4.44689 19.2838 5.33578C20.3843 6.22466 21.3843 7.37489 22.2838 8.78644C23.1834 10.198 23.9167 11.77 24.4838 13.5024C25.0509 15.2349 25.3341 16.9571 25.3332 18.6691C25.3332 21.2691 24.4278 23.4749 22.6172 25.2864C20.8065 27.098 18.6007 28.0033 15.9998 28.0024ZM15.9998 25.3358C17.8443 25.3358 19.4167 24.6856 20.7172 23.3851C22.0176 22.0847 22.6674 20.5127 22.6665 18.6691C22.6665 17.4024 22.4496 16.0691 22.0158 14.6691C21.5821 13.2691 21.0376 11.9749 20.3825 10.7864C19.7274 9.598 19.0109 8.61444 18.2332 7.83578C17.4554 7.05711 16.7109 6.66822 15.9998 6.66911C15.3109 6.66911 14.5723 7.058 13.7838 7.83578C12.9954 8.61355 12.2732 9.59711 11.6172 10.7864C10.9612 11.9758 10.4167 13.27 9.98384 14.6691C9.55095 16.0682 9.33406 17.4016 9.33317 18.6691C9.33317 20.5136 9.98339 22.086 11.2838 23.3864C12.5843 24.6869 14.1563 25.3367 15.9998 25.3358ZM17.3332 24.0024C17.7109 24.0024 18.0278 23.8744 18.2838 23.6184C18.5398 23.3624 18.6674 23.046 18.6665 22.6691C18.6656 22.2922 18.5376 21.9758 18.2825 21.7198C18.0274 21.4638 17.7109 21.3358 17.3332 21.3358C16.2221 21.3358 15.2776 20.9469 14.4998 20.1691C13.7221 19.3913 13.3332 18.4469 13.3332 17.3358C13.3332 16.958 13.2052 16.6416 12.9492 16.3864C12.6932 16.1313 12.3767 16.0033 11.9998 16.0024C11.6229 16.0016 11.3065 16.1296 11.0505 16.3864C10.7945 16.6433 10.6665 16.9598 10.6665 17.3358C10.6665 19.1802 11.3167 20.7527 12.6172 22.0531C13.9176 23.3536 15.4896 24.0033 17.3332 24.0024Z"
                  fill="white"
                />
              </svg>
              <span>check yours now</span>
            </a>
            <a
              href="https://twitter.com/LinusOnLinea"
              target="_blank"
              className="border-[#409BDD] border-[3px] xl2:border-[5px] rounded-[30px] bg-[rgba(64,155,221,0.30)] hover:bg-[#409BDD] transition-colors backdrop-blur-[10px] px-[7px] py-[7px] lg:px-[15px] lg:py-[17.5px] xl2:py-[25px] flex gap-[5px] items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="w-[24px] h-[24px] xl2:w-[32px] xl2:h-[32px]"
                fill="none"
              >
                <path
                  d="M17.9671 15.2555L23.8686 8.00244H21.2346L16.7303 13.5419L12.7343 8.00244H7L13.6909 17.2759L7.40286 25.0024H10.0377L14.9277 18.9929L19.2657 25.0024H25L17.9671 15.2555ZM15.9271 17.763L14.6886 16.0468L9.88 9.38539H11.86L15.7411 14.7548L16.978 16.4718L22.1363 23.6195H20.1563L15.9271 17.763Z"
                  fill="white"
                />
              </svg>
              <span className="max-lg:hidden">follow us</span>
            </a>
          </div>
          <img
            src="static/images/landing/banner-3-egg.png"
            alt="banner"
            className="absolute bottom-0 left-[calc(50%+4px)] -translate-x-1/2 w-[255px] h-[255px] lg:hidden "
          />
        </>
      ) : (
        <>
          <div className="absolute top-[3rem] lg:top-[10rem] left-[2rem] lg:left-20">
            <h4 className="text-white text-[2rem] lg:text-[5rem] uppercase mb-2 lg:mb-10 bebas-neue-regular">
              EGGS ARE coming
            </h4>
            <p className="text-white text-[1rem] lg:text-[2rem] uppercase bebas-neue-regular">
              Exclusive egg collection about to hatch
            </p>
          </div>
          <div className="flex absolute right-5 lg:right-20 bottom-10 z-10 items-center gap-3z lg:gap-10">
            <a
              href="https://element.market/linea/launchpad/linus-eggs"
              target="_blank"
              className="flex items-center gap-3"
            >
              <p className="text-white uppercase text-[16px] lg:text-[25px] font-bold bebas-neue-regular">
                check yours now
              </p>
              <div className="rounded-full w-8 lg:w-11 h-8 lg:h-11 bg-shark-400 hover:bg-picton-blue-400 text-white border-2 border-white flex items-center justify-center">
                <Image
                  src={ELEMENT}
                  alt={"Twitter"}
                  className="w-3 h-3 lg:w-5 lg:h-5"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/LinusOnLinea"
              target="_blank"
              className="flex items-center gap-3"
            >
              <p className="text-white uppercase text-[16px] lg:text-[25px] font-bold bebas-neue-regular hidden lg:block">
                follow us
              </p>
              <div className="rounded-full w-8 lg:w-11 h-8 lg:h-11 bg-shark-400 hover:bg-picton-blue-400 text-white border-2 border-white flex items-center justify-center">
                <Image
                  src={TWITTER}
                  alt={"Twitter"}
                  className="w-3 h-3 lg:w-5 lg:h-5"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
};
export default Banner;
