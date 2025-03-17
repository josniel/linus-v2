'use client';
import { useRef, useState, Fragment, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { FooterLanding } from '@/components/layout/Footer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Article } from '@/components/News/Sections/Articles/types';

const ARTICLES = [
  {
    title: 'New Merch',
    description: 'Linus Automatic Rolling Box',
    image: '/static/images/news/articles/new-merch.png',
  },
  {
    title: 'Campaigns with community',
    description: 'Be part of the $LINUS guild',
    image: '/static/images/news/articles/campaign.png',
  },
  {
    title: 'Crack the shell',
    description: 'Hatch your egg $linus',
    image: '/static/images/news/articles/crack-the-shell.png',
  },
  {
    title: 'Who is @pengmilio?',
    description: 'Only good answers',
    image: '/static/images/news/articles/whos-pengmilio.png',
  },
];

const Articles = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  const isDesktopLG = useMediaQuery('(min-width: 1024px)');
  const [articles, setArticles] = useState<string[]>([]);
  const [articlesInfo, setArticlesInfo] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/medium?action=userArticles');
        if (!response.ok) throw new Error('Failed to fetch articles');

        const data = await response.json();

        const latestArticles = data.associated_articles?.slice(0, 4) || [];
        setArticles(latestArticles);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchArticlesInfo = async () => {
      try {
        const articlesInfo = await Promise.all(
          articles.map(async (articleId) => {
            const response = await fetch(
              `/api/medium?action=articleDetails&articleId=${articleId}`
            );
            if (!response.ok)
              throw new Error('Failed to fetch article details');

            const data = await response.json();
            return data;
          })
        );
        setArticlesInfo(articlesInfo);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchArticlesInfo();
  }, [articles]);

  console.log('articles', articles);

  return (
    <div
      className={`w-full relative bg-[#1C3445] mt-[400px] max-lg:pb-32 max-xxs:pb-40 pb-28 ${className}`}
      id={id}
    >
      <div className="w-full relative flex items-center flex-col gap-7 pt-2 h-[950px] max-lg:h-fit container px-5">
        <div className="grid grid-cols-2 gap-4 max-lg:gap-0 max-lg:flex max-lg:flex-col">
          {ARTICLES.map((article, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-2 py-12 px-10 rounded-[43px] [box-shadow:0px_7.854px_0px_0px_#000] bg-white z-[3] mb-8 cursor-pointer group"
            >
              <div className="bg-[#F0F0F0] border-[1.5px] border-[rgba(108,_75,_180,_0.15)] rounded-xl overflow-hidden w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={729}
                  height={232}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="w-full flex items-baseline justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <div
                    className={`text-[32px] leading-none tracking-[-1px] __className_02ffdd [font-feature-settings:_'liga'_off,_'clig'_off] [-webkit-text-stroke-color:_#000] text-white w-full mt-3 max-lg:text-lg ${
                      isDesktopLG
                        ? '[-webkit-text-stroke-width:_2px]'
                        : '[-webkit-text-stroke-width:_1px]'
                    }`}
                  >
                    {article.title}
                  </div>
                  <div className="text-2xl font-medium text-black w-full leading-none max-lg:text-xs">
                    {article.description}
                  </div>
                </div>
                <div className="w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px] rounded-[12px] max-lg:rounded-[10px] bg-black">
                  <div className="flex items-center justify-center rounded-[10px] max-lg:rounded-lg bg-picton-blue-400 w-[60px] h-[60px] max-lg:w-[30px] max-lg:h-[30px] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all">
                    <span className="icon-arrow-right-up text-white text-4xl max-lg:text-lg"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <FooterLanding /> */}
    </div>
  );
};

export default Articles;
