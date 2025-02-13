import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Logo from '../../assets/JobsLogo.png'
import { motion } from "framer-motion";

const NavBar = () => {


    const { user, signOutUser } = useContext(AuthContext);


    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('Successfully Sign Out')
        })
        .catch(error => {
            console.log('failed to sign out')
        })
    }

    const links = <>

        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/">Home</NavLink></li>

       

    </>



    return (
        <div className="navbar bg-gradient-to-r from-gray-100 to-gray-200 shadow-md px-4 py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-gray-200 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-50 rounded-xl z-[1] mt-3 w-52 p-4 shadow-lg border border-gray-200">
                        {links}
                    </ul>
                </div>
                <motion.a 
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <img className='w-12' src={Logo} alt="Jobs Portal Logo" />
                    <h3 className='text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent'>Jobs Portal</h3>
                </motion.a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                {/* Conditional rendering based on user authentication status */}
                {
                    user ? <>
                        {/* If user is logged in, show Sign Out button */}
                        <motion.button 
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-all"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                        onClick={handleSignOut} >Sign Out</motion.button>
                    </> : <>
                        {/* If user is not logged in, show Register and Sign In buttons */}
                        <motion.button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-all"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                    >
                       {/* Link to registration page */}
                       <Link to="/register">Register</Link>
                    </motion.button>
                       
                        {/* Animated Sign In button */}
                        <motion.button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-all"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.10 }}
                        transition={{ type: "spring", stiffness: 500, damping: 10000000, mass: 0.5 }}
                    >
                       {/* Link to sign in page */}
                       <Link to="/signIn">Sign In</Link>
                    </motion.button>

                        
                    </>
                }


            </div>
        </div>
    );
};

export default NavBar;