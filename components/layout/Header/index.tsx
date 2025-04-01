'use client';
import { LogoHeader } from '@/components/Logo';
import React from 'react';
import { MenuMobileLanding } from '@/components/MenuMobile';
import { NavbarLanding } from '@/components/layout/Utils/Navbar';
import { useAuth } from '@/context/AuthContext';

export const HeaderLanding = ({ className = '' }: { className?: string }) => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header
      className="relative flex flex-col mx-auto w-[100%] z-[800] lg:h-[131px]"
      id="header"
    >
      <div className="w-[90%] mx-auto mt-5 flex justify-center">
        <div className="w-[calc(100%-20px)] max-w-[1820px] z-[10]">
          <div
            className={`w-[100%] flex items-center z-10 justify-between max-lg:mb-8`}
          >
            <div className="flex items-center z-10 gap-3">
              <LogoHeader />
            </div>
            <NavbarLanding />
            <MenuMobileLanding />
          </div>
        </div>
      </div>
    </header>
  );
};
