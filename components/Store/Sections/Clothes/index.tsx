'use client';
import { useRef, useState, Fragment, useMemo } from 'react';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import Card from './Card';

const products = [
  {
    id: 1,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['bg-[#9A9A9A]', 'bg-[#000000]', 'bg-[#FFFFFF]', 'bg-[#009AFD]'],
    image: '/static/images/store/clothes/t-shirt.png',
    price: 17.9,
  },
  {
    id: 2,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['bg-[#9A9A9A]', 'bg-[#000000]', 'bg-[#FFFFFF]', 'bg-[#96C8C0]'],
    image: '/static/images/store/clothes/t-shirt2.png',
    price: 17.9,
  },
];

const Clothes = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <div
      className={`w-full relative !h-[960px] bg-picton-blue-400 flex items-center flex-col gap-7 py-4 mb-80 ${className}`}
      id={id}
    >
      <div className="flex items-center flex-col container gap-10">
        <div className="__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px] [-webkit-text-stroke-color:_#000] text-[64px] leading-none text-white tracking-[-5px] mt-12 w-full">
          Clothes
        </div>
        <div className="flex items-center justify-center w-full gap-20">
          <div className="flex flex-col items-center gap-4 w-[41%]">
            <div className="flex items-stretch gap-10 justify-start relative">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
              <div
                className={`rounded-full bg-[#F8F7FF] bg-opacity-50 hover:bg-opacity-100 w-[65px] h-[65px] absolute -left-[50px] z-[1] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group`}
              >
                <span className="icon-filled-arrow text-black text-[30px] bg-opacity-75 group-hover:bg-opacity-100 mx-auto rotate-180"></span>
              </div>
              <div
                className={`rounded-full bg-[#F8F7FF] bg-opacity-50 hover:bg-opacity-100 w-[65px] h-[65px] absolute -right-[50px] z-[1] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all cursor-pointer group`}
              >
                <span className="icon-filled-arrow text-black text-[30px] bg-opacity-75 group-hover:bg-opacity-100 mx-auto"></span>
              </div>
            </div>
            <div className="text-white py-5 px-6 bg-white bg-opacity-40 rounded-[27.5px] border-[1.5px] border-[rgba(108,75,180,0.15)]">
              A distinctive touch that provides comfort and class that will
              highlight your style in an exceptional way. A must-have in your
              wardrobe.
            </div>
          </div>
          <div className="flex items-center flex-col gap-3">
            <div className="rounded-[20px] bg-[#F0F0F0] [filter:drop-shadow(77.636px_25.245px_21.904px_rgba(48,_90,_155,_0.20))] overflow-hidden">
              <Image
                src={'/static/images/store/clothes/t-shirt3.png'}
                alt="t-shirt3"
                width={872}
                height={827}
                quality={100}
                className="w-[672px] "
              ></Image>
            </div>
            <div className="bg-white bg-opacity-40 flex items-center gap-5 py-0.5 px-8 rounded-xl">
              <div className="__className_02ffdd text-white text-4xl cursor-pointer">
                -
              </div>
              <div className="icon-search-1 font-medium text-2xl text-white __className_02ffdd cursor-pointer"></div>
              <div className="__className_02ffdd text-white text-4xl cursor-pointer">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
