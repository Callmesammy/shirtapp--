import React from 'react'
import { MdDashboardCustomize, MdMovieFilter } from 'react-icons/md'
import { BiCameraHome, BiSolidCategoryAlt } from 'react-icons/bi'
import { BsGridFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import Layout from '../../Layout/Layout'




function SideBar() {

    const linkList = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icons:MdDashboardCustomize,
        },
        {
            name: "Movies",
            link: "/movies",
            icons:MdMovieFilter,
        },
        {
            name: "HomePage",
            link: "/dashboard",
            icons:BiCameraHome,
        },
        {
            name: "Viewers",
            link: "/viwers",
            icons:BsGridFill,
        },
        {
            name: "Users",
            link: "/users",
            icons:AiOutlineUser,
        },
        {
            name: "Categories",
            link: "/categories",
            icons:BiSolidCategoryAlt,
        },
    ];
  return (
    <Layout>
        < div className="container mx-auto bg-dyr min-h-screen px-2">
        <div className="xl:grid grid-cols-8  gap-10 items-start md:py-12 py-6">
        <div className="col-span-2 sticky bg-dyr border border-gray-600 rounded-md mb-5 xl:mb-0 ">
        
        </div>
        </div>

        </div>
    </Layout>  
  )
}

export default SideBar