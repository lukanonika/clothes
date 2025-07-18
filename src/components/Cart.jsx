import React from 'react';
import cart from '../assets/cart.png';

export default function Cart({ cartCount, isVisible }) {
  if (!isVisible) return null;

  return (
  <div className="fixed top-2 right-2 z-50">
  <div className="relative inline-block">
    <img src={cart} alt="Cart Icon" className="w-[80%] h-[80%]" />

    <p className="absolute bottom-0 left-0 bg-black text-white rounded-full w-6 h-6 text-xs flex items-center justify-center select-none">
      {cartCount}
    </p>
  </div>
</div>


  );
}
