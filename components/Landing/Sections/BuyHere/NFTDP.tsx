import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const NFTDP = () => {
  const suitRef = useRef<HTMLImageElement>(null);
  const angryRef = useRef<HTMLImageElement>(null);
  const sniffRef = useRef<HTMLImageElement>(null);
  const smokeRef = useRef<HTMLImageElement>(null);
  const flameRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // apenas entra un 10% del elemento en pantalla
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isInView ||
        !suitRef.current ||
        !angryRef.current ||
        !sniffRef.current ||
        !smokeRef.current ||
        !flameRef.current
      )
        return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const visibleAmount = Math.min(windowHeight - rect.top, rect.height);
      const progress = Math.max(0, Math.min(visibleAmount / rect.height, 1));

      const scaleSuit = 0.05 * progress + 1;
      const translateYSuit = -8 * progress;

      const translateXAngry = 4 * progress;

      const rotateSniff = 4 * progress;
      const scaleSniff = 0.02 * progress + 1;
      const translateYSniff = -2 * progress;

      const scaleSmoke = 0.3 * progress + 0.5;
      const translateXSmoke = 24 * progress;
      const translateYSmoke = -24 * progress;

      const opacityFlame = 0.9 * progress + 0.1;

      suitRef.current.style.transform = `
        scale(${scaleSuit})
        translateY(${translateYSuit}px)
      `;
      angryRef.current.style.transform = `
        translateX(${translateXAngry}px)
      `;
      sniffRef.current.style.transform = `
        rotate(${rotateSniff}deg)
        scale(${scaleSniff})
        translateY(${translateYSniff}px)
      `;
      smokeRef.current.style.transform = `
        scale(${scaleSmoke})
        translateX(${translateXSmoke}px)
        translateY(${translateYSmoke}px)
      `;
      flameRef.current.style.opacity = opacityFlame.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);
  return (
    <div
      className="absolute bottom-0 -right-2 max-xl:-right-16 w-[417px] max-2xl:w-[333.6px] h-[523px] max-2xl:h-[418.4px] group overflow-hidden max-md:hidden"
      ref={containerRef}
    >
      <Image
        src={'/static/images/landing/buy-here/niggmilio.svg'}
        alt="Niggmilio"
        width={417}
        height={523}
        className="absolute bottom-0 right-0 w-full h-full"
      />
      <Image
        src={'/static/images/landing/buy-here/suit.svg'}
        alt="Suit"
        width={417}
        height={523}
        className="absolute bottom-0 right-0 w-full h-full group-hover:scale-[1.04] group-hover:-translate-y-2 transition-all"
        ref={suitRef}
      />
      <Image
        src={'/static/images/landing/buy-here/angry.svg'}
        alt="Angry"
        width={417}
        height={523}
        className="absolute -bottom-3 right-8 w-full h-full group-hover:translate-x-1 transition-all"
        ref={angryRef}
      />
      <Image
        src={'/static/images/landing/buy-here/sniff.svg'}
        alt="Sniff"
        width={417}
        height={523}
        className="absolute bottom-0 right-4 w-full h-full group-hover:rotate-[4deg] group-hover:-translate-y-0.5 transition-all group-hover:scale-[1.02]"
        ref={sniffRef}
      />
      <Image
        src={'/static/images/landing/buy-here/music.svg'}
        alt="Music"
        width={417}
        height={523}
        className="absolute bottom-0 right-0 w-full h-full"
      />
      <div className="absolute top-[133px] right-0 w-[266px] max-2xl:w-[212.8px] h-[217px] max-2xl:h-[173.6px]">
        <Image
          src={'/static/images/landing/buy-here/smoke.svg'}
          alt="Smoke"
          width={149}
          height={120}
          className="absolute -bottom-8 right-4 w-full h-full scale-[0.5] group-hover:scale-[0.8] group-hover:translate-x-6 group-hover:-translate-y-6 transition-all"
          ref={smokeRef}
        />
        <Image
          src={'/static/images/landing/buy-here/flame.svg'}
          alt="Flame"
          width={154}
          height={123}
          className="absolute bottom-0 -right-3.5 w-full h-full opacity-10 group-hover:opacity-100 transition-all"
          ref={flameRef}
        />
        <Image
          src={'/static/images/landing/buy-here/joint.svg'}
          alt="Joint"
          width={259}
          height={208}
          className="absolute bottom-0 right-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default NFTDP;
