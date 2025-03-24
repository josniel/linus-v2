'use client';
import { useLazyQuery } from '@apollo/client';
import {
  CREATE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_LINE,
  GET_CART,
} from '@/lib/shopify';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

export const useCart = () => {
  const [loadCartQuery] = useLazyQuery(GET_CART);
  const [cartId, setCartId] = useState<string | null>(null);
  const [cart, setCart] = useState<any>(null);

  const [createCartMutation] = useMutation(CREATE_CART);
  const [addToCartMutation] = useMutation(ADD_TO_CART);
  const [removeFromCartMutation] = useMutation(REMOVE_FROM_CART);
  const [updateCartLineMutation] = useMutation(UPDATE_CART_LINE);

  useEffect(() => {
    const storedCartId = localStorage.getItem('cartId');
    if (storedCartId) {
      setCartId(storedCartId);
      loadCartQuery({ variables: { cartId: storedCartId } }).then(
        ({ data }) => {
          if (data?.cart) {
            setCart(data.cart);
          }
        }
      );
    }
  }, []);

  const createCart = async (variantId: string, quantity = 1) => {
    const { data } = await createCartMutation({
      variables: {
        input: {
          lines: [
            {
              merchandiseId: variantId,
              quantity,
            },
          ],
        },
      },
    });

    const newCart = data?.cartCreate?.cart;
    if (newCart) {
      localStorage.setItem('cartId', newCart.id);
      setCartId(newCart.id);
      setCart(newCart);
    }

    return newCart;
  };

  const addToCart = async (variantId: string, quantity = 1) => {
    if (!cartId) {
      return await createCart(variantId, quantity);
    }

    const { data } = await addToCartMutation({
      variables: {
        cartId,
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
    });

    const updatedCart = data?.cartLinesAdd?.cart;
    setCart(updatedCart);
    return updatedCart;
  };

  const removeFromCart = async (lineId: string) => {
    if (!cartId) return;

    const { data } = await removeFromCartMutation({
      variables: {
        cartId,
        lineIds: [lineId],
      },
    });

    const updatedCart = data?.cartLinesRemove?.cart;
    setCart(updatedCart);
    return updatedCart;
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cartId) return;

    const { data } = await updateCartLineMutation({
      variables: {
        cartId,
        lines: [{ id: lineId, quantity }],
      },
    });

    const updatedCart = data?.cartLinesUpdate?.cart;
    setCart(updatedCart);
    return updatedCart;
  };

  return {
    cart,
    cartId,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};
