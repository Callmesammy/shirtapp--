import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className="bg-maint sticky z-20 shadow-sm top-0">
      <div className="container mx-auto text-white gap-10 px-2 lg:grid grid-cols-7 flex justify-between items-center">
      <div className=" col-spaN-1 lg:block hidden">
        <Link to="/">
          <img src="/pics/logo.jpg" alt="logo" className="w-full object-contain"/>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar