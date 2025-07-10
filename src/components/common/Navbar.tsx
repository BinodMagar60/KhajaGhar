'use client'

import { Headset, HomeIcon, Menu, ShoppingBag, User2, UserCheck2, UserPlus2, UtensilsCrossed, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

interface IButtonLists {
    name: string,
    link: string,
    icon: React.ReactNode
}

const Navbar = () => {
    const [hamburger, sethamburger] = useState<boolean>(false)
    const iconsize:number = 24
    const buttonLists: IButtonLists[] = [
        {
            name: "Home",
            link: "",
            icon: <HomeIcon size={iconsize} />
        },
        {
            name: "Restaurants",
            link: "",
            icon: <UtensilsCrossed size={iconsize} />
        },
        {
            name: "Orders",
            link: "",
            icon: <ShoppingBag size={iconsize} />
        },
        {
            name: "Support",
            link: "",
            icon: <Headset size={iconsize} />
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
                            <Button key={index} variant={'nooutline'} className="hover:text-[#FA8B3E] text-md cursor-pointer">{item.name}</Button>
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
                        <Button variant={'outline'} className="border-0 shadow-none cursor-pointer md:hidden" onClick={()=>sethamburger(true)}><Menu /></Button>
                    </div>
                    {
                        hamburger && <div className={`fixed top-0 w-full min-h-screen bg-red-50 left-0 z-10`}>
                        <div className="container h-screen">
                            <div className="w-full flex justify-end">
                                <button className=" py-4 text-gray-500 active:text-black hover:text-[#FA8B3E] cursor-pointer" onClick={()=>sethamburger(false)}><X size={24}/></button>
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <button className="p-0 text-gray-500 active:text-black hover:text-[#FA8B3E] text-2xl flex gap-3 items-center">
                                    <span><User2 size={iconsize}/></span>
                                    <span>Profile</span>
                                </button>
                                {
                                    buttonLists.map((item, index) => (
                                        <button key={index} className="p-0 text-gray-500 active:text-black hover:text-[#FA8B3E] text-2xl flex gap-3 items-center">
                                            <span>{item.icon}</span>
                                            <span>{item.name}</span>
                                        </button>
                                    ))
                                }
                                <button className="p-0 text-gray-500 active:text-black hover:text-[#FA8B3E] text-2xl flex gap-3 items-center">
                                    <span><UserCheck2 size={iconsize}/></span>
                                    <span>Login</span>
                                </button>
                                <button className="p-0 text-gray-500 active:text-black hover:text-[#FA8B3E] text-2xl flex gap-3 items-center">
                                    <span><UserPlus2 size={iconsize}/></span>
                                    <span>Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar