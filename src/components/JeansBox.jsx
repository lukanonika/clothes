import React from 'react'
import jeansData from './Jeansinfo.jsx';
import { Link } from "react-router-dom";
import { useState } from 'react';

const JeansBox = () => {
  const bigBox = jeansData.find(item => item.size === "big");
  const smallBoxes = jeansData.filter(item => item.size === "small");

  return (
    <div className="text-black w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10">
  <h2 className="text-3xl sm:text-4xl font-bold text-center audiowide mb-10">
    Jeans Collection:
  </h2>

  <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto p-6 rounded-2xl bg-white shadow-lg border border-gray-300">

    <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6">
      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl novasquare font-bold mb-2">{bigBox.name}</h1>
        <p className="text-gray-600">{bigBox.description}</p>
      </div>
      <Link to={`/product/${bigBox.id}`}>
        <img
          src={bigBox.image}
          alt={bigBox.name}
          className="w-36 sm:w-40 object-contain cursor-pointer transition duration-300 hover:scale-105"
        />
      </Link>
    </div>

    <div className="flex flex-col gap-6 flex-1">
      {smallBoxes.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-300"
        >
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold novasquare mb-2">{item.name}</h1>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <Link to={`/product/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-36 object-cover rounded-lg cursor-pointer transition duration-300 hover:scale-105"
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default JeansBox
