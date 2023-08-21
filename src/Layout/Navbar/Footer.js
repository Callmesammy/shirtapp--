import React from 'react'

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
    <div className="bg-dyr border-t-3 border-black">
    <div className="container mx-auto px-4">  
    <div className="grid sm:grid-cols-3 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-6 md:gap-7 xl:gap-14 py-5 justify-between pb-3.5 sm:pb-0">
    {Links.map((link, index) => (
      <div key={index} className="col-span-1 sm:col-span-3 md:col-span-5 xl:col-span-8">
      <h1 className="text-white font-medium text-sm mb-3">{link.title}</h1>
    </div>
    
     
    </div>
    </div>
  )
}

export default Footer