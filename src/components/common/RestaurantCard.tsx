'use client'

import { Clock, Heart, Send, Star } from "lucide-react"
import { Button } from "../ui/button"

const RestaurantCard = () => {
    return (
        <div className="rounded-md  bg-white transition-scale ease-in-out duration-200 hover:scale-102 hover:shadow ">
            <div className="relative">
                <img src="https://t3.ftcdn.net/jpg/00/29/13/38/240_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg" alt="image photo" className="w-full h-58 rounded-t-md object-cover" />
                <div className="absolute top-2 right-2">
                    <button className="p-1.5 bg-white rounded-full hover:text-[#F76A27]"><Heart size={18}/></button>
                </div>
            </div>
            <div className="p-4 space-y-2 border border-gray-300 rounded-b-md">
                <div>
                    <div className="text-xl font-semibold flex justify-between">
                        <div>Pizza Palace</div>
                        <div className="bg-gray-200 h-fit px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Star size={12} fill="#EAB308" color="#EAB308" />
                            <span className="text-xs font-bold"> 4.3</span>
                        </div>
                    </div>
                    <div className="text-gray-600">Italian</div>
                </div>
                <div className="text-gray-600 flex justify-between text-sm">
                    <div className="flex items-center gap-1"><Clock size={14}/>25-25 min</div>
                    <div>$2.99 delivery</div>
                </div>
                <div className="text-gray-600 text-sm">
                    <div></div>
                    <div>123 Main st, New York, NY</div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <Button variant={'outline'} className="w-full"><span><Send /></span>Directions</Button>
                    <Button variant={'darkbutton'} className="w-full">View Menu</Button>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard