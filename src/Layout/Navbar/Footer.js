import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const Links =[
    { 
      title: "Movie Stats",
      links:[
        {
          name: "HomePage",
          link: "/",
        },
        {
          name: "Title Page",
          link: "/titlepage",
        },
        {
          name: "ContactPage",
          link: "/contactpage",
        },
        {
          name: "AboutPage",
          link: "/aboutpage",
        },
      ]
    },
    { 
      title: "HomePage",
      links:[
        {
          name: "Movies",
          link: "/movies",
        },
        {
          name: "Login",
          link: "/login",
        },
        {
          name: "contactpage",
          link: "/contact",
        },
        {
          name: "AboutPage",
          link: "/about",
        },
        
      ]
    },
    { 
      title: "Movie Categories",
      links:[
        {
          name: "Action",
          link: "/acftion",
        },
        {
          name: "Fantasy",
          link: "/fantasy",
        },
        {
          name: "Comedy",
          link: "/comedy",
        },
        {
          name: "Horror",
          link: "/horror",
        },
      ]
    },
  ];
  return (
    <div className="bg-dyr border-t-2 py-4 border-black">
    <div className="container mx-auto px-2">  
    <div className="grid sm:grid-cols-7 md:grid-cols-9 xl:grid-cols-12 gap-5 sm:gap-6 md:gap-7 xl:gap-14 py-4 justify-between pb-3.5 sm:pb-0">
    {Links.map((link, index) => (
      <div key={index} className="col-span-1 sm:col-span-2 xl:col-span-3 mb-3 sm:mb-0 pb-0.5">
      <h3 className=" text-white lg:leading-7 sm:mb-4 font-bold mb-2 ">
      {link.title}
      </h3>
      <ul className="text-sm flex flex-col space-y-3">
      {link.links.map((text, index) => (
        <li key={index} className="flex items-baseline">
        <Link to={text.link} className="text-brd w-full inline-block hover:text-sub">
        {text.name}
         </Link>
        </li>
      ))}
      </ul>
      </div>
    ))}
    <div className="pb-3.5  col-span-1 md:col-span-2 lg:col-span-3 sm:pb-0">
      <Link to="/">
      <img src="logo.png" alt="logo" className="w-2/4 h-12 object-contain" />
      </Link>
      <p className="text-sm text-brd ">Lorem ipasum dummy text <br/> Donny</p>
    </div>
    </div>
    
     </div>
    </div>
  
  )
}

export default Footer