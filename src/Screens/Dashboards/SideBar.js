import React from 'react'
import { MdDashboardCustomize, MdMovieFilter } from 'react-icons/md'
import { BiCameraHome, BiSolidCategoryAlt } from 'react-icons/bi'
import { BsGridFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import Layout from '../../Layout/Layout'
import { NavLink } from 'react-router-dom'




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
    const active = "bg-dyd text-sub"
    const hover =  "hover:bg-maint hover:text-sub"
    const inActive = "rounded font-medium text-sm transitions px-4 flex gap-3 items-center p-4"
    const Hover =({isActive}) =>
    isActive ? `${active} ${inActive}` : `${hover} ${inActive}`
    
  return (
  

    <Layout>
        < div className="container mx-auto min-h-screen px-2">
        <div className="xl:grid grid-cols-8  gap-10 items-start md:py-12 py-6">
        <div className="col-span-2 sticky bg-dyr border p-6  border-gray-800 rounded-md mb- xl:mb-0 ">
        {
            //sidebar links
         linkList.map((lin, items)=>(
        <NavLink to={lin.link} key={items} className={Hover}>
        <lin.icons /> <p>{lin.name}</p>
        </NavLink>
         ))
        }
        </div> 
        </div>

        </div>
    </Layout>  
  )
}

export default SideBar