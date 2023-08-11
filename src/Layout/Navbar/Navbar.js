import React from 'react'
import { Link } from 'react-router-dom'





function Navbar() {
  return (
    <>
    <div className="z-20 top-0 sticky shadow-md bg-maint">
      <div className="container mx-auto px-6 gap-4 py-4 lg:grid grid-cols-7 justify-center items-center">
        <div className="col-span-1 lg:block hidden">
        </div>
        <Link to="/">
          <img src="logo.png" alt="logo" className="w-full h-12 object-contain" />
        
        </Link>
        <div className="col-span-3">
        <form className="w-full bg-txt rounded flex-colo h-12 ">
          <button type="submit" className="flex-btn bg-sub w-"></button>
          </form>
          
      </div>

      
      </div>
    </div>
   </>
  );
}

export default Navbar; 