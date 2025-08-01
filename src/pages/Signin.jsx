
import Navbar from '../components/Navbar'
import axios from 'axios';
import batman from '../assets/batman.png'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/signup", {
        
        email,
        password
      }.then(result => {console.log(result)
        navigate("/login");
      })
      .catcj(err=> console.log(err)));
    }

    return (
<div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex w-full flex-col md:flex-row items-center justify-center gap-10 p-10">
        
        <div className=''>
          <img src={batman} alt="Batman" className="w-150 h-auto" />     
        </div>

        <div className=" p-8 rounded-lg shadow-lg space-y-6">
 <div className="flex flex-col items-center space-y-4">
  <h1 className="text-3xl text-black font-bold audiowide text-center">
    Hi, Welcome to Stussy
  </h1>
      <form onSubmit={handleSubmit} className="w-[60%] flex flex-col space-y-4"/>

  <input
    type="email"
    placeholder="Email"
    className="p-3 rounded w-[60%] h-[40px] bg-gray-400 border border-gray-600 outline-none"
    onChange={(e) => setEmail(e.target.value)}
  />

  <div className="w-[60%] flex flex-col">
    <input
      type="password"
      placeholder="Password"
      className="p-3 rounded h-[40px] bg-gray-400 border border-gray-600 outline-none"
      onChange={(e) => setPassword(e.target.value)}
    />
   
  </div>
</div>
          <button className="bg-black text-white w-[60%] h-[40px] py-3 rounded hover:bg-gray-800 transition">
            Sign Up
          </button>

          <hr className="border-t border-black" />

          <div className="text-center space-y-2">
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-500" />
            <span className="text-sm text-bold text-gray-700 whitespace-nowrap">Already Have an Account?</span>
            <hr className="flex-grow border-t border-gray-500" />
          </div>


          </div>

 <div className="flex justify-center items-center gap-3">
        

         <button className="bg-white text-black border border-gray-300 pr-3 rounded hover:bg-gray-100 transition">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-6 h-6"
    />
  </button>

  <button className="bg-white text-black border border-gray-300 p-3 rounded hover:bg-gray-100 transition">
    <img
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      alt="Facebook"
      className="w-6 h-6"
    />
  </button>

  <button className="bg-white text-black border border-gray-300 p-3 rounded hover:bg-gray-100 transition">
    <img
      src="https://www.svgrepo.com/show/475689/twitter-color.svg"
      alt="Twitter"
      className="w-6 h-6"
    />
  </button>

        </div>
        </div> </div>
    </div>
  );
};

export default Signin;