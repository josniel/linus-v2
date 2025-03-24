'use client';

import { useCart } from '@/hooks/useCart';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (!cart) return <div>Your cart is empty.</div>;

  // const checkoutRedirectUrl = `https://your-store.myshopify.com/cart/${variantId}:${quantity}`;
  // window.location.href = checkoutRedirectUrl;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.lines.edges.map((line: any) => (
        <div key={line.node.id}>
          <p>{line.node.merchandise.product.title}</p>
          <p>{line.node.merchandise.title}</p>
          <p>Quantity: {line.node.quantity}</p>
          <button
            onClick={() => updateQuantity(line.node.id, line.node.quantity + 1)}
          >
            +
          </button>
          <button
            onClick={() => updateQuantity(line.node.id, line.node.quantity - 1)}
          >
            -
          </button>
          <button onClick={() => removeFromCart(line.node.id)}>Remove</button>
        </div>
      ))}
      <p>
        Total: {cart.estimatedCost.totalAmount.amount}{' '}
        {cart.estimatedCost.totalAmount.currencyCode}
      </p>
    </div>
  );
};
