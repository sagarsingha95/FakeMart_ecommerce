// components/Testimonials.jsx
import React from "react";

const testimonials = [
  { name: "Alice", text: "Great products and fast delivery!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95z5R3-rM-Bbr76dvZAx_l9fp18ohIFUdhg&s" },
  { name: "Bob", text: "Excellent customer service.", img: "https://blogs-cdn.imagine.art/3_D_1_7a47e0aa52.webp" },
  { name: "Charlie", text: "Love the discounts and offers!", img: "https://videocdn.pollo.ai/web-cdn/pollo/text2image/style/3d-render.png" },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 text-center bg-gray-700">
      <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {testimonials.map((test, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <img src={test.img} alt={test.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="italic mb-2">"{test.text}"</p>
            <h4 className="font-semibold">{test.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
