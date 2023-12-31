import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Navbar/Footer'


function Layout({children}) {
  return (
  <>
  <Navbar/>
  <div className="bg-maint text-white gap-2">
    {children}
    <Footer/>
  </div>
  </>
  );
}

export default Layout;