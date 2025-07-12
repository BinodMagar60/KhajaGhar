'use client'

import FoodCard from "@/components/common/FoodCard"
import RestaurantCard from "@/components/common/RestaurantCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useState } from "react"

const Page = () => {
    const [isRestaurantsActive, setRestaurantsActive] = useState(true)
    return (
        <div className="container mx-auto px-4 space-y-3">
            <div className="max-w-120 mt-6 rounded-md w-full grid grid-cols-2 p-1 text-gray-500 bg-[#F3F4F6]">
                <Button className={` rounded-md ${isRestaurantsActive ? "bg-white text-black" : "hover:text-black"}`} onClick={() => setRestaurantsActive(true)}>Restaurants</Button>
                <Button className={` rounded-md ${!isRestaurantsActive ? "bg-white text-black" : "hover:text-black"}`} onClick={() => setRestaurantsActive(false)}>Food Items</Button>
            </div>
            <form className="relative">
                <Search className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />
                <Input placeholder={isRestaurantsActive ? "Search food items..." : "Search restaurants..."} className="border-gray-300 w-full pl-10 t" />
            </form>
            <div>
                <Select defaultValue="Rating">
                <SelectTrigger className="border border-gray-300 w-34">
                    <SelectValue placeholder="Select"/>
                </SelectTrigger>
                <SelectContent className="border border-gray-300">
                    <SelectGroup>
                        <SelectItem value='Destination'>Destination</SelectItem>
                        <SelectItem value='Rating'>Rating</SelectItem>
                        <SelectItem value='Price'>Price</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            </div>
            <div className="px-3">
                <div className="text-gray-500 text-lg mb-2" style={{
                    fontWeight: "500"
                }}>{isRestaurantsActive? "5 Restaurants found":"4 Dishes found"}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {
                        isRestaurantsActive? Array.from({length: 5}).map((_, index) => (
                            <RestaurantCard key={index}/>
                        )):
                        Array.from({length: 4}).map((_, i)=> (
                            <FoodCard key={i}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Page