'use client'

import AllPlatformOrders from "@/components/common/Admin/AllPlatformOrders"
import PlatformAnalytics from "@/components/common/Admin/PlatformAnalytics"
import PlatformOverview from "@/components/common/Admin/PlatformOverview"
import Profile from "@/components/common/Admin/Profile"
import RestaurantApplications from "@/components/common/Admin/RestaurantApplications"
import UserManagement from "@/components/common/Admin/UserManagement"
import { ChartColumn, ChartPieIcon, LogOut, Menu, Shield, ShoppingBag, Store, User, Users } from "lucide-react"
import { useState } from "react"

const page = () => {
  const [activePage, setActivePage] = useState("Profile")
  const adminSidebar = [
    {
      id: 1,
      name: "Profile",
      icon: <User />,
    },
    {
      id: 2,
      name: "Platform Overview",
      icon: <ChartColumn />,
    },
    {
      id: 3,
      name: "All Platform Orders",
      icon: <ShoppingBag />,
    },
    {
      id: 4,
      name: "Restaurant Applications",
      icon: <Store />,
    },
    {
      id: 5,
      name: "User Management",
      icon: <Users />,
    },
    {
      id: 6,
      name: "Platform Analytics",
      icon: <ChartPieIcon />,
    },
  ]


  const renderPage = () => {
    switch (activePage) {
      case "Profile":
        return <Profile />
      case "Platform Overview":
        return <PlatformOverview />
      case "All Platform Orders":
        return <AllPlatformOrders />
      case "Restaurant Applications":
        return <RestaurantApplications />
      case "User Management":
        return <UserManagement />
      default:
        return <PlatformAnalytics />
    }
  }

  return (
    <div className="w-full h-screen flex relative ">


      {/* sidebar */}
      <div className="h-screen sticky top-0 left-0 border-r border-gray-300 flex flex-col overflow-y-auto">

        <div className="flex lg:w-65 text-white bg-blue-600 items-center justify-center border-b border-gray-300  gap-2 py-2 min-h-17.5">
          <div><Shield size={40} /></div>
          <div className="hidden lg:block">
            <div className="text-xl font-semibold">Admin Panel</div>
            <div>Platform Management</div>
          </div>
        </div>

        <div className="flex-1">
          {/* <div className="text-sm text-gray-600 mt-8 mb-4 w-full text-center hidden">
            PLATFROM CONTROL
          </div> */}
          <div className="mt-8">
            {
              adminSidebar.map(item => (
                <button key={item.id} className={`flex items-center justify-center lg:justify-start gap-2 text-lg w-full px-2 py-4 cursor-pointer ${activePage === item.name ? "text-blue-500 bg-blue-100 border-r border-blue-500" : "text-gray-600 hover:text-black"} transition-all duration-150 ease-in-out`}
                  onClick={() => setActivePage(item.name)}>
                  {item.icon} <span className="hidden lg:block">{item.name}</span>
                </button>

              ))
            }
          </div>
        </div>
        <div>
          <button className="w-full text-xl text-left flex gap-2 pl-2 py-4 bg-black text-white hover:bg-gray-900"><LogOut /> Logout</button>
        </div>

      </div>

      {/* main */}
      <div className="flex-1">
        {/* navbar */}
        <nav className="border-b border-gray-300">
          <div className="container mx-auto p-2 flex items-center gap-2">
            <div>
              <button><Menu/></button>
            </div>
            <div className="text-right w-full">
              <div className="text-xl font-semibold ">{activePage}</div>
              <div className="text-gray-600 text-sm pb-1">Manage the entire KhajaGhar platform</div></div>
          </div>
        </nav>

        {/* elements contianer */}
        <div className="container mx-auto px-2 py-4 mt-6">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default page