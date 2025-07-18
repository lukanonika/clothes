import React from 'react'
import ClothesData from './ClothesData';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div>
      <div>
        <div className='flex flex-wrap justify-center gap-10'>
          {ClothesData.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-lg shadow-lg w-64 flex flex-col justify-between"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="text-xl font-bold text-black">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
           <Link to={`/product/${item.id}`}>
          <button className="mt-2 bg-black text-white py-1 px-4 rounded">
            Buy
          </button>
          </Link>
        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
