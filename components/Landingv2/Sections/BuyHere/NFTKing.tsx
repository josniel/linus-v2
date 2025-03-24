import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';

const NFTKing = () => {
  const eyesRef = useRef<HTMLImageElement>(null);
  const chainRef = useRef<HTMLImageElement>(null);
  const crownRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const [NFTKingLoaded, setNFTKingLoaded] = useState(false);
  const [eyesLoaded, setEyesLoaded] = useState(false);
  const [chainLoaded, setChainLoaded] = useState(false);
  const [crownLoaded, setCrownLoaded] = useState(false);
  const [goldTeeth, setGoldTeeth] = useState(false);

  const allLoaded = useMemo(
    () =>
      NFTKingLoaded && eyesLoaded && chainLoaded && crownLoaded && goldTeeth,
    [NFTKingLoaded, eyesLoaded, chainLoaded, crownLoaded, goldTeeth]
  );

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
        !eyesRef.current ||
        !chainRef.current ||
        !crownRef.current
      )
        return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const windowHeight = window.innerHeight;
      const visibleAmount = Math.min(windowHeight - rect.top, rect.height);
      const progress = Math.max(0, Math.min(visibleAmount / rect.height, 1));

      const scaleEyes = 0.02 * progress + 1;
      const translateYEyes = -8 * progress;

      const scaleChain = 0.03 * progress + 1;
      const translateYChain = 16 * progress;

      const translateYCrown = -24 * progress;
      const rotateCrown = -14 * progress;

      eyesRef.current.style.transform = `
        scale(${scaleEyes})
        translateY(${translateYEyes}px)
      `;

      chainRef.current.style.transform = `
        scale(${scaleChain})
        translateY(${translateYChain}px)
      `;

      crownRef.current.style.transform = `
        translateY(${translateYCrown}px)
        rotate(${rotateCrown}deg)
      `;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  return (
    <div
      className="absolute bottom-0 -left-5 max-xl:-left-28 w-[435px] max-2xl:w-[348px] h-[607px] max-2xl:h-[485.6px] group max-md:hidden"
      ref={containerRef}
    >
      <Image
        src={'/static/images/landing/buy-here/nft-king.png'}
        alt="NFT King"
        width={435}
        height={607}
        quality={100}
        className={`absolute bottom-0 left-0 w-full h-full transition-all ${
          allLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setNFTKingLoaded(true)}
      />
      <Image
        src={'/static/images/landing/buy-here/eyes.svg'}
        alt="Eyes"
        width={435}
        height={590}
        className={`absolute bottom-0 left-0 w-full h-[590px] max-2xl:h-[472px] group-hover:-translate-y-2 transition-all group-hover:scale-[1.02] ${
          allLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        ref={eyesRef}
        onLoad={() => setEyesLoaded(true)}
      />
      <Image
        src={'/static/images/landing/buy-here/gold-teeth.svg'}
        alt="Gold Teeth"
        width={435}
        height={607}
        className={`absolute bottom-0 left-0 w-full h-full transition-all ${
          allLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setGoldTeeth(true)}
      />
      <Image
        src={'/static/images/landing/buy-here/chain.svg'}
        alt="Chain"
        width={435}
        height={564}
        className={`absolute bottom-9 left-0.5 w-full h-[564px] max-2xl:h-[451.2px] group-hover:translate-y-4 transition-all group-hover:scale-[1.03] ${
          allLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        ref={chainRef}
        onLoad={() => setChainLoaded(true)}
      />
      <Image
        src={'/static/images/landing/buy-here/crown.svg'}
        alt="Crown"
        width={495}
        height={657}
        className={`absolute -bottom-4 left-9 w-[495px] max-2xl:w-[396px] group-hover:rotate-[-14deg] group-hover:-translate-y-6 scale-[1.03] transition-all ${
          allLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        ref={crownRef}
        onLoad={() => setCrownLoaded(true)}
      />
    </div>
  );
};

export default NFTKing;
