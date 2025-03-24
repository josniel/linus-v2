'use client';
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const endDate = '2025-01-10T00:00:00Z';

const calculateTimeLeft = () => {
  const difference = +new Date(endDate) - +new Date();
  let timeLeft: TimeLeft = {} as TimeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex items-center justify-center gap-2 text-[88px] max-2xl:text-[60px] max-xl:text-[50px] max-lg:text-[45px] max-md:text-[35px] font-normal bebas-neue-regular [text-edge:cap] [leading-trim:both] [line-height:88%] text-white">
      <div className="text-white border-2 border-white border-opacity-50 rounded-[.8406rem] py-3 px-2">
        {timeLeft.days ? timeLeft.days.toString().padStart(2, '0') : '00'}
      </div>
      <span>:</span>
      <div className="text-white border-2 border-white border-opacity-50 rounded-[.8406rem] py-3 px-2">
        {timeLeft.hours ? timeLeft.hours.toString().padStart(2, '0') : '00'}
      </div>
      <span>:</span>
      <div className="text-white border-2 border-white border-opacity-50 rounded-[.8406rem] py-3 px-2">
        {timeLeft.minutes ? timeLeft.minutes.toString().padStart(2, '0') : '00'}
      </div>
      <span>:</span>
      <div className="text-white border-2 border-white border-opacity-50 rounded-[.8406rem] py-3 px-2">
        {timeLeft.seconds ? timeLeft.seconds.toString().padStart(2, '0') : '00'}
      </div>
    </div>
  );
};

export default CountdownTimer;
