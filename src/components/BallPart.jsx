import React from 'react'
import stussyjacket from '../assets/8balljacket.png';

const BallPart = () => {
  return (
    

<div className="flex flex-col-reverse md:flex-row items-center justify-between mb-[10%] audiowide px-6">
  <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
    <h2 className="text-3xl sm:text-4xl text-black font-bold">Classic Stussy Jacket</h2>
    <p className="text-gray-400 mt-4 font-bold">
      Our Iconic Stussy Logo Adorned On A Heavy-Duty, Stylish, And Streetwear Piece.
    </p>
    <button className="bg-black text-white px-6 py-3 mt-6 rounded-md hover:bg-gray-800 transition">
      Shop Now
    </button>
  </div>

  <div className="flex-1 flex items-center justify-center relative">
    <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gray-200 z-0" />
    <img
      src={stussyjacket}
      alt="Stussy Jacket"
      className="z-10  sm:w-70 md:w-85 h-auto "
    />
  </div>
</div>


  )
};

export default BallPart;