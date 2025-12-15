import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FaUser, FaHome, FaBoxOpen, FaHeadset } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout, setCurrentUser } from '../features/userSlice';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentuser,currentuserId} = useSelector((state)=>state.users)
  useEffect(() => {
    if(!currentuserId) return
    fetch(`https://fakestoreapi.com/users/${currentuserId}`)
      .then(res => res.json())
      .then(setUser);
  }, [currentuserId]);

  function handleLogout(){
    const conf = confirm('Are you sure you want to logout ?');

    if(conf){
      navigate('/');
      localStorage.removeItem("user");
      dispatch(logout());
    }else return
  }

  useEffect(()=>{
    if(user){
    dispatch(setCurrentUser(user));
    console.log(user);
    console.log(currentuser);
    
  }
  },[dispatch,user,currentuser])

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col p-6">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to={`/orders`}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <FaBoxOpen />
            My Orders
          </Link>

          <Link
            to={`/complaints`}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            <FaHeadset />
            Your Complaints
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6">

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
            <div className="w-36 h-36 flex items-center justify-center bg-gray-200 rounded-full">
              <FaUser size={80} className="text-gray-500" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                {user?.name?.firstname} {user?.name?.lastname}
              </h2>
              <p className="text-gray-500">{user?.email}</p>
              <p className="text-sm text-gray-400 capitalize">
                {user?.username}
              </p>
            </div>
          </div>

          {/* User Details Form */}
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                defaultValue={user?.name?.firstname}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                defaultValue={user?.name?.lastname}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                defaultValue={user?.username}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div >
              <label className="block text-sm font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                defaultValue={user?.address?.city}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone no
              </label>
              <input
                type="text"
                defaultValue={user?.phone}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Street
              </label>
              <input
                type="text"
                defaultValue={user?.address?.street}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                defaultValue={user?.address?.zipcode}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4 gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Update Profile
              </button>
              <button className='bg-red-700 text-white px-6 py-2 rounded-lg' onClick={handleLogout}>Logout</button>
            </div>

          </form>

        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
