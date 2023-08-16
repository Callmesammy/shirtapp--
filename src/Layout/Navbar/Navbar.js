import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";


function Navbar() {
  const hover = "hover:text-sub transitions text-white ";
  const Sober = ({isActive}) => (isActive ? 'text-white' : hover);
  return (
    <>
    {/*Navbar*/}
    <div className="bg-maint z-20 top-0 sticky shadow-sm">
      <div className="container grid-cols-7 lg:grid mx-auto px-4 py-6 gap-4 items-center justify-center text-white">
         {/*Logo*/}
      <div className=" col-span-1 lg:block hidden">
      <Link to="/">
      <img src="logo.png" alt="logo" className="w-full h-12 object-contain " />
      </Link>
   </div>
       {/*Search bar*/}
    <div className="col-span-3 bg-maint ">
    <div className="flex  bg-white rounded text-sm gap-4 text-white flex-btn w-full h-12 items-center justify-center">
    <button type="submit" className="bg-sub w-12 h-12 text-white rounded-l flex-colo">
      <BiSearchAlt className="w-5 h-5"/>
    </button>
    <input type="text" placeholder="Search your movies hear and download for free" 
    className="placeholder:text-border font-medium border-none text-sm px-4 text-black bg-white w-11/12 h-12 bg-transparent rounded ">

    </input>
    </div>
    </div>
    {/*Menu*/}
    <div className="col-span-3 font-normal text-sm justify-between xl:gap-14 2xl:gap-20 lg:flex hidden xl:justify-end items-center">
      <NavLink to="/movies" className={Sober}>Movies</NavLink>
      <NavLink to="/tvshows" className={Sober}>TV </NavLink>
      <NavLink to="/upcoming" className={Sober}><FaUserAlt className="w-6 h-6"
      /></NavLink>
      <NavLink to="/contact" className={Sober}>Contact</NavLink>
      <NavLink to="/about" className={Sober}>About</NavLink>
      <NavLink to="/login" className={`${Sober}relative`}><AiFillHeart className="w-6 h-6"
      />
     <div className="w-5 h-5 flex-colo rounded-full bg-sub text-white text-xs absolute -top-5 -right-1">
      3
     </div>
      </NavLink>
    </div>
    </div>
    
    </div>
   </>
  );
};

export default Navbar; 