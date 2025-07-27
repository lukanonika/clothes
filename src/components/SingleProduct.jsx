import React from 'react';
import Navbar from './Navbar';
import Bottom from '../components/Bottom.jsx';
import { useParams } from 'react-router-dom';
import ClothesData from '../components/ClothesData.jsx';
import JeansData from '../components/JeansData.jsx';
import { useCart } from '../components/CartContext.jsx';

const SingleProduct = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const { addToCart } = useCart(); 

  const allProducts = [...ClothesData, ...JeansData];
  const product = allProducts.find((item) => item.id === numericId);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Product not found 😢
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="min-h-screen text-black">
      <Navbar />

      <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-8 md:px-16 py-12 md:py-20 mt-10 shadow-2xl rounded-xl transition-all">
        
        {/* PRODUCT IMAGE */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg p-6 rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="w-full max-w-md space-y-6 text-center md:text-left">
          <h1 className="audiowide text-3xl sm:text-4xl font-bold">{product.name}</h1>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-serif">
            {product.description ||
              "This product is part of our exclusive streetwear collection, combining comfort with modern design. Made from high-quality fabric, it's perfect for daily wear or standout street style."}
          </p>

          {/* SIZE SELECTOR */}
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="text-red-500 font-bold text-lg">!</span> Choose your size:
            </p>
            <div className="flex justify-center md:justify-start gap-3 text-white">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-4 py-1 rounded-lg hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-semibold">{product.price}₾</h3>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 text-lg rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <Bottom />
    </div>
  );
};

export default SingleProduct;