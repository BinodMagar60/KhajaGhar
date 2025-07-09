'use client'

import { Menu } from "lucide-react"
import { Button } from "../ui/button"

const Navbar = () => {

    const buttonLists = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "Restaurants",
            link: ""
        },
        {
            name: "Orders",
            link: ""
        },
        {
            name: "Support",
            link: ""
        },
    ]

    return (
        <div className="w-full bg-white relative">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="font-bold flex gap-1 items-center">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                    <span className=" text-xl lg:text-3xl ">KhajaGhar</span>
                </div>
                <div className="hidden md:block">
                    {
                        buttonLists.map((item, index) => (
                            <Button key={index} variant={'nooutline'} className="hover:text-[#FA8B3E] text-md">{item.name}</Button>
                        ))
                    }
                </div>
                <div className="flex items-center">
                    <div className="hidden">
                        Profile
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Button variant={'outline'}>Login</Button>
                        <Button variant={'darkbutton'} >Sign Up</Button>
                    </div>
                    <div>
                        <Button variant={'outline'} className="border-0 shadow-none cursor-pointer"><Menu /></Button>
                    </div>
                    <div className="w-full min-h-screen absolute bg-red-100 top-0 left-0">
                        <div className="h-screen">
                            {
                                buttonLists.map((item, index) => (
                                    <Button key={index} variant={'nooutline'} className="hover:text-[#FA8B3E] text-md">{item.name}</Button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar