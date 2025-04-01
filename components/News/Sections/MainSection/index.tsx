import Image from 'next/image';

const MainSection = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full !h-[100%] max-h-[780px] ${className} z-[1] bg-[#81d6ff]`}
      id={id}
    >
      <Image
        src={'/static/images/news/main-section/background.png'}
        alt=""
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL="/static/images/news/main-section/background-blur.jpg"
        priority={true}
        quality={100}
      />
      <div className="flex items-center flex-col gap-11 container justify-center h-full relative">
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[32px] leading-none text-white tracking-[-4px] max-lg:tracking-[-1.2px] text-center lg:[text-shadow:_0px_7px_0px_#000] lg:[-webkit-text-stroke-width:_7.07px] [text-shadow:_0px_4px_0px_#000] [-webkit-text-stroke-width:_4.07px]`}
        >
          Latest news of linus
        </div>
        <div className="text-black text-[32px] max-lg:text-sm leading-none font-medium text-center max-w-[800px] tracking-[-2px] max-lg:tracking-[0px]">
          Explore the unknown with our latest updates and news. Discover what's
          happening in the world of Linus.
        </div>
      </div>
    </div>
  );
};

export default MainSection;
