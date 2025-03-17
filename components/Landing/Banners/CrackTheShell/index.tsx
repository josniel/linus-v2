import Image from 'next/image';
import Button from '@/components/UI/Button';

const CrackTheShell = () => {
  return (
    <div className="w-full relative mt-[745px] max-md:mt-[697px] max-sm:mt-[682px] max-md:h-[250px]">
      <Image
        src={'/static/images/banners/background.png'}
        alt="Background"
        width={1935}
        height={392}
        quality={100}
        className="w-full object-cover !h-[392px] max-md:object-left"
      />
      <Image
        src={'/static/images/banners/shell-linus.png'}
        alt="Linus Shell"
        width={785}
        height={858}
        quality={100}
        className="absolute z-[1] xl:left-1/2 xl:-translate-x-1/2 bottom-0 h-full object-cover max-xl:-left-28 max-sm:hidden"
      />
      <Image
        src={'/static/images/banners/shell-linus-mobile.png'}
        alt="Linus Shell"
        width={308}
        height={257}
        quality={100}
        className="absolute z-[1] left-0 bottom-0 object-cover sm:hidden"
      />
      <div className="flex flex-col justify-center max-lg:h-full max-lg:py-16 max-md:py-6 px-10 container max-lg:justify-between items-end w-full absolute top-0 left-0 right-0 bottom-0 z-[2] gap-3">
        <div className="text-right text-[64px] max-lg:text-[28px] leading-none tracking-[0px] __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] text-white">
          Ready <br /> to crack <br /> the shell?
        </div>
        <div className="flex items-center gap-4">
          <Button className="!py-1.5 !px-8 max-md:!px-5">
            <div className="icon-egg text-2xl block mr-1"></div>
            Mint Now
          </Button>
          <Button className="!py-1.5 !px-8 max-md:!px-5">
            <div className="icon-x-1 text-2xl block mr-1"></div>
            <div className="max-md:hidden">Follow Us</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CrackTheShell;
