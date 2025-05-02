import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";

function Navbar() {
  return (
    <div className="relative flex items-center justify-between bg-primary text-vanilla px-6 py-3 shadow-md h-14">
      {/* Brand Name */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-wider bg-highlight px-2 py-1 rounded-md text-primary">
          code_cube
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-highlight transition duration-150">Home</Link>
        <Link to="/about" className="hover:text-highlight transition duration-150">About</Link>
        <Link to="/services" className="hover:text-highlight transition duration-150">Services</Link>
        <Link to="/contact" className="hover:text-highlight transition duration-150">Contact</Link>
        
      </div>

      {/* Download Icon */}
      <div className="flex items-center gap-2">
        <FaArrowDown
          className="text-lg cursor-pointer hover:text-highlight transition duration-200"
          title="Download"
        />
      </div>
    </div>
  );
}

export default Navbar;
