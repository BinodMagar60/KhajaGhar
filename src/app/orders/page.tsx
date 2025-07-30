'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react"

interface IOrder {
    orderId: string;
    Restaurant: string;
    orderDate: string;
    deliveryDate: string;
    deliveryAddress: string;
    items: {
        id: number;
        name: string;
        price: number;
        qty: number;
        img: string;
    }[];
    total: number;
    status: string;
}


const Data: IOrder[] = [
    {
        orderId: "ABC",
        Restaurant: "Pizzza Place",
        orderDate: "July 12, 2025, 1:45 PM",
        deliveryDate: "July12, 2025, 2:13 PM",
        deliveryAddress: "Bharatpur-10, Chitwan",
        items: [
            {
                id: 1,
                name: "Margherita Pizza",
                price: 200,
                qty: 2,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            },
            {
                id: 2,
                name: "Garlic Bread",
                price: 150,
                qty: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            }
        ],
        total: 550,
        status: "Out For Delivery"
    },
    {
        orderId: "ABCD",
        Restaurant: "Pizzza Place",
        orderDate: "July 12, 2025, 1:45 PM",
        deliveryDate: "July12, 2025, 2:13 PM",
        deliveryAddress: "Bharatpur-10, Chitwan",
        items: [
            {
                id: 1,
                name: "Margherita Pizza",
                price: 200,
                qty: 2,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            },
            {
                id: 2,
                name: "Garlic Bread",
                price: 150,
                qty: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            }
        ],
        total: 550,
        status: "Out For Delivery"
    },
    {
        orderId: "ABCDE",
        Restaurant: "Pizzza Place",
        orderDate: "July 12, 2025, 1:45 PM",
        deliveryDate: "July12, 2025, 2:13 PM",
        deliveryAddress: "Bharatpur-10, Chitwan",
        items: [
            {
                id: 1,
                name: "Margherita Pizza",
                price: 200,
                qty: 2,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            },
            {
                id: 2,
                name: "Garlic Bread",
                price: 150,
                qty: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            }
        ],
        total: 550,
        status: "Cancelled"
    },
    {
        orderId: "ABCDEF",
        Restaurant: "Pizzza Place",
        orderDate: "July 12, 2025, 1:45 PM",
        deliveryDate: "July12, 2025, 2:13 PM",
        deliveryAddress: "Bharatpur-10, Chitwan",
        items: [
            {
                id: 1,
                name: "Margherita Pizza",
                price: 200,
                qty: 2,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            },
            {
                id: 2,
                name: "Garlic Bread",
                price: 150,
                qty: 1,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&s",
            }
        ],
        total: 550,
        status: "Delivered"
    },
]






const Page = () => {

    const [activeOrder, setActiveOrder] = useState(true)
    const router = useRouter()

    const ActiveOrdersData = Data.filter(item => item.status === "Out For Delivery" || item.status === "Order Placed")

    const PastOrdersData = Data.filter(item => item.status === "Cancelled" || item.status === "Delivered")

    const showData = activeOrder? ActiveOrdersData : PastOrdersData

    return (
        <div className="container mx-auto px-4">
            <div className="mt-10 text-center ">
                <div className="text-2xl sm:text-3xl font-bold">Your orders</div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2 bg-[#F4F4F5] p-1 rounded-md mt-6">
                <Button className={`text-md shadow-none cursor-pointer ${activeOrder ? "bg-white " : "text-gray-600"}`} onClick={() => setActiveOrder(true)}>Active Orders</Button>
                <Button className={`text-md shadow-none cursor-pointer ${!activeOrder ? "bg-white " : "text-gray-600"}`} onClick={() => setActiveOrder(false)}>Past Orders</Button>
            </div>
            <div className="mt-4 w-full ">
                <div className="flex gap-2 flex-col mb-8">
                    {
                        showData.length === 0 ?
                            (<>
                                <div className="w-full rounded-md p-4 bg-white border border-gray-300 flex items-center justify-center flex-col min-h-60 text-gray-500 gap-2">
                                    <div>
                                        <ShoppingCart size={55} />
                                    </div>
                                    <div className="font-semibold">
                                        No Orders Placed
                                    </div>
                                    <div>
                                        <Button variant={"darkbutton"} onClick={() => router.push('/restaurants')}>Browse</Button>
                                    </div>
                                </div>
                            </>) :
                            (<>
                                {
                                    showData.map(item => (
                                        <OrdersCard item={item} key={item.orderId} />
                                    ))
                                }
                            </>)
                    }
                </div>
            </div>
        </div>
    )
}



const OrdersCard = ({ item }: { item: IOrder }) => {
    return (
        <div className="w-full rounded-md p-4 bg-white border border-gray-300">
            <div className="flex items-center text-center flex-col sm:text-left sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="font-semibold text-lg">{item.Restaurant}</div>
                    <div className="text-sm text-gray-500 ">Order: {item.orderId}</div>
                </div>
                <div className={`text-xs  font-semibold w-fit py-1 px-2 flex items-center justify-center rounded-full ${item.status === "Out For Delivery" ? "bg-purple-200 text-purple-600" : item.status === "Order Placed" ? "bg-orange-200 text-orange-600" : item.status === "Cancelled"? "bg-red-200 text-red-500" : "bg-green-200 text-green-500"}`}>
                    {item.status}
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                {
                    item.items.map(product => (
                        <div key={product.id} className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 relative">
                                    <Image src={product.img} fill
                                        sizes="10"
                                        alt={product.name}
                                        className="rounded object-cover"
                                    />
                                </div>
                                <div className="truncate overflow-hidden whitespace-nowrap max-w-[190px] sm:max-w-[450px] md:max-w-[500px]
                                            lg:max-w-[700px]
                                            xl:max-w-[900px]"
                                >
                                    {product.qty}x {product.name}
                                </div>


                            </div>
                            <div>
                                Rs.{product.price}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="border-t border-t-gray-300 my-2"></div>
            <div className="flex flex-col gap-1">
                <div className="flex not-sm:flex-col sm:justify-between text-sm">
                    <div className="text-gray-600">Order Time:</div>
                    <div>{item.orderDate}</div>
                </div>
                <div className="flex not-sm:flex-col sm:justify-between text-sm">
                    <div className="text-gray-600">Estimated Delivery:</div>
                    <div>{item.deliveryDate}</div>
                </div>
                <div className="flex not-sm:flex-col sm:justify-between text-sm">
                    <div className="text-gray-600">Delivery Address:</div>
                    <div>{item.deliveryAddress}</div>
                </div>
                <div className="flex justify-between text-md font-semibold">
                    <div>Total:</div>
                    <div>Rs.{item.total}</div>
                </div>
            </div>
            {
                item.status !== "Delivered" && item.status !== "Cancelled" && (
                    <div>
                        <Button variant={"darkbutton"} className="w-full mt-3">Cancel</Button>
                    </div>
                )
            }
        </div>
    )
}

export default Page