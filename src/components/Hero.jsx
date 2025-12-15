// components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const Navigate = useNavigate();
  return (
    <section className="relative bg-linear-to-r from-gray-800 to-gray-500 text-white h-screen flex items-center justify-center">
      <div className="text-center px-4">
    
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Shop the Future
        </h1>
      

        <p className="text-xl md:text-2xl mb-8">
          Amazing products, fast delivery, unbeatable prices.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer" onClick={()=>Navigate('/products')} >
            Shop Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
