'use client'
import Image from "next/image";
import { RoadmapDecorator } from "@/components/layout/BackgroundDecorator";
import useMediaQuery  from "@/hooks/useMediaQuery";


const Roadmao = ({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopXL = useMediaQuery("(min-width: 1280px)");
  const data = [
    { name: "Imagine 5-10% tokens to Points" },
    { name: "Imagine $10B Linea valuation" },
    { name: "Imagine how much TVL will come" },
    { name: "Imagine what will that TVL do" },
    { name: "study $LINUS" },
  ];
  const roadmap = [
    {
      title: 'Q69 2024',
      description: [
        'Linea Surge 🚀🔥',
        'CEX Listings',
        'Top Linea Memecoin',
        'Pengu game',
        'Pengu Stories',
      ],
    },
    {
      title: 'Q420 2024',
      description: [
        'Token2069 Conquest',
        'Surf the Dubai Waves',
        'Linea Ecosystem Partnerships',
      ],
    },
    {
      title: 'Q0 2024',
      description: [
        'Gud Launch',
        'Liquidity Burnt',
        'Web & Socials',
        '25% Burnt Supply 4ever',
      ],
    },
  ]
  return (
    <div
      className={`relative max-lg:mt-[150px] max-lg:px-[54px] max-md:px-[20px] lg:px-[94px] max-md:flex max-md:flex-col ${className}`}
      id={id}
    >
      <RoadmapDecorator />
      <div className="container relative flex flex-col gap-9 max-xl:flex-col-reverse items-center justify-center mx-auto">
        <div className="text-white text-[75px] font-medium text-center max-lg:text-[48px] leading-normal ">Roadmap</div>
        <div className="relative flex items-start max-lg:items-center max-lg:flex-col max-lg:gap-[140px] justify-between w-full xl:w-[85%] mx-auto max-lg:overflow-hidden">
          {roadmap.map((item, index) => (
            <div className="relative flex flex-col gap-10 px-5 w-[28%] max-lg:w-[58%] max-sm:w-[90%]">
              <div className="px-5 w-fit mx-auto py-2 rounded-[20px] bg-picton-blue-400 whitespace-nowrap text-white text-sm font-normal">{item.title}</div>
              <div className="card text-start mx-auto text-white text-xs font-normal max-xl:px-10 px-16 py-8 rounded-[15px]">{
              item.description.map((li, index2) => (
                <li key={index2}>{li}</li>
              ))
              }</div>
              <div className="absolute top-[16px] left-1/2 transform -translate-x-1/2 bg-picton-blue-400 h-[130px] w-1 z-[-1]"></div>
            </div>
          ))}
          <div className="absolute top-[16px] left-1/2 transform -translate-x-1/2 line-gradient h-1 w-[1632px] z-[-1] max-lg:hidden"></div>
          <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 w-[100%] z-[1] max-lg:hidden flex items-center justify-evenly">
            <Image src={'static/images/landing/roadmap/chevron-left.svg'} alt="Chevron Left" className="w-[59px] h-[59px] z-[10]" width={20} height={20}/>
            <Image src={'static/images/landing/roadmap/chevron-left.svg'} alt="Chevron Left" className="w-[59px] h-[59px] z-[10]" width={20} height={20}/>
          </div>
          <Image src={'static/images/landing/roadmap/line-vertical.svg'} alt="Line" className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 line-gradient-vertical h-[729px] w-1 z-[-1] lg:hidden" width={20} height={20}/>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 transform -translate-x-1/2 h-[929px] z-[10] lg:hidden flex items-center justify-evenly flex-col">
            <Image src={'static/images/landing/roadmap/chevron-bottom.svg'} alt="Chevron Bottom" className="w-[59px] h-[59px] z-[10]" width={20} height={20}/>
            <Image src={'static/images/landing/roadmap/chevron-bottom.svg'} alt="Chevron Bottom" className="w-[59px] h-[59px] z-[10]" width={20} height={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmao;
