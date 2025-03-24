'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const Explore = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * video.duration;

    video.currentTime = newTime;
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleDragging = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !videoRef.current || !progressRef.current) return;

    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;

    const bar = progressRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const width = rect.width;

    const clampedX = Math.max(0, Math.min(clickX, width));
    const newProgress = (clampedX / width) * 100;
    const newTime = (clampedX / width) * videoRef.current.duration;

    setProgress(newProgress);
    videoRef.current.currentTime = newTime;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragging);
      document.addEventListener('touchmove', handleDragging);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchend', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleDragging);
      document.removeEventListener('touchmove', handleDragging);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDragging);
      document.removeEventListener('touchmove', handleDragging);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  return (
    <div className={`w-full relative bg-[#D3C9FD] ${className}`} id={id}>
      <div className="w-full relative container flex items-center justify-center flex-col gap-7 py-20 !h-[900px]">
        <div
          className={`__className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-[64px] max-lg:text-[24px] leading-none text-white tracking-[-5px] max-lg:tracking-[-1px] text-center max-lg:w-[85%] ${
            isDesktopLG
              ? '[text-shadow:_0px_6px_0px_#000] [-webkit-text-stroke-width:_6.07px]'
              : '[text-shadow:_0px_3px_0px_#000] [-webkit-text-stroke-width:_3.07px]'
          }`}
        >
          Explore the World of Linus
        </div>
        <div className="text-black font-medium text-2xl max-lg:text-sm max-w-[1000px] max-lg:max-w-[85%] text-center leading-none">
          Dive into the evolution of Linus Eggs and discover how they become
          Pengmilios. Explore our exclusive videos where we share the latest
          updates and the epic story behind our penguins. Watch, learn, and be
          part of this incredible adventure!
        </div>
        <div className="border-[6px] rounded-[30px] border-black overflow-hidden w-[1000px] h-[685px] max-lg:w-[85%] relative max-lg:px-4 max-lg:pt-4 max-lg:pb-28 max-lg:bg-white flex items-center gap-4 flex-col">
          {/* <Image
            src={'/static/images/landing/explore/explore.svg'}
            alt="explore"
            width={1285}
            height={685}
            className="w-full h-full object-cover object-center rounded-[30px]"
          ></Image> */}
          <video
            className="w-full h-full rounded-[24px] overflow-hidden"
            muted
            playsInline
            ref={videoRef}
          >
            <source
              src={'/static/videos/main-video2.mp4'}
              type="video/mp4"
            ></source>
          </video>
          <div className="flex items-center justify-between gap-4 lg:hidden px-4 w-full">
            <div
              className="rounded-full bg-black group w-[39px] h-[39px] flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <div className="bg-[#D3C9FD] border border-[#D3C9FD] rounded-full flex items-center w-[40px] h-[40px] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                <span className="icon-filled-arrow text-black text-xl mx-auto"></span>
              </div>
            </div>
            <div
              className="flex items-center w-full h-2.5 rounded-[20px] bg-[#CBCBCB] relative"
              onClick={handleSeek}
              ref={progressRef}
            >
              <div
                className="bg-[#D3C9FD] absolute top-0 left-0 bottom-0 h-full rounded-[20px]"
                style={{ width: `${progress}%` }}
              ></div>
              <div
                className="bg-[#D3C9FD] absolute top-1/2 -translate-y-1/2 h-[14px] w-[14px] rounded-full touch-none"
                style={{ left: `calc(${progress}% - 7px)` }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
              ></div>
            </div>
          </div>
          <div
            className="rounded-full bg-black group w-[86px] h-[86px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer max-lg:hidden"
            onClick={togglePlay}
          >
            <div className="bg-[#D3C9FD] border border-[#D3C9FD] rounded-full flex items-center w-[87px] h-[87px] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
              <span className="icon-filled-arrow text-black text-[44px] mx-auto"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
