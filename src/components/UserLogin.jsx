import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useGetUsersQuery } from "../features/apiSlice";
import { useNavigate } from "react-router";
import {  setCurrentUser, setCurrentUserId } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";


const Login = ({setLoged}) => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const {data:users=[],isLoading} = useGetUsersQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(isLoading) return;

    const user = users.find(
      (u)=>
        u.email === form.email &&
        u.password === form.password
    )

    if(!user){
      alert('Invalid username and password');
      return
    }
    setLoged(true);
    dispatch(setCurrentUserId(user?.id));
    dispatch(setCurrentUser(user));
    localStorage.setItem('user',JSON.stringify(user));
    navigate(`/login/${user.id}`)
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <div className="flex items-center gap-2 border rounded-xl p-3">
              <FiMail className="text-gray-500" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <div className="flex items-center gap-2 border rounded-xl p-3">
              <FiLock className="text-gray-500" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                required
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="w-full outline-none"
              />

              {/* SHOW/HIDE */}
              <span
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <IoEyeOff size={22} className="text-gray-500" />
                ) : (
                  <IoEye size={22} className="text-gray-500" />
                )}
              </span>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* EXTRA LINKS */}
          <div className="text-center mt-3 text-sm">
            <p>
              Forgot Password?{" "}
              <span className="text-blue-600 cursor-pointer">Reset</span>
            </p>
            <p className="mt-1">
              Don’t have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={()=>setLoged(false)}>Sign Up</span>
            <Link to='/' className="text-center text-blue-600 hover:text-blue-800 hover:underline ml-4">Back to home</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
