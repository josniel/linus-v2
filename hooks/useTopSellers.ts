// hooks/useTopSellers.ts
'use client';
import { useQuery } from '@apollo/react-hooks';
import { useState, useRef } from 'react';
import { GET_PRODUCTS } from '@/lib/shopify';

export const useTopSellers = () => {
  const [cursor, setCursor] = useState<string | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const cursorStack = useRef<string[]>([]);

  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      first: direction === 'next' ? 4 : undefined,
      after: direction === 'next' ? cursor : undefined,
      last: direction === 'prev' ? 4 : undefined,
      before: direction === 'prev' ? cursor : undefined,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleNext = () => {
    const pageInfo = data?.products?.pageInfo;
    if (pageInfo?.hasNextPage) {
      const nextCursor = pageInfo.endCursor;
      if (nextCursor) {
        cursorStack.current.push(cursor!);
        setCursor(nextCursor);
        setDirection('next');
      }
    }
  };

  const handleBack = () => {
    if (cursorStack.current.length > 0) {
      const prevCursor = cursorStack.current.pop();
      setCursor(prevCursor || null);
      setDirection('prev');
    }
  };

  return {
    loading,
    error,
    data,
    handleNext,
    handleBack,
  };
};
