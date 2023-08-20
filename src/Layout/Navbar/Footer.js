import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const Links =[
      {
        title: "About",
        links:[
            {
              name: "HomePage",
              link: "/"
            },
            {
              name: "AboutUs",
              link: "/aboutus"
            },
            {
              name: "ContactUs",
              link: "/contactus"
            },
            {
              name: "EmailUs",
              link: "/emailus"
            },
        ]
      },
      {
        title: "HomePage",
        links:[
            {
              name: "Login",
              link: "#"
            },
            {
              name: "ChangePassword",
              link: "#"
            },
            {
              name: "Register",
              link: "#"
            },
            {
              name: "UserDetails",
              link: "#"
            },
           
        ]
      },
      {
        title: "Categories",
        links:[
            {
              name: "Action",
              link: "/action"
            },
            {
              name: "Adventure",
              link: "/adventure"
            },
            {
              name: "Fantasy",
              link: "/fantasy"
            },
            {
              name: "Comedy",
              link: "/comedy"
            },
        ]
      },
  ];
  return (
    <div  className="bg-dyr border-t-3 border-black">
    <div className="container mx-auto px-2">
    <div className="grid sm:grid-cols-2 py-6 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-10 gap-5 mb-5 md:gap-5 sm:gap-4 lg:gap-6 xl:gap-10 pb-3.5 sm:pb-0">
    {Links.map((link, index) => (
          <div key={index} className="col-span-1 md:col-span-2 xl:col-3 mb-5 sm:mb-3 pb-0.5">
      < h3 className="font-bold mb-4 text-white">{link.title}</h3>
      <ul className="flex text-sm space-y-3 flex-col">
        {link.links.map((text, index) => (
          <li key={index} className="flex items-baseline">
          <Link to={text.link}
           className="inline-block hover:text-sub w-full text-brd"> 
          {text.name}
          </Link>
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