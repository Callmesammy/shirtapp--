 import React from 'react'
  import Navbar from '../Navbar/navbar'

 function layout({children}) {
   return (
    <>
         <div className="bg-maint text-white">
            <Navbar/>
            {children}
            <footer/>
         </div>
    </>
   )
 }
 
 export default layout