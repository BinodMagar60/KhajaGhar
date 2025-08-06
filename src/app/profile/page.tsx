'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Bell, Edit, Mail, MapPin, Phone, StoreIcon, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const page = () => {

    const size = 20
    const quickActionButtons = [
        {
            id: 1,
            icon: <User size={size} />,
            name: "View Orders",
            link: '/orders'
        },
        {
            id: 2,
            icon: <MapPin size={size} />,
            name: "Manage Address",
            link: '/'
        },
        {
            id: 3,
            icon: <StoreIcon size={size} />,
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
                <div className="col-span-2">
                    <PersonalInforamtion />
                </div>
            </div>

        </div>
    )
}


const PersonalInforamtion = () => {
    const [isEdit, setEdit] = useState(false)
    const [profile, setProfile] = useState({
        fullName: "Binod Kaucha Magar",
        email: "kauchabinod88@gmail.com",
        phone: "981111111",
        getOrderNotification: false,
        getPromotionNotification: true,
        getEmailNotification: false,
        getSmsNotification: false,
    })

    const [favouriteRestaurants, setFavouriteRestaurants] = useState([
        {
            id: 1,
            name: "Pizza Place",
            rating: 4.5,
            image: "https://t3.ftcdn.net/jpg/00/29/13/38/240_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg",
        },
        {
            id: 2,
            name: "Pizza Place",
            rating: 4.5,
            image: "https://t3.ftcdn.net/jpg/00/29/13/38/240_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg",
        },
        {
            id: 3,
            name: "Pizza Place",
            rating: 4.5,
            image: "https://t3.ftcdn.net/jpg/00/29/13/38/240_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg",
        },
    ])
    return (
        <div className="space-y-4">
            <div className="w-full border bg-white border-gray-300 px-4 py-8 rounded-md">
                <div className="flex justify-between">
                    <div className="text-xl font-semibold ">Personal Information</div>
                    <div><Button variant={"outline"} onClick={() => setEdit(prev => !prev)}><Edit />{isEdit ? 'Cancel' : 'Edit'}</Button></div>
                </div>
                <div>
                    {
                        isEdit ?
                            <div className="mt-4 space-y-4">
                                <div>
                                    <div>Full Name</div>
                                    <div>
                                        <Input placeholder="John Doe" className="border-gray-300" />
                                    </div>
                                </div>
                                <div>
                                    <div>Email Address</div>
                                    <div>
                                        <Input placeholder="example@gmail.com" className="border-gray-300" disabled />
                                    </div>
                                </div>
                                <div>
                                    <div>Phone Number</div>
                                    <div>
                                        <Input placeholder="9800000000" className="border-gray-300" />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant={'darkbutton'}>Save Changes</Button>
                                    <Button variant={'outline'} onClick={() => setEdit(prev => !prev)}>Cancel</Button>
                                </div>
                            </div>
                            :
                            <div className="mt-4 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="text-gray-600"><User size={30} /></div>
                                    <div>
                                        <div className="text-gray-600">Full Name</div>
                                        <div>{profile.fullName}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-gray-600"><Mail size={30} /></div>
                                    <div>
                                        <div className="text-gray-600">Email</div>
                                        <div className="truncate w-60 sm:w-full">{profile.email}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-gray-600"><Phone size={30} /></div>
                                    <div>
                                        <div className="text-gray-600">Phone Number</div>
                                        <div>{profile.phone}</div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className="w-full border bg-white border-gray-300 px-4 py-8 rounded-md">
                <div className="text-xl font-semibold flex gap-2 items-center"><Bell size={18} /> Notification Preferences</div>
                <div>
                    <div className="flex items-center justify-between border-b border-gray-300 py-4">
                        <div>
                            <div className="text-lg">Order Updates</div>
                            <div className="text-gray-500">Get notified about your order status</div>
                        </div>
                        <div>
                            <div className={`p-0.5 h-7 rounded-full w-14 relative cursor-pointer ${profile.getOrderNotification ? "bg-black" : "bg-gray-200"} transition-colors duration-300 ease-in-out`} onClick={() => setProfile(data => ({ ...data, getOrderNotification: !profile.getOrderNotification }))}>
                                <div className={`w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 ${profile.getOrderNotification ? "right-0.5 " : "left-0.5"}transition-all duration-500 ease-in-out`}></div>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between border-b border-gray-300 py-4">
                        <div>
                            <div className="text-lg">Promotions & Offers</div>
                            <div className="text-gray-500">Receive special deals and discounts</div>
                        </div>
                        <div>
                            <div className={`p-0.5 h-7 rounded-full w-14 relative cursor-pointer ${profile.getPromotionNotification ? "bg-black" : "bg-gray-200"} transition-colors duration-300 ease-in-out`} onClick={() => setProfile(data => ({ ...data, getPromotionNotification: !profile.getPromotionNotification }))}>
                                <div className={`w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 ${profile.getPromotionNotification ? "right-0.5 " : "left-0.5"}transition-all duration-500 ease-in-out`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-300 py-4">
                        <div>
                            <div className="text-lg">Email Notification</div>
                            <div className="text-gray-500">Receive Notification via email</div>
                        </div>
                        <div>
                            <div className={`p-0.5 h-7 rounded-full w-14 relative cursor-pointer ${profile.getEmailNotification ? "bg-black" : "bg-gray-200"} transition-colors duration-300 ease-in-out`} onClick={() => setProfile(data => ({ ...data, getEmailNotification: !profile.getEmailNotification }))}>
                                <div className={`w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 ${profile.getEmailNotification ? "right-0.5 " : "left-0.5"}transition-all duration-500 ease-in-out`}></div>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between  py-4">
                        <div>
                            <div className="text-lg">SMS Notification</div>
                            <div className="text-gray-500">Receive notifications via text message</div>
                        </div>
                        <div>
                            <div className={`p-0.5 h-7 rounded-full w-14 relative cursor-pointer ${profile.getSmsNotification ? "bg-black" : "bg-gray-200"} transition-colors duration-300 ease-in-out`} onClick={() => setProfile(data => ({ ...data, getSmsNotification: !profile.getSmsNotification }))}>
                                <div className={`w-6 h-6 bg-white rounded-full absolute top-1/2 -translate-y-1/2 ${profile.getSmsNotification ? "right-0.5 " : "left-0.5"}transition-all duration-500 ease-in-out`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default page