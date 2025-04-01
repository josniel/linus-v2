import dynamic from 'next/dynamic';

// Components
const MainSection = dynamic(
  () => import('@/components/Landingv2/Sections/MainSection')
);
const LiquidityBurned = dynamic(
  () => import('@/components/Landingv2/Sections/LiquidityBurned'),
  { ssr: false }
);
const LinusThesis = dynamic(
  () => import('@/components/Landingv2/Sections/LinusThesis')
);
const BuyHere = dynamic(
  () => import('@/components/Landingv2/Sections/BuyHere'),
  { ssr: false }
);
const Explore = dynamic(
  () => import('@/components/Landingv2/Sections/Explore'),
  { ssr: false }
);
const Meet = dynamic(() => import('@/components/Landingv2/Sections/Meet'));
const HallMemes = dynamic(
  () => import('@/components/Landingv2/Sections/HallMemes'),
  { ssr: false }
);
const NewsShop = dynamic(
  () => import('@/components/Landingv2/Sections/NewsShop')
);
const Bridge = dynamic(() => import('@/components/Landingv2/Sections/Bridge'));
const Banner = dynamic(
  () => import('@/components/Landingv2/Banners/CrackTheShell')
);
// const Banner = dynamic(() => import("@/components/Landing/Banners/SoldOut"));

const Landing = () => {
  return (
    <>
      <MainSection id="section0" />
      <Banner />
      <LiquidityBurned id="section1" className="" />
      <LinusThesis id="about" className="" />
      <BuyHere id="buy" className="" />
      <Explore id="section4" className="" />
      <Meet id="section5" className="" />
      <HallMemes id="section5" className="" />
      <NewsShop id="section6" className="" />
      <Bridge id="bridge" className="" />
    </>
  );
};

export default Landing;
