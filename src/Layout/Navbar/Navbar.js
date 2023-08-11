import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'





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
        <form className="w-full bg-txt rounded flex-btn h-12 ">
          <button type="submit" className="text-white bg-sub w-12 h-12 flex-colo rounded-l">
            <BiSearch className="w-5 h-5"/>
          </button>
          </form>
          
      </div>

      
      </div>
    </div>
   </>
  );
}



export default Navbar; 