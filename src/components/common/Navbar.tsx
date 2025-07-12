'use client'

import { Headset, HomeIcon, Menu, ShoppingBag, User2, UserCheck2, UserPlus2, UtensilsCrossed, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import Link from "next/link"

interface IButtonLists {
    name: string,
    link: string,
    icon: React.ReactNode
}

const Navbar = () => {
    const [hamburger, sethamburger] = useState<boolean>(false)
    const iconsize: number = 24
    const buttonLists: IButtonLists[] = [
        {
            name: "Home",
            link: "/",
            icon: <HomeIcon size={iconsize} />
        },
        {
            name: "Restaurants",
            link: "/restaurants",
            icon: <UtensilsCrossed size={iconsize} />
        },
        {
            name: "Orders",
            link: "/",
            icon: <ShoppingBag size={iconsize} />
        },
        {
            name: "Support",
            link: "/",
            icon: <Headset size={iconsize} />
        },
    ]

    return (
        <div className="w-full bg-white sticky top-0 left-0 z-50 border border-t-0 border-r-0 border-l-0 border-b-gray-300">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="font-bold flex gap-1 items-center">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                    <span className=" text-xl lg:text-3xl ">KhajaGhar</span>
                </div>
                <div className="hidden md:block">
                    {
                        buttonLists.map((item, index) => (
                            <Link href={item?.link} key={index}>
                                <Button variant={'nooutline'} className="hover:text-[#FA8B3E] text-md cursor-pointer">{item.name}</Button>
                            </Link>
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
                        <Button variant={'outline'} className="border-0 shadow-none cursor-pointer md:hidden" onClick={() => sethamburger(prev => !prev)}>
                            <div className={`transition-all duration-200 ease-in-out ${hamburger? "relative":"flex flex-col gap-1"}`}>
                                <div className={`w-4 border transition-all duration-500 ease-in-out ${hamburger? "absolute top-1/2 left-1/2 -translate-1/2 rotate-45 ":""}`}></div>
                                <div className={`w-4 border transition-all duration-500 ease-in-out ${hamburger? "absolute top-1/2 left-1/2 -translate-1/2 -rotate-45 ":""}`}></div>
                            </div>
                        </Button>
                    </div>
                    {
                        hamburger && <div className="fixed top-14 w-full min-h-screen left-0 z-10 bg-[#ff6b35b0] backdrop-blur-md border border-white/20 shadow-lg">
                            <div className="container h-screen">
                                <div className="flex flex-col items-center gap-5  mt-10">
                                    <button className="p-0 text-white active:text-black hover:text-black text-2xl flex gap-3 items-center">
                                        <span><User2 size={iconsize} /></span>
                                        <span>Profile</span>
                                    </button>
                                    {
                                        buttonLists.map((item, index) => (
                                            <button key={index} className="p-0 text-white active:text-black hover:text-black text-2xl flex gap-3 items-center">
                                                <span>{item.icon}</span>
                                                <span>{item.name}</span>
                                            </button>
                                        ))
                                    }
                                    <button className="p-0 text-white active:text-black hover:text-black text-2xl flex gap-3 items-center">
                                        <span><UserCheck2 size={iconsize} /></span>
                                        <span>Login</span>
                                    </button>
                                    <button className="p-0 text-white active:text-black hover:text-black text-2xl flex gap-3 items-center">
                                        <span><UserPlus2 size={iconsize} /></span>
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