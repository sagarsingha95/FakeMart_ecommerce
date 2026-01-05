import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="text-white flex flex-col justify-between h-[500px] p-4 ">
      <div className="flex flex-col gap-[70px] pl-4">
        <h1 className="text-3xl">Fakmart</h1>
        <ul className="flex flex-col md:flex-row gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </ul>
      </div>
      <button className="bg-gray-600 p-2"><Link to='/'>Login</Link></button>
    </div>
  );
};

export default Navbar;
