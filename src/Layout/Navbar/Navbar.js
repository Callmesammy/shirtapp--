import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";



function Navbar() {
  return (
    <>
    <div className="bg-maint z-20 top-0 sticky shadow-sm">
      <div className="container grid-cols-7 lg:grid mx-auto px-4 py-6 gap-4 items-center justify-center text-white">
      <div className=" col-span-1 lg:block hidden">
      <Link to="/">
      <img src="logo.png" alt="logo" className="w-full h-12 object-contain " />
      </Link>
   </div>
    <div className="col-span-3 bg-maint ">
    <div className="flex  bg-txt rounded text-sm gap-4 text-white flex-btn w-full h-12 items-center justify-center">
    <button type="submit" className="bg-sub w-12 h-12 text-white rounded-l flex-colo">
      <BiSearchAlt className="w-5 h-5"/>
    </button>
    <input type="text" placeholder="Search your movies hear and download for free" 
    className="placeholder:boder text-black bg-white w-11/12 h-12 bg-transparent rounded border-black">
      
    </input>
    </div>
    </div>
   </div>
    </div>
   </>
  );
};

export default Navbar; 