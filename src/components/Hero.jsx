import React from 'react';
import Cover from '../assets/kenrik.png';
import ProductCard from './ProductCard.jsx';
import BallPart from './BallPart.jsx';
import Jeansbox from './JeansBox.jsx';
import BottomPart from './Bottom.jsx';
import login from '../pages/login.jsx';

const Hero = () => {
  return (  
   < > 
    <div className='mt-10'>
        <img className='w-full m-0' src={Cover} alt="cover" />
        <p className='text-black modak text-[520%] mt-[-7%] text-sm '>STUSSY</p>

    <hr className='border-t border-black my-4'></hr>
 </div>

    <div id='Product'>
        <p className='ml-[2%]  flex text-black audiowide text-4xl text-left justify-start mb-10'>Fresh Shirts, No Misses:</p>
      
        <ProductCard />
   </div>
   


   <div className="mt-70 w-full"> 
        <BallPart />
   </div>

      <div>
    <Jeansbox />
   </div>


   


   <div  id='Bottom'  className="mt-70 w-full">
     <BottomPart />
     
   </div>

   
</>  
        
  )
}

export default Hero
