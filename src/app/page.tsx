'use client'
import FoodCard from "@/components/common/FoodCard";
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
      <div className="container mx-auto px-4 py-10">
        <div>
          <div className="text-2xl font-bold mb-8">Popular Restaurants</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            Array.from({ length: 4 }).map((_, i) => (
              <FoodCard key={i} />
            ))
          }
        </div>
      </div>

      <div className="w-full bg-[#111827]">
        <div className="container mx-auto pt-18">
          <div className="w-full px-4 text-gray-500 font-semibold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
          <div>
            <div>
              <div className="font-bold flex gap-1 items-center mb-3">
                <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                <span className="font-bold text-2xl lg:text-3xl text-white">KhajaGhar</span>
              </div>
              <div>
                Fast, reliable food delivery service
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl text-white mb-3">
              For Customers
            </div>
            <div className="space-y-2">
              <div>Browse Restaurants</div>
              <div>Customer Support</div>
            </div>
          </div>
          <div>
            <div className="text-xl text-white mb-3">
              For Restaurants
            </div>
            <div className="space-y-2">
              <div>Partner with Us</div>
              <div>Restaurant Login</div>
            </div>
          </div>
          <div>
            <div className="text-xl text-white mb-3">
              Company
            </div>
            <div className="space-y-2">
              <div>About Us</div>
              <div>Careers</div>
            </div>
          </div>
        </div>
        <div className="border border-[#111827] border-t-[#a8a8a849] text-gray-500 text-center py-8">
            &#169; {new Date().getFullYear()} KhajaGhar. All rights reserved.
        </div>
        </div>
      </div>

    </div>
  )
}
