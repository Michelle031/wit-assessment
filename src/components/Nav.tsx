import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, ChartBarIcon, UsersIcon, Cog6ToothIcon} from "@heroicons/react/24/outline"
import { HomeIcon as Home, 
        ChartBarIcon as Bar,
        UsersIcon as Users, 
        Cog6ToothIcon as Settings
    } from "@heroicons/react/24/solid"

function Nav() {
    const route = useLocation()
  return (
    <div className='text-[#ccc] flex w-screen fixed bottom-0 bg-white shadow-lg rounded-t-[2.5rem] z-2 h-16 pb-5 pt-4 justify-around'>
       <div>
            <Link to="/">
                <HomeIcon className={`h-6 w-6 ${(route.pathname) === "/" ? "hidden" : "inline"}`}/>
                <Home className={`h-6 w-6 ${(route.pathname) === "/" ? "inline text-[#6672B6]" : "hidden"}`}/>
            </Link>
       </div>
       <div>
            <Link to="/learn">
                <ChartBarIcon className={`h-6 w-6 ${(route.pathname) === "/learn" ? "hidden" : "inline"}`}/>
                <Bar className={`h-6 w-6 ${(route.pathname) === "/learn" ? "inline text-[#6672B6]" : "hidden"}`}/>
            </Link>
       </div>
       <div>
            <Link to="/profile">
                <UsersIcon className={`h-6 w-6 ${(route.pathname) === "/profile" ? "hidden" : "inline"}`}/>
                <Users className={`h-6 w-6 ${(route.pathname) === "/profile" ? "inline text-[#6672B6]" : "hidden"}`}/>
            </Link>
       </div>
       <div>
            <Link to="/settings">
                <Cog6ToothIcon className={`h-6 w-6 ${(route.pathname) === "/settings" ? "hidden" : "inline"}`}/>
                <Settings className={`h-6 w-6 ${(route.pathname) === "/settings" ? "inline text-[#6672B6]" : "hidden"}`}/>
            </Link>
       </div>
    </div>
  )
}

export default Nav