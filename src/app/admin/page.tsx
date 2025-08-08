'use client'

import { ChartColumn, ChartPieIcon, Shield, ShoppingBag, Store, User, Users } from "lucide-react"
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
      name: "Restaurant Apllications",
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
    switch (activePage)
  }

  return (
    <div className="w-full h-screen flex relative ">


      {/* sidebar */}
      <div className="h-screen fixed top-0 left-0 border-r border-gray-300">

        <div className="flex text-white bg-blue-600 items-center justify-center border-b border-gray-300 w-60 gap-2 py-2">
          <div><Shield size={40} /></div>
          <div>
            <div className="text-xl font-semibold">Admin Panel</div>
            <div>Platform Management</div>
          </div>
        </div>

        <div className="">
          <div className="text-sm text-gray-600 mt-8 mb-4 w-full text-center">
            PLATFROM CONTROL
          </div>
          <div>
            {
              adminSidebar.map(item => (

                <button key={item.id} className={`flex items-center gap-2 text-lg w-full pl-2 py-4 text-gray-600 hover:text-black`}>
                  {item.icon} {item.name}
                </button>

              ))
            }
          </div>
        </div>

      </div>

      {/* main */}
      <div></div>
    </div>
  )
}

export default page