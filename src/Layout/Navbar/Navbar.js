import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className="bg-maint shadow-sm z-10 top-0">
      <div className="container mx-auto gap-10 px-6 lg:grid grid-cols-7 justify-center items-center">
      <div className="col-span-1">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-20" />
        </Link>
        </div>
        </div>
    </div>
    </>
  );
}

export default Navbar