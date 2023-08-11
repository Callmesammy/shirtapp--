import React from 'react'
import { Link } from 'react-router-dom'




function Navbar() {
  return (
    <>
    <div className="z-20 top-0 sticky shadow-md bg-maint">
      <div className="container mx-auto px-6 py-4 gap-10 lg:grid grid-cols-7 justify-center items-center">
        <Link to="/">
          <img src="logo.png" alt="logo" className="w-full h-12 object-contain" />
        </Link>
      </div>
      <div className="col-span-3">
        <form className="w-12 bg-txt rounded flex-colo h-12 ">
          </form>
      </div>
    </div>
   </>
  );
}

export default Navbar; 