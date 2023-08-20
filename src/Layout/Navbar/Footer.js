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
    <div className=" container mx-auto px-2">
    <div className="grid-cols-1 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-9 xl:grid-cols-12 gap-5 sm:gap-7 md:gap-9 lg:gap-10 xl:gap-12 py-6 justify-between">
      {Footer.map((text, index) =>(
        <div key={index} className="col-span-1 md-col-span-2 lg:col-span-3 xl:col-span-4 pb-3.5 sm:pb-0">
        <h3 className="lg:leading-7 text-bold font-bold text-white mb-4 sm:mb-2">{text.title}</h3>  
        <ul className="flex flex-col space-y-3">
          {text.links.map((link, index) =>(
            <li key={index} className="flex items-baseline">
        <links to={link.url} className="text-white text-sm font-medium hover:text-gray-300">{link.name}</links>
        </li>
        ))}
        </ul>
      </div>
      
      ))}
      </div>
      </div>
      </div>
  )
}

export default Footer