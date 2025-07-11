'use client'
import RestaurantCard from "@/components/common/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isRestaurantsActive, setRestaurantsActive] = useState(true)
  return (
    <div className="w-full">
      <div className="bg-linear-to-r from-[#F97317] to-[#EF4543]">
        <div className="container mx-auto px-4 py-16 space-y-4">
          <div className="text-white text-3xl md:text-4xl xl:text-6xl text-center font-bold">
            Delicious Food Delivered Fast
          </div>
          <div className="text-white text-sm md:text-xl text-center ">
            Order from your favorite restaurants and get it delivered to your door
          </div>
          <div className="max-w-120 mx-auto rounded-md w-full grid grid-cols-2 p-1 text-white bg-[#ffffff1f] mt-8">
            <Button className={`text-lg rounded-md ${isRestaurantsActive ? "bg-white text-black" : "hover:bg-[#ffffff3f]"}`} onClick={() => setRestaurantsActive(true)}>Restaurants</Button>
            <Button className={`text-lg rounded-md ${!isRestaurantsActive ? "bg-white text-black" : "hover:bg-[#ffffff3f]"}`} onClick={() => setRestaurantsActive(false)}>Food Items</Button>
          </div>
          <form className="max-w-120 mx-auto w-full relative">
            <div className="text-gray-500 absolute left-1 top-1/2 -translate-y-1/2"><Search size={20} /></div>
            <Input className="w-full bg-white border-0 pl-8 pr-22 py-5 placeholder:text-gray-500" placeholder={isRestaurantsActive ? "Search restaurants..." : "Search food items..."} />
            <Button variant={'darkbutton'} className="absolute top-1/2 -translate-y-1/2 right-1">Search</Button>
          </form>
        </div>
      </div>
      <div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div>
          <div className="text-2xl font-bold mb-8">Popular Restaurants</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
          Array.from({ length: 8 }).map((_, i) => (
            <RestaurantCard key={i} />
          ))
        }
        </div>
      </div>

    </div>
  )
}
