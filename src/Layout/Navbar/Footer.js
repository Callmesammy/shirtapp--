import React from 'react'

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
    <div className="grid sm:grid-cols-2 py-6 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-10 gap-5 md:gap-7 sm:gap-3 lg:gap-9 xl:gap-8 pb-3.5 sm:pb-0">
    {Links.map((link, index) => (
      <div key={index} className="sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 justify-between mb-5">
      < h3 className="font-bold text-white">{link.title}</h3>
      </div>

    ))}


    </div>
    </div>
    </div>
  )
}

export default Footer