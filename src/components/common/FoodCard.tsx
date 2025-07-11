'use client'

import { Eye, Plus, Send } from "lucide-react"
import { Button } from "../ui/button"

const FoodCard = () => {
    return (
        <div className="rounded-md  bg-white transition-scale ease-in-out duration-100 hover:scale-102 hover:shadow ">
            <div className="relative">
                <img src="https://t3.ftcdn.net/jpg/00/29/13/38/240_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg" alt="image photo" className="w-full h-58 rounded-t-md object-cover" />
                <div className="absolute top-1 right-1">
                   
                </div>
            </div>
            <div className="p-4 space-y-2 border border-gray-300 rounded-b-md">
                <div>
                    <div className="text-xl font-semibold flex justify-between">
                        Chicken Pizza
                    </div>
                    <div className="text-gray-600 text-xs">Pizza Palace</div>
                </div>
                <div className="text-gray-600 flex justify-between font-bold">
                    <div className="text-[#F2513E]">$14.99</div>
                    <div className=" px-2 py-0.5 text-xs  text-black border border-gray-300 rounded-full">Pizza</div>
                </div>
                <div className="text-gray-600 text-sm">
                    <div>Fresh tomatoes, mozzarella, basil</div>
                    <div>123 Main st, New York, NY</div>
                </div>
                <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1">
                        <Button variant={'outline'}><Send/> Directions</Button>
                        <Button variant={'outline'}><Eye/> Restaurant</Button>
                    </div>
                    <Button variant={'darkbutton'} className="w-full"><Plus/>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard