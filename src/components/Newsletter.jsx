// components/Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 px-4 bg-gray-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-6">Get 10% off on your first order</p>
      <form className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg text-black w-full md:w-1/3 bg-white"
        />
        <button className="bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-400 transition">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
