"use client";
import Image from "next/image";
import { AboutUsDecorator } from "@/components/layout/BackgroundDecorator";
import useMediaQuery from "@/hooks/useMediaQuery";

const AboutUs = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery("(min-width: 1280px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isXS = useMediaQuery("(min-width: 530px)");
  const isXXS = useMediaQuery("(min-width: 530px)");
  /* const data = [
    { name: "study $LINUS" },
    { name: "Imagine what will that TVL do" },
    { name: "Imagine how much TVL will come" },
    { name: "Imagine $10B Linea valuation" },
    { name: "Imagine 5-10% tokens to Points" },
  ]; */
  return (
    <div
      className={`relative max-md:flex max-md:flex-col max-xxs:h-[550px] max-xs:h-[620px] xs:h-[720px] sm:h-[700px] max-lg:mt-[300px] ${className}`}
      id={id}
    >
      <a
        target="_blank"
        href={
          "https://mirror.xyz/pengmilio.eth/3ZjfcIn9tuTFoKvX-rfwwK2GoKkcDsFQHQQUqKSrLWA"
        }
        className="w-full"
      >
        <Image
          src={"/static/images/landing/about-us/button-the-linus-thesis.png"}
          width={1080}
          height={1080}
          className={`absolute xs:w-[2200px] xxs:w-[500px] xxs:h-[500px] w-[400px] h-[400px] xs:h-[600px] transform top-[0%] left-1/2 -translate-x-1/2 hover:scale-110 transition-all sm:hidden object-center object-cover`}
          alt="Linus"
        />
      </a>
      <Image
        src={"/static/images/landing/about-us/linus-mobile.png"}
        width={isDesktopXL ? 481 : 226}
        height={isDesktopXL ? 691 : 367}
        className={`absolute w-[250px] bottom-[-120px] right-[-30px] lg:hidden`}
        alt="Linus"
      />
      <AboutUsDecorator />
      <div className="container relative flex max-lg:flex-col items-center justify-center max-lg:mx-auto max-lg:px-[54px] max-lg:justify-end max-lg:h-full max-md:px-[20px] lg:px-[94px]">
        <div className="relative max-lg:w-[100%] w-[65%] flex flex-col justify-center items-center max-lg:justify-end max-lg:h-full gap-4">
          <a
            target="_blank"
            href={
              "https://mirror.xyz/pengmilio.eth/3ZjfcIn9tuTFoKvX-rfwwK2GoKkcDsFQHQQUqKSrLWA"
            }
            className="w-full relative max-lg:mx-auto max-lg:min-h-[600px] flex justify-center"
          >
            <Image
              src={
                "/static/images/landing/about-us/button-the-linus-thesis.png"
              }
              width={1080}
              height={968}
              className={`lg:w-[698px] max-lg:mt-0 hover:scale-105 transition-all max-sm:hidden object-center object-cover w-auto h-[90%]`}
              alt="Linus"
            />
            <Image
              src={"/static/images/landing/about-us/star.svg"}
              width={87}
              height={87}
              className={`absolute top-[70px] md:right-[-30px] xl:right-[20px] max-lg:hidden`}
              alt="Star"
            />
            <Image
              src={"/static/images/landing/about-us/star2.svg"}
              width={44}
              height={44}
              className={`absolute bottom-[-80px] left-[0px] max-lg:hidden`}
              alt="Star2"
            />
          </a>
          <div className="flex items-center max-lg:items-start justify-between max-lg:flex-col-reverse max-w-[698px] w-[80%] max-lg:w-full gap-6">
            <div className="font-normal text-white text-[26px] lg:text-[20px] max-lg:text-base">
              A complete view to the Linus Thesis,
              <div className="font-bold">the plan to go to the moon</div>
            </div>
            <Image
              src={"/static/images/landing/about-us/go-to.svg"}
              alt="Go to"
              className="w-[26px]"
              width={26}
              height={26}
            />
          </div>
        </div>
        <div className="relative max-xl:mt-[30px] max-lg:w-[100%] w-[35%] max-lg:mx-auto flex justify-end max-lg:justify-center max-lg:hidden">
          <Image
            src={"/static/images/landing/about-us/linus.svg"}
            width={isDesktop ? 481 : 226}
            height={isDesktop ? 844 : 367}
            className={`${isDesktop ? "w-[381px]" : "w-[226px]"}`}
            alt="Linus"
          />
          <Image
            src={"/static/images/landing/about-us/gradient.svg"}
            width={isDesktop ? 464 : 350}
            height={336}
            className="absolute bottom-[0px] max-xl:bottom-[-80px] transform left-1/2 -translate-x-1/2  z-[-1] max-xl:w-[350px] w-[464px]"
            alt="Gradient"
          />
          <Image
            src={"/static/images/landing/about-us/gradient2.svg"}
            width={859}
            height={589}
            className="absolute top-0 left-0 z-[-1] w-[859px] max-xl:hidden"
            alt="Gradient2"
          />
        </div>
      </div>

      <Image
          src={"/static/images/footer/red.png"}
          width={199.265}
          height={402.698}
          className={`absolute top-[-52px] left-[0px] 2xl:left-[115px] w-[199.265px] h-[402.698px] z-[-1] max-lg:hidden rotate-[-22deg]`}
          alt="Blue"
        />
      <Image
          src={"/static/images/footer/purple.png"}
          width={199.568}
          height={410.116}
          className={`absolute bottom-[-100px] right-[0] w-[199.568px] h-[410.116px] z-[-1] max-lg:hidden rotate-[16deg]`}
          alt="Blue"
        />
    </div>
  );
};

export default AboutUs;
