import React from 'react'

function Footer() {
  const Linka =[
    {
      title: 'Movies',
      links:[
        {
          name: 'User',
          link: '/user',
        },
        {
          name: 'Contact',
          link: '/contact',
        },
        {
          name: 'About',
          link: '/',
        },
        {
          name: 'Like',
          link: '/like',
        },
      ]
    },
    {
      title: 'Top Categories',
      links:[
        {
          name: 'Action',
          link: '#',
        },
        {
          name: 'Adventure',
          link: '#',
        },
        {
          name: 'Comedy',
          link: '#',
        },
        {
          name: 'Drama',
          link: '#',
        },
      ]
    },
    {
      title: 'Contacts',
      links:[
        {
          name: 'AboutUs',
          link: '/about',
        },
        {
          name: 'ContactUs',
          link: '/contact-us',
        },
        {
          name: 'Privacy',
          link: '/privacy',
        },
        {
          name: 'Terms',
          link: '/terms',
        },
      ]
    },
  ]


  return (
    <div className="bg-dyr border-t-2 border-black">
    <div className="container px-2 mx-auto ">
    <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 py-7 justify-between gap-5 sm:gap-7 md:gap-9 xl:gap-12">
    {Linka.map((links, index) => (
      <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
      <h3 className="text-white font-bold font-medium text-md lg:leading-7 mb-4 lg:mb-6 pb-3.5">{links.title}</h3>

      </div>
    ))}
      </div>
      </div>
      </div>
  )
}

export default Footer