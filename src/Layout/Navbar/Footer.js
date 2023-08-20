import React from 'react'

function Footer() {
  const Links =[
    {
      title: "HomePage",
      link:[
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
      link:[
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
      link:[
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
    <div className="gap-5  justify-between grid py-6 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-12 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-12">
        {Links.map((link, index) => (
        <div key={index} className="col-span-1 grid sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 justify-between pb-3.5 sm:pb-0">
          <h3 className="font-bold text-white">{link.title}</h3>
        </div>))}
      </div>
      </div>
      </div>
  )
}

export default Footer