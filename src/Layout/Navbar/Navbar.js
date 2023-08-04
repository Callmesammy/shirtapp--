import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className="bg-maint sticky shadow-md top-o z-20">
    <div className="container mx-auto gap-10 py-12 px-6 lg:grid grid-cols-7 justify-center items-center">
    <div className="col-span-1 lg:block hidden">
        <Link to="/">
        <img 
        src="/pics/logo.jpg" alt="logo" 
        className="w-full h-12 object-contain"/>
        </Link>
    </div>
    </div>
    </div>
    </>
  );
}

export default Navbar