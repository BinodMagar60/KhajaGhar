'use client'

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail } from "lucide-react"
import { toast } from "sonner"
const icons = {
    Phone: Phone,
    Mail: Mail,
}

const page = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="mt-10 text-center leading-6 sm:leading-10">
                <div className="text-2xl sm:text-3xl font-bold">Customer Support</div>
                <div className="text-sm sm:text-base text-gray-600">We're here to help! Get in touch with us.</div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                <div className="w-full lg:col-span-1 flex gap-6 flex-col">
                    {
                        [
                            {
                                title: "Call us",
                                description: "Speak directly with our support team",
                                icon: 'Phone',
                                bottomTopPart: '9800000000',
                                bottomBottomPart: "Sun-Fri: 8AM-10AM",
                            },
                            {
                                title: "Emai Us",
                                description: "Send us a detailed message",
                                icon: "Mail",
                                bottomTopPart: 'support@khajaghar.com',
                                bottomBottomPart: "Response within 24 hours",
                            },
                        ].map(item => {
                            const Icon = icons[item.icon as keyof typeof icons];
                            return (
                                <div key={item.title} className="border rounded-md border-gray-300 bg-white p-8 flex flex-col justify-center items-center cursor-pointer" onClick={() => {
                                    navigator.clipboard.writeText(item.bottomTopPart)
                                    toast.success(item.title === "Call us" ? "Contact Copied" : "Email Copied", {
                                        duration: 1000
                                    })
                                }}>
                                    <div><Icon className="w-8 h-8 text-[#F97316]" /></div>
                                    <div className="font-semibold mt-4 mb-2">{item.title}</div>
                                    <div className="text-gray-600 text-sm">{item.description}</div>
                                    <div className="font-semibold mt-4">{item.bottomTopPart}</div>
                                    <div className="text-gray-600 text-sm">{item.bottomBottomPart}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="lg:col-span-2">
                    <ContactFrom />
                </div>
            </div>
        </div>
    )
}


function ContactFrom() {

    return (
        <form className="w-full border border-gray-300 bg-white p-6 rounded-md space-y-4">
            <div>
                Send us a Message
            </div>
            <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                <div>
                    <div>Name*</div>
                    <div><Input className="border-gray-300" placeholder="Your full name" /></div>
                </div>
                <div>
                    <div>Email*</div>
                    <div><Input className="border-gray-300" placeholder="your.email@example.com" /></div>
                </div>
            </div>
            <div>
                <div>Category*</div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full border-gray-300 ring-0 focus:ring-0">
                            <SelectValue placeholder='Select a category'/>
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                            <SelectGroup>
                                <SelectItem value="Order Issues">Order Issues</SelectItem>
                                <SelectItem value="Payment Problem">Payment Problem</SelectItem>
                                <SelectItem value="Delivery Issues">Delivery Issues</SelectItem>
                                <SelectItem value="Account Help">Account Help</SelectItem>
                                <SelectItem value="Restaurant Issues">Restaurant Issues</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <div>Subject*</div>
                <div><Input className="border-gray-300" placeholder="Brief description of your issue" /></div>
            </div>
            <div>
                <div>Message*</div>
                <div><Textarea id="message" placeholder="Please describe your issue in detail..." className="w-full resize-none h-32 overflow-y-auto border-gray-300 shadow-none" style={{
                    scrollbarWidth: "none"
                }} /></div>
            </div>
            <div></div>
        </form>
    )
}



export default page