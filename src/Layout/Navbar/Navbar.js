import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className="bg-maint sticky z-20 shadow-sm top-0">
      <div className="container mx-auto text-white gap-10 py-6 px-2 lg:grid grid-cols-7 flex justify-between items-center">
      <div className=" col-span-1 lg:block hidden">
        <Link to="/">
          <img src="/pics/logo.jpg" alt="logo" className="w-full object-contain"/>
        </Link>
    </div>
    <div className="col-span-3">
      <form className="w-full text-sm bg-dry rounded flex-btn gap-4">
        <button type="submit" className="bg-sub text-white px-4 py-2 rounded-l">Search</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Navbar