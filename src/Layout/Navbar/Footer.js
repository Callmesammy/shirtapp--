import React from 'react'

function Footer() {
  const Footers = [
    {
    title: "HomePage",
    links:[
      {
         name: "About-us",
         link: "/about-us"
      },
      {
        name: "Contact-us",
        link: "/contact-us"
     },
     {
      name: "Reach-us",
      link: "/reach-us"
   },
   {
    name: "Email-us",
    link: "/email-us"
   },
    ]

    },
    {
      title: "Company",
      links:[
        {
           name: "Movies",
           link: "#"
        },
        {
          name: "Login",
          link: "#"
       },
       {
        name: "Contact",
        link: "#"
     },
     {
      name: "About",
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
          name: "Fantancy",
          link: "/fantancy"
       },
       {
        name: "Comedy",
        link: "/comedy"
       },
        ]
    
        },
  
];
  return (
    <div className="bg-dyr border-t-2 border-black">
    <div className="container mx-auto px-2">
    <div className="grid-cols-3 grid sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 xl:grid-cols-14 gap-5 sm:gap-2 md:gap-6 lg:gap-8 xl:gap-10 py-6 justify-between">
    {Footers.map((footer, index) => (
      <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3 pb-3.5 sm:pb-0">
    <h3 className="text-white lg:leading-7 mb-4 lg:mb-6 sm:mb-5 text-normal col-span-3 font-bold">
      {footer.title}</h3>
      </div>
    ))}
    </div>
      </div>
      </div>
  );
}

export default Footer