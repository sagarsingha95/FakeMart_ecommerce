import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet,NavLink, useNavigate } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';

const AppLayout = () => {
    const [showNav,setShowNav] = useState(false);
    const navigate = useNavigate();
    const {currentuser,isLoggedIn} = useSelector((state)=>state.users)
    function handleNav(){
        setShowNav(prev =>!prev)
    }


  return (
    <>
        <nav className='hidden sm:flex sm:flex-col md:flex-row justify-center md:justify-between items-center text-center p-3 bg-gray-900 text-white'>
            <h1 className='text-3xl'>Fakemart</h1>
            <ul className='flex flex-col md:flex-row gap-5'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/checkout'>Cart</NavLink></li>
                <li><NavLink to='/orders'>Orders</NavLink></li>
            </ul>
           { isLoggedIn ? <span className='bg-gray-800 p-2' onClick={()=>navigate('/login/:id')}>{currentuser?.name.firstname}</span> :<button className='bg-gray-800 p-2 cursor-pointer' onClick={()=>navigate('/login')}>Login</button>}
        </nav>
        <div className='bg-gray-900 sm:hidden'>
        <RxHamburgerMenu color='white' size={30} onClick={handleNav} />
        {showNav && <Navbar />}
        </div>
        <Outlet />
        <Footer/>
    </>
  )
}

export default AppLayout