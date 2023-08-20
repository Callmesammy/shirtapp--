import React from 'react'

function Footer() {
  const Links =[
    {
      title: "HomePage",
      links:[
        {
          name: "Home",
          link: "/"
        },
        {
          name: "AboutUs",
          link: "/about-us"
        },
        {
          name: "ContactUs",
          link: "/contact-us"
        },
        {
          name: "EmailUs",
          link: "/email-us"
        },
      ]

    },
    {
      title: "Categories",
      links:[
        {
          name: "Actions",
          link: "#"
        },
        {
          name: "Adventure",
          link: "#"
        },
        {
          name: "Fantasy",
          link: "#"
        },
        {
          name: "Romance",
          link: "#"
        },
      ]

    },
    {
      title: "Movies",
      links:[
        {
          name: "Iced",
          link: "/ice"
        },
        {
          name: "Filmy",
          link: "/filmy"
        },
        {
          name: "Dabra",
          link: "/dab"
        },
        {
          name: "Sin",
          link: "/sin"
        },
      ]

    },
    
]
  return (
    <div className="bg-dyr border-t-3 border-black">
    <div className="container mx-20 gap-2">
    <div className="gap-5 grid py-6 sm:gap-3 md:gap-4 lg:gap-7 xl:gap-9 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
        {Links.map((link, index) => (
        <div key={index} className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-3 justify-between pb-3.5 sm:pb-0">
          <h3 className="font-bold text-white">{link.title}</h3>
          <ul className="flex flex-col space-y-3">
            {linkz.links.map((link, index) => (
              <li key={index} className="justify-between mb-3 sm:mb-4 lg:mb-5 xl:mb-6 pb-0.5">
              <Links to={link.link} className="text-white hover:text-yellow-500">{link.name}</Links>
              </li>
            ))}
          </ul>
        </div>))}
      </div>
      </div>
      </div>
  )
}

export default Footer