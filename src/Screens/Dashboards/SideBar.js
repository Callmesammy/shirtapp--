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
        
    </Layout>  
  )
}

export default SideBar