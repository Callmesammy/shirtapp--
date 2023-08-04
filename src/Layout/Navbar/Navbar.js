import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className="bg-maint shadow-md top-0 z-10 sticky">
    <div className="container bg-sub mx-auto gap-10 py-12 px-6 lg:grid grid-cols-7 justify-center items-center"> 
    <div className="col-span-1 lg:block hidden">
    <Link to="/">
    <img src="/images/logo.png" alt="logo" className="w-20"/>
    </Link>
    </div>
    </div>
    </div>
    </>
  );
}

export default Navbar