import React from 'react'

function Footer() {
  const Footer=[
    {
      title: "HomePage", 
      links:[
        {
          name: "Home",
          url: "/"
        },
        {
          name: "AboutUs",
          url: "/about-us"
        },
        {
          name: "ContactUs",
          url: "/contact-us"
        },
        {
          name: "Email",
          url: "/email"
        },
      ]
    },
     {
      title: "About", 
      links:[
        {
          name: "Company",
          url: "#"
        },
        {
          name: "Careers",
          url: "/careers"
        },
        {
          name: "Media Kit",
          url: "#"
        },
        {
          name: "Support",
          url: "/supoort"
        },
      ]
    },
     {
      title: "Categories", 
      links:[
        {
          name: "Action",
          url: "/action"
        },
        {
          name: "Adventure",
          url: "/adventure"
        },
        {
          name: "Fantasy",
          url: "/fantasy"
        },
        {
          name: "Romance",
          url: "/romance"
        },
      ]
    },
  ]
  return (
    <div className="bg-dyr border-t-2 border-black">
    <div className=" container mx-auto px-4">
    <div className="grid-cols-1 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-7 gap-5 sm:gap-7 md:gap-9 lg:gap-10 xl:gap-12 py-6 justify-between">
    {Footer.map((item, index) => (
    <div key={index} className="col-span-1 sm:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
      <h3 className="lg:leading-7 text-white text-bold mb-4 font-normal">{item.title}</h3>
   </div> 
   ))}
      </div>
      </div>
      </div>
  )
}

export default Footer