'use client';
import { useState } from 'react';
// Components
import MainSection from '@/components/Landing/Sections/MainSection';
import LiquidityBurned from '@/components/Landing/Sections/LiquidityBurned';
import LinusThesis from '@/components/Landing/Sections/LinusThesis';
import BuyHere from '@/components/Landing/Sections/BuyHere';
import Explore from '@/components/Landing/Sections/Explore';
import Meet from '@/components/Landing/Sections/Meet';
import HallMemes from '@/components/Landing/Sections/HallMemes';
import NewsShop from '@/components/Landing/Sections/NewsShop';
import Bridge from '@/components/Landing/Sections/Bridge';
import Banner from '@/components/Landing/Banners/CrackTheShell';
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
