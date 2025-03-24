'use client';
import { useState } from 'react';
// Components
import MainSection from '@/components/Landingv2/Sections/MainSection';
import LiquidityBurned from '@/components/Landingv2/Sections/LiquidityBurned';
import LinusThesis from '@/components/Landingv2/Sections/LinusThesis';
import BuyHere from '@/components/Landingv2/Sections/BuyHere';
import Explore from '@/components/Landingv2/Sections/Explore';
import Meet from '@/components/Landingv2/Sections/Meet';
import HallMemes from '@/components/Landingv2/Sections/HallMemes';
import NewsShop from '@/components/Landingv2/Sections/NewsShop';
import Bridge from '@/components/Landingv2/Sections/Bridge';
import Banner from '@/components/Landingv2/Banners/CrackTheShell';
// import Banner from '@/components/Landing/Banners/SoldOut';
import CTAAlert from '@/components/Modals/CTAAlert';

const Landing = () => {
  const [openModal, setOpenModal] = useState(true);

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

      {/* <CTAAlert openModal={openModal} setOpenModal={setOpenModal} /> */}
    </>
  );
};

export default Landing;
