'use client';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRouter } from 'next/navigation';

const NewsShop = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const router = useRouter();
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  const isXL = useMediaQuery('(min-width: 1280px)');
  const is2XL = useMediaQuery('(min-width: 1536px)');
  return (
    <div
      className={`w-full relative h-[800px] max-lg:h-[1094px] flex justify-center  ${className}`}
      id={id}
    >
      <div className="absolute left-0 top-0 w-[50%] h-full bg-[#FED8ED] max-lg:hidden"></div>
      <div className="absolute right-0 top-0 w-[50%] h-full bg-[#D3C9FD] max-lg:hidden"></div>
      <div className="w-full relative lg:container h-[800px] max-lg:h-[1094px] flex items-center justify-center max-lg:flex-col">
        <div className="flex h-full w-[50%] max-lg:w-full max-lg:h-[547px] flex-col py-16 gap-4 max-lg:gap-2 px-32 max-md:px-20 max-xs:px-10 relative max-lg:bg-[#FED8ED]">
          <div
            className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-2xl:text-[48px] max-xl:text-[32px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-xl:tracking-[-2px] max-lg:text-center !w-full lg:whitespace-nowrap ${
              is2XL
                ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
                : isXL
                ? '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_4.07px]'
                : isDesktopLG
                ? '[text-shadow:_0px_3.2px_0px_#000] [-webkit-text-stroke-width:_3.27px]'
                : '[text-shadow:_0px_2px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
            }`}
          >
            Latest news <br className="max-lg:hidden" /> of linus
          </div>
          <div className="text-2xl max-lg:text-sm max-2xl:text-base font-medium text-black leading-none w-full max-lg:text-center">
            Explore the unknown with our latest updates and news. Discover
            what's happening in the world of Linus.
          </div>
          <Image
            src={'/static/images/landing/news-shop/pengmilio1.png'}
            alt="Pengmilio 1"
            width={416}
            height={471}
            quality={100}
            className="absolute bottom-0 left-20 max-lg:hidden"
          ></Image>
          <Image
            src={'/static/images/landing/news-shop/pengmilio1-mobile.png'}
            alt="Pengmilio 1 Mobile"
            width={284}
            height={322}
            className="absolute bottom-0 left-0 lg:hidden"
          ></Image>
          <div
            className="flex items-center gap-4 max-lg:gap-2 absolute right-24 max-lg:right-10 bottom-20 group cursor-pointer"
            onClick={() => router.push('/news')}
          >
            <div className="rounded-[12px] max-lg:rounded-[10px] bg-black w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px]">
              <div className="flex items-center justify-center rounded-[10px] max-lg:rounded-[8px] bg-[#FF94C5] w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px] group-hover:-translate-x-2 max-lg:group-hover:-translate-x-1 group-hover:-translate-y-2 max-lg:group-hover:-translate-y-1 transition-all">
                <span className="icon-arrow-right-up text-white text-4xl max-lg:text-base"></span>
              </div>
            </div>
            <div
              className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[32px] max-lg:text-[24px] leading-none text-white tracking-[-2px] max-lg:tracking-[-1px] ${
                isDesktopLG
                  ? '[text-shadow:_0px_2px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
                  : '[text-shadow:_0px_1px_0px_#000] [-webkit-text-stroke-width:_1.07px]'
              }`}
            >
              Read more
            </div>
          </div>
        </div>
        <div className="flex h-full w-[50%] max-lg:w-full max-lg:h-[547px] flex-col py-16 gap-4 max-lg:gap-2 px-32 max-md:px-20 max-xs:px-10 relative max-lg:bg-[#D3C9FD]">
          <div
            className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-2xl:text-[48px] max-xl:text-[32px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-xl:tracking-[-2px] max-lg:text-center !w-full ${
              is2XL
                ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
                : isXL
                ? '[text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_4.07px]'
                : isDesktopLG
                ? '[text-shadow:_0px_3.2px_0px_#000] [-webkit-text-stroke-width:_3.27px]'
                : '[text-shadow:_0px_2px_0px_#000] [-webkit-text-stroke-width:_2.07px]'
            }`}
          >
            Get your <br className="max-lg:hidden" /> linus gear
          </div>
          <div className="text-2xl max-lg:text-sm max-2xl:text-base font-medium text-black leading-none w-full max-lg:text-center">
            Because being part of Linus is a lifestyle. Wear it and let the
            world know you're epic!
          </div>
          <Image
            src={'/static/images/landing/news-shop/pengmilio2.png'}
            alt="Pengmilio 2"
            width={416}
            height={471}
            quality={100}
            className="absolute bottom-0 left-20 max-lg:hidden"
          ></Image>
          <Image
            src={'/static/images/landing/news-shop/pengmilio2-mobile.png'}
            alt="Pengmilio 2 Mobile"
            width={284}
            height={322}
            className="absolute bottom-0 right-0 lg:hidden"
          ></Image>
          <div
            className="flex items-center gap-4 absolute lg:right-24 max-lg:left-10 bottom-20 group cursor-pointer"
            onClick={() => router.push('/store')}
          >
            <div className="rounded-[12px] max-lg:rounded-[10px] bg-black w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px]">
              <div className="flex items-center justify-center rounded-[10px] max-lg:rounded-[8px] bg-picton-blue-400 w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px] group-hover:-translate-x-2 max-lg:group-hover:-translate-x-1 group-hover:-translate-y-2 max-lg:group-hover:-translate-y-1 transition-all">
                <span className="icon-arrow-right-up text-white text-4xl max-lg:text-base"></span>
              </div>
            </div>
            <div
              className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[32px] max-lg:text-[24px] leading-none text-white tracking-[-2px] max-lg:tracking-[-1px] ${
                isDesktopLG
                  ? '[text-shadow:_0px_2px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
                  : '[text-shadow:_0px_1px_0px_#000] [-webkit-text-stroke-width:_1.07px]'
              }`}
            >
              Shop now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsShop;
