import Image from 'next/image';
import Button from '@/components/UI/Button';

const SoldOut = () => {
  return (
    <div className="w-full relative mt-[745px] max-md:mt-[697px] max-sm:mt-[682px] max-md:h-[250px] bg-[#131d4e]">
      <Image
        src={'/static/images/banners/background.png'}
        alt="Background"
        width={1935}
        height={392}
        quality={100}
        className="w-full object-cover !h-[392px] max-md:object-left"
        placeholder="blur"
        blurDataURL="/static/images/banners/background-blur.jpg"
      />
      <Image
        src={'/static/images/banners/linus-sold-out.png'}
        alt="Linus Shell"
        width={933}
        height={620}
        quality={100}
        className="absolute z-[1] left-[50px] max-2xl:-left-36 bottom-0 h-full object-cover max-md:hidden"
      />
      <Image
        src={'/static/images/banners/linus-sold-out-mobile.png'}
        alt="Linus Shell"
        width={401}
        height={267}
        quality={100}
        className="absolute z-[1] left-0 bottom-0 object-cover md:hidden"
      />
      <div className="flex flex-col justify-center items-end max-lg:h-full max-lg:py-16 max-md:py-6 px-10 container max-lg:justify-between w-full absolute top-0 left-0 right-0 bottom-0 z-[2] gap-3">
        <div className="text-right text-[64px] max-lg:text-[28px] leading-none tracking-[0px] __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] text-white">
          pengmilios <br /> are f*ck!ng <br className="md:hidden" /> sold out
        </div>
        <div className="flex items-center gap-4">
          <Button className="!py-1.5">Trade Now</Button>
        </div>
      </div>
    </div>
  );
};

export default SoldOut;
