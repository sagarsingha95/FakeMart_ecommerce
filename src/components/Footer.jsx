import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Fakemart</h2>
          <p className="text-gray-400 text-center">
            Your one-stop shop for electronics, fashion, and lifestyle products. Quality guaranteed!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-center ">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-center">
            <li><Link to='/' className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to='/products' className="hover:text-pink-500 transition">Products</Link></li>
            <li><Link to='/checkout' className="hover:text-pink-500 transition">Cart</Link></li>
            <li><Link to='/orders' className="hover:text-pink-500 transition">Orders</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-pink-500 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get 10% off on your first order!</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg text-black w-full sm:flex-1 bg-white"
            />
            <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-400 transition font-semibold">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-6 text-gray-400 justify-center">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-gray-500 text-center mt-12">
        &copy; {new Date().getFullYear()} Fakemart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
