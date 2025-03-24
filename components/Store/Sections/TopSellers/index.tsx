'use client';
import { useRef, useState, Fragment, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Product } from '@/components/Store/Sections/TopSellers/types';
import { useTopSellers } from '@/hooks/useTopSellers';
import { useCart } from '@/hooks/useCart';

const TopSellers = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const { addToCart } = useCart();
  const {
    loading: shopLoading,
    error: shopError,
    data: shopData,
    handleNext,
    handleBack,
  } = useTopSellers();

  if (shopError) {
    console.error('GraphQL Error:', shopError);
  }

  console.log('shopData', shopData?.products?.edges);
  return (
    <div className={`w-full relative bg-[#FED8ED] ${className}`} id={id}>
      <div className="flex items-center flex-col gap-7 py-4 w-full relative !h-[720px] container">
        <div className="__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px] [-webkit-text-stroke-color:_#000] text-[64px] leading-none text-white tracking-[-5px] mt-12">
          Top Sellers
        </div>
        <div className="flex items-stretch gap-10 justify-center relative">
          {shopLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              {shopData?.products?.edges.map((product: Product) => (
                <Card key={product.node.id} product={product} />
              ))}
              <div
                className={`rounded-full bg-[#F8F7FF] bg-opacity-50 hover:bg-opacity-100 w-[65px] h-[65px] absolute -left-[80px] z-[1] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group`}
                onClick={() => handleBack()}
              >
                <span className="icon-filled-arrow text-black text-[30px] bg-opacity-75 group-hover:bg-opacity-100 mx-auto rotate-180"></span>
              </div>
              <div
                className={`rounded-full bg-[#F8F7FF] bg-opacity-50 hover:bg-opacity-100 w-[65px] h-[65px] absolute -right-[80px] z-[1] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group`}
                onClick={() => handleNext()}
              >
                <span className="icon-filled-arrow text-black text-[30px] bg-opacity-75 group-hover:bg-opacity-100 mx-auto"></span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
