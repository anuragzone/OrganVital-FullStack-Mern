import React from 'react'
import { Link } from "react-router-dom";
const NavLinks = ({isMobile}) => {
    
  return (
    
         <div className={`flex ${isMobile ? ' flex-col space-y-4 items-center' : 'space-x-6'}`}>
                <Link to = "/" className="dark:text-white text-gray-700 hover:text-red-500">Home</Link>
                <Link to = "/about" className="dark:text-white  text-gray-700 hover:text-red-500">About Us</Link>
                <Link to = "/contact" className="dark:text-white  text-gray-700 hover:text-red-500">Contact Us</Link>
                <Link to = "/faqs" className=" dark:text-white text-gray-700 hover:text-red-500">FAQ's</Link>
            </div>
    
  )
}

export default NavLinks
