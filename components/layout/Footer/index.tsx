import Image from 'next/image';
import { menuLinksLanding } from '@/data/menuLinks';
import { SOCIALS } from '@/components/Landingv2/Sections/Data';
import InputFooter from './InputFooter';

export const FooterLanding = () => {
  return (
    <footer className="flex flex-col w-[100%] mx-auto bg-[#211C1B] rounded-t-[100px] max-xs:rounded-t-[60px] z-[10] absolute -bottom-80 md:-bottom-40 lg:-bottom-80">
      <div className="mx-auto w-[90%] z-[10] mt-10 max-xxs:mt-14 max-w-[1820px] flex flex-col gap-10">
        <div className="flex lg:items-baseline md:justify-between max-lg:items-center lg:flex-row md:flex-row-reverse max-md:flex-col-reverse gap-5 w-full">
          <div className="flex flex-col items-start gap-5 max-md:w-full max-sm:max-w-[420px]">
            <div
              className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[32px] max-2xl:text-[24px] leading-none text-white tracking-[-3px] max-2xl:tracking-[-1px] max-lg:hidden lg:[text-shadow:_0px_3px_0px_#000] lg:[-webkit-text-stroke-width:_3.07px] [text-shadow:_0px_1px_0px_#000] [-webkit-text-stroke-width:_1.07px]`}
            >
              Info
            </div>
            <div className="lg:flex lg:flex-col items-start gap-3 grid grid-cols-2">
              {menuLinksLanding.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-2xl max-2xl:text-lg font-medium text-white uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-16">
            <div className="flex flex-col items-start gap-5 max-lg:hidden">
              <div
                className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[32px] max-2xl:text-[24px] leading-none text-white tracking-[-3px] max-2xl:tracking-[-1px] lg:[text-shadow:_0px_3px_0px_#000] lg:[-webkit-text-stroke-width:_3.07px] [text-shadow:_0px_1px_0px_#000] [-webkit-text-stroke-width:_1.07px]`}
              >
                Say What up
              </div>
              <div className="text-2xl max-2xl:text-lg font-medium text-white">
                INFO@LINUSONLINEA.COM
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 max-lg:hidden">
              <div
                className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[32px] max-2xl:text-[24px] leading-none text-white tracking-[-3px] max-2xl:tracking-[-1px] lg:[text-shadow:_0px_3px_0px_#000] lg:[-webkit-text-stroke-width:_3.07px] [text-shadow:_0px_1px_0px_#000] [-webkit-text-stroke-width:_1.07px]`}
              >
                News & Updates
              </div>
              <div className="text-2xl max-2xl:text-lg font-medium text-white">
                YOUR EMAIL ADDRESS
              </div>
              <InputFooter />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div
              className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[32px] max-2xl:text-[24px] leading-none text-white tracking-[-3px] max-2xl:tracking-[-1px] text-center lg:[text-shadow:_0px_3px_0px_#000] lg:[-webkit-text-stroke-width:_3.07px] [text-shadow:_0px_1px_0px_#000] [-webkit-text-stroke-width:_1.07px]`}
            >
              Follow us for more
            </div>
            <div className="flex items-center gap-5 flex-wrap gap-y-1 justify-center">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={social.url}
                  className="cursor-pointer flex flex-col items-center w-[110px] max-lg:w-[90px]"
                >
                  <div
                    className={`flex items-center justify-center rounded-xl ${social.background} [box-shadow:4px_4px_0px_0px_#000] w-full h-[81px] max-lg:h-[48px] border border-black`}
                  >
                    <Image
                      src={social.logo}
                      width={66}
                      height={66}
                      alt={social.name}
                      className="max-lg:w-[38px] max-lg:h-[38px]"
                    />
                  </div>
                  <div className="w-full text-black bg-white text-xs font-normal rounded-[5px] border border-black [box-shadow:3.52px_3.52px_0px_0px_#000] text-center py-1 relative -top-1.5">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-[100%] mb-16 flex items-start justify-between z-10 gap-2 max-sm:max-w-[420px]">
          <div className="flex items-center justify-start mt-1 gap-8 max-lg:gap-1 max-lg:items-start max-lg:flex-col">
            <div className="text-white font-normal text-xs">
              <span className="whitespace-nowrap">2024 ©</span> LINUS
            </div>
          </div>
          <div className="relative flex items-start justify-start gap-3 max-lg:gap-1 flex-col max-lg:hidden">
            <a
              target="_blank"
              href={'https://bridge.linea.build/'}
              className="flex items-center justify-end gap-2 w-[100%] cursor-pointer transform transition-transform hover:scale-[1.10] flex-wrap gap-y-0.5"
            >
              <div className="text-white font-normal text-xs whitespace-nowrap">
                Available on
              </div>
              <Image
                src={'/static/images/footer/linea.svg'}
                width={82}
                height={14}
                alt="Blast"
                className="w-[82px]"
                unoptimized={true}
              />
            </a>
          </div>
          <div className="flex items-center gap-4 justify-end flex-wrap gap-y-0.5">
            <div className="text-2xl max-2xl:text-xs font-medium text-white whitespace-nowrap">
              Privacy Policy
            </div>
            <div className="text-2xl max-2xl:text-xs font-medium text-white whitespace-nowrap">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
