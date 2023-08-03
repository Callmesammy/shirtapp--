 import React from 'react';
  import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';


 function layout({children}) {
   return (
    <>
         <div className="bg-maint text-white">
            <Navbar/>
            {children}
            <Footer/>
         </div>
    </>
   )
 }
 
 export default layout