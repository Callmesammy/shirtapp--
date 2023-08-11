import React from 'react'



function Navbar() {
  return (
    <>
    <div className="z-20 top-0 sticky shadow-md bg-maint">
      <div className="container mx-auto bg-sub px-6 py-4 gap-10 lg:grid grid- cols-7 justify-center items-center">
        <Link to="/">
          <img src="/pics/logo.png" alt="logo" className="h-10 w-10" />
        </Link>
      </div>
    </div>
   </>
  );
}

export default Navbar; 