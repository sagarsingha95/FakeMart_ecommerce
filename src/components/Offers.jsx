// components/Offers.jsx
import React from "react";


const Offers = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Limited Time Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-8 rounded-xl text-white shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-2">30% Off Electronics</h3>
          <p>Grab the best gadgets before they run out!</p>
        </div>
        <div className="bg-gray-700 p-8 rounded-xl text-white shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-2">Buy 1 Get 1 Shoes</h3>
          <p>Limited stock available!</p>
        </div>
        <div className="bg-gray-700 p-8 rounded-xl text-white shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-2">Free Shipping Today</h3>
          <p>All orders over $50 qualify for free shipping.</p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
