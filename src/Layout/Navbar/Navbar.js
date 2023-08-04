import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className="bg-maint shadow-md top-0 z-10 sticky">
    <div className="container  mx-auto gap-10 py-12 px-6 lg:grid grid-cols-7 justify-center items-center"> 
    <div className="col-span-1 lg:block hidden">
    <Link to="/">
    <img src="logo.png" alt="logo" className="w-full h-13 object-contain"/>
    </Link>
    </div>
    </div>
    </div>
    </>
  );
}

export default Navbar