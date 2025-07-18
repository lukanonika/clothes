import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo8.png';  
import acc from '../assets/account.png'; 
import burger from '../assets/burger-bar.png';   




const Navbar = ({ addToCart }) => {
   const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  
  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <>
    <div className="shadow-md relative ">
      <nav className="flex justify-between items-center p-2 bg-white shadow-md">
        <div className="text-2xl font-bold audiowide text-gray-800 flex">
          <h2 className=' hidden sm:block'>Clothes Store</h2>
           <img src={logo} alt="logo" className="w-14 h-11 rounded-full" />
        </div>

        

        <ul className="flex space-x-6 items-center justify-center hidden md:flex">
         
          <Link to="/Home">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-mono">Home</li>
          </Link>
          <a href='#Product'>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-mono">Shop</li>
          </a>
          <a href='#Bottom'>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-mono">Contact</li>
          </a>

          <li className="relative"
             onMouseEnter={() => setShowDropdown(true)}
             onMouseLeave={() => setShowDropdown(false)}>
            <img src={acc} alt="profile" className="w-8 h-7 rounded-full cursor-pointer" />
             <div
            className={`absolute top-10 right-0 bg-white border border-gray-300 shadow-lg rounded-md p-3 z-50 flex flex-col space-y-2 w-32 transition-all duration-200
            ${showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            <Link to="/login" className="text-sm text-gray-900 hover:text-black transition">
              Log In
            </Link>
            <Link to="/signup" className="text-sm text-gray-900 hover:text-black transition">
              Sign Up
            </Link>
          </div>
         
          </li>
        </ul>
        
        <button className='md:hidden  transition-all duration-300  block  !bg-white  border-none' onClick={() => setIsOpen(!isOpen)}>
        <img src={burger} alt="burger" className="w-8 h-7 rounded-full cursor-pointer bg-white" onClick={() => setShowDropdown(!showDropdown)} />
        </button>

        {isOpen && (
          <ul className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-4 space-y-2 w-48 md:hidden">
            <Link to="/Home">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-mono">Home</li>
            </Link>
            <a href='#Product'>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-mono">Shop</li>
            </a>
            <a href='#Bottom'>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer font-mono">Contact</li>
            </a>
          </ul>
        )}
      </nav>
    </div>
     </>
  );
};

export default Navbar;