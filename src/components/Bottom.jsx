import React from 'react'
import StussyText from '../assets/stussytext.png';

const Bottom = () => {
   return (
   <footer className="w-full text-white px-6 py-5 flex justify-center items-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl w-full flex-wrap">
    
    <div className="flex justify-center">
      <img src={StussyText} alt="Stussy Logo" className="w-[70%] max-w-sm" />
    </div>

    <div className="max-w-xl text-center">
      <p className="text-base bold md:text-lg sm:text-md text-black mb-6">
        At Stussy, we blend streetwear style with bold identity. Our mission is to empower individuals through fashion that speaks their truth — crafted with attitude, confidence, and creativity.
      </p>

      <div className="text-lg flex gap-6 flex-wrap justify-center mb-4">
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
        <a href="#" className="hover:text-gray-400">Shop</a>
        <a href="#" className="hover:text-gray-400">Support</a>
      </div>

      <p className="text-sm  text-gray-500">&copy; {new Date().getFullYear()} Stussy. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Bottom
