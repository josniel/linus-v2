// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import type { Swiper as SwiperCore } from 'swiper';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import required modules
// import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

// export type SliderScrollState = 'start' | 'end' | 'middle';

// const MEMES = [
//   {
//     image: '/static/images/landing/memes/meme1.jpeg',
//     title: 'Meme 1',
//     href: '',
//   },
//   {
//     image: '/static/images/landing/memes/meme2.jpeg',
//     title: 'Meme 2',
//     href: '',
//   },
//   {
//     image: '/static/images/landing/memes/meme3.jpeg',
//     title: 'Meme 3',
//     href: '',
//   },
//   {
//     image: '/static/images/landing/memes/meme4.jpeg',
//     title: 'Meme 4',
//     href: '',
//   },
//   {
//     image: '/static/images/landing/memes/meme5.jpeg',
//     title: 'Meme 5',
//     href: '',
//   },
//   {
//     image: '/static/images/landing/memes/meme6.jpeg',
//     title: 'Meme 6',
//     href: '',
//   },
// ];

// const Memes = ({ className = '', id }: { className?: string; id?: string }) => {
//   const swiperRef = useRef<SwiperCore | null>(null);
//   let [sliderProgressState, setSliderProgressState] = useState<number>(0);
//   let [activeIndex, setActiveIndex] = useState<number>(0);

//   const [sliderScrollState, setSliderScrollState] =
//     useState<SliderScrollState>('start');

//   let [sliderProgress, setSliderProgress] = useState<number>(0);

//   useEffect(() => {
//     handleSlider();
//   }, [sliderProgress]);

//   const handleSlider = () => {
//     console.log('sliderProgress :>> ', sliderProgress);
//     if (sliderProgress > sliderProgressState) {
//       swiperRef?.current?.slideNext();
//     } else {
//       swiperRef?.current?.slidePrev();
//     }
//     sliderProgressState = sliderProgress;
//     setSliderProgressState(sliderProgressState);
//   };

//   const handleSlideChange = (swiper: any) => {
//     setActiveIndex(swiper.activeIndex);
//     if (swiper.isBeginning) {
//       setSliderScrollState('start');
//     }
//     if (swiper.isEnd || swiper.progress > 0.85) {
//       setSliderScrollState('end');
//     }

//     if (swiper.progress !== 0 && swiper.progress < 0.85) {
//       setSliderScrollState('middle');
//     }
//   };

//   return (
//     <div className="h-[600px] relative flex flex-col items-center justify-center">
//       <div className="text-white text-5xl max-lg:text-4xl font-medium max-lg:font-bold text-center">
//         Hall of Memes
//       </div>
//       <Image
//         src={'/static/images/landing/memes/grid.svg'}
//         width={1600}
//         height={600}
//         className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1586px] max-lg:w-full z-[1] opacity-40 max-lg:hidden`}
//         alt="Grid"
//       />
//       <Image
//         src={'/static/images/landing/memes/star.svg'}
//         width={55}
//         height={55}
//         className={`absolute top-12 left-[280px] z-[1] max-lg:hidden`}
//         alt="Star"
//       />
//       <Image
//         src={'/static/images/landing/memes/ellipse.svg'}
//         width={500}
//         height={350}
//         className={`absolute -top-[500px] left-0 z-[0] max-lg:hidden`}
//         alt="Star"
//       />
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           scale: 0.8,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         spaceBetween={10}
//         direction="horizontal"
//         scrollbar={{ enabled: true, draggable: true }}
//         modules={[Navigation, EffectCoverflow, Pagination]}
//         className="mySwiper max-w-[1400px] pb-20 pt-5"
//         onSlideChange={handleSlideChange}
//         pagination={true}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         initialSlide={3}
//       >
//         {MEMES.map((meme, index) => (
//           <SwiperSlide
//             className="max-w-[335px] my-3 !h-[400px] mb-10 mt-5 relative"
//             key={index}
//           >
//             <a href={'https://twitter.com/linusonlinea'} target="_blank">
//               <Image
//                 src={meme.image}
//                 alt={meme.title}
//                 className="w-[335px] h-[400px] object-cover object-center"
//                 width={1000}
//                 height={1000}
//                 quality={100}
//               ></Image>
//             </a>
//             <div
//               className={`absolute bottom-5 left-1/2 -translate-x-1/2 ${
//                 index === activeIndex ? 'block' : 'hidden'
//               }`}
//             >
//               <svg
//                 width="21"
//                 height="21"
//                 viewBox="0 0 27 27"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle
//                   cx="13.3874"
//                   cy="13.7917"
//                   r="10.8854"
//                   stroke="white"
//                   strokeWidth="1.74167"
//                 />
//                 <path
//                   d="M16.4064 10.773L10.1221 17.0573M16.4064 10.773C15.8563 10.2229 13.262 10.7618 12.4787 10.773M16.4064 10.773C16.9564 11.323 16.4175 13.9173 16.4064 14.7006"
//                   stroke="white"
//                   strokeWidth="1.74167"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div
//           className={`absolute rotate-90 left-0 top-1/2 -translate-y-1/2 transition-opacity text-2xl text-shark-400 bg-shark-50 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer z-20 ${
//             sliderScrollState === 'start' ? 'opacity-0' : 'opacity-100'
//           } max-lg:hidden`}
//           onClick={() => {
//             if (sliderScrollState === 'start') return;
//             sliderProgress--;
//             setSliderProgress(sliderProgress);
//           }}
//         >
//           <div className="icon-chevron relative -bottom-0.5"></div>
//         </div>
//         <div
//           className={`absolute -rotate-90 right-0 top-1/2 -translate-y-1/2 transition-opacity text-2xl text-shark-400 bg-shark-50 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer z-20 ${
//             sliderScrollState === 'end' ? 'opacity-0' : 'opacity-100'
//           } max-lg:hidden`}
//           onClick={() => {
//             if (sliderScrollState === 'end') return;
//             sliderProgress++;
//             setSliderProgress(sliderProgress);
//           }}
//         >
//           <div className="icon-chevron relative -bottom-0.5"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Memes;
