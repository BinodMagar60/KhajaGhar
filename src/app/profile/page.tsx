'use client'

import { Button } from "@/components/ui/button"
import { MapPin, StoreIcon, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = () => {

    const size = 20
    const quickActionButtons = [
        {
            id: 1,
            icon: <User size={size}/>,
            name: "View Orders",
            link: '/orders'
        },
        {
            id: 2,
            icon: <MapPin size={size}/>,
            name: "Manage Address",
            link: '/'
        },
        {
            id: 3,
            icon: <StoreIcon size={size}/>,
            name: "Browse Restaurants",
            link: '/restaurants'
        },
        
    ]

    return (
        <div className="container mx-auto px-4">
            <div className="mt-10 text-center ">
                <div className="text-2xl sm:text-3xl font-bold">My Profile</div>
                <div className="text-gray-500 text-xs sm:text-base">Manage Your account setting and preferences</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                <div className="col-span-1 flex flex-col gap-4">
                    <div className="border border-gray-300 p-4 bg-white rounded-md flex flex-col items-center justify-center">
                    <div className="w-20 h-20 relative object-cover rounded-full border border-gray-300">
                        <Image src={'https://res.cloudinary.com/dsssvg37w/image/upload/v1752375662/nobackgroundProfilePic_ngrzao.png'} fill alt="ProfilePic" />
                    </div>
                    <div className="w-full p-4">
                        <div className="text-center font-semibold">
                            <div className="text-xl">Binod Magar</div>
                            <div className="text-gray-500 text-sm">kauchabinod88@gmail.com</div>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex gap-2 justify-between">
                                <div className="text-gray-500">Member since:</div>
                                <div>January 2023</div>
                            </div>
                            <div className="flex gap-2 justify-between">
                                <div className="text-gray-500">Total orders:</div>
                                <div>47</div>
                            </div>
                            <div className="flex gap-2 justify-between">
                                <div className="text-gray-500">Total spent:</div>
                                <div>Rs. 111</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full p-4 bg-white border border-gray-300 rounded-md">
                    <div className="text-xl font-semibold">Quick Actions</div>
                    <div className="flex flex-col gap-1 mt-4 justify-center  w-full">
                        {
                            quickActionButtons.map(item => (
                                <Link href={item.link} key={item.id}>
                                    <button className="border border-gray-300 flex items-center text-lg w-full p-2 rounded-md cursor-pointer gap-2 pl-4 hover:bg-gray-100">{item.icon} {item.name}</button>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                </div>
                <div className="col-span-2 border border-gray-300 p-4 bg-white rounded-md">

                </div>
            </div>

        </div>
    )
}

export default page