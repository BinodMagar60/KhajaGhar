'use client'

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Phone, Mail, CircleQuestionMark } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"
import { Button } from "@/components/ui/button"
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
                    <div>
                        <ContactFrom />
                    </div>
                    <div>
                        <FAQ />
                    </div>
                </div>
            </div>
        </div>
    )
}


function ContactFrom() {

    return (
        <form className="w-full border border-gray-300 bg-white p-6 rounded-md space-y-4">
            <div className="text-xl font-semibold">
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
                            <SelectValue placeholder='Select a category' />
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
            <div>
                <Button className="w-full bg-black text-white hover:bg-gray-900">Send Message</Button>
            </div>
        </form>
    )
}


const FAQ = () => {
    const [searched, setSearched] = useState("")
    const Data = [
        {
            id: 1,
            title: "How do I track my order",
            description: "You can track your order by visiting the 'Orders' page in your account or clicking the tracking link in your confirmation email. You'll see real-time updates on your order status.",
            value: "item-1"
        },
        {
            id: 2,
            title: "What if my order is late",
            description: "If your order is significantly delayed, please contact us immediately. We'll investigate with the restaurant and provide updates. You may be eligible for a refund or credit.",
            value: "item-2"
        },
        {
            id: 3,
            title: "How do I cancel an order",
            description: "Orders can only be cancelled within the first 5 minutes after placing. Go to your order details and click 'Cancel Order'. After this time, contact the restaurant directly.",
            value: "item-3"
        },
        {
            id: 4,
            title: "What payment methods you accept",
            description: "We accept all major credit cards, debit cards, and other e-wallets present in Nepal. Cash on delivery is available in select areas.",
            value: "item-4"
        },
        {
            id: 5,
            title: "How are delivery fees calculated",
            description: "Delivery fees vary by restaurant and distance. The fee is clearly shown before you place your order. Some restaurants offer free delivery on orders above a certain amount.",
            value: "item-5"
        },
        {
            id: 6,
            title: "What if my order is wrong or missing items?",
            description: "If there's an issue with your order, contact us immediately through the app or website. We'll work with the restaurant to resolve the issue and may offer a refund or replacement.",
            value: "item-6"
        },
        {
            id: 7,
            title: "How do I become a restaurant partner?",
            description: "Visit our restaurant registration page and fill out the application. Our team will review your application within 24-48 hours and contact you with next steps.",
            value: "item-7"
        },
    ]


    const searchedQuery = searched.trim() === ""
        ? Data
        : Data.filter(item => item.title.toLowerCase().includes(searched.toLowerCase().trim()));


    return (
        <div className="mt-6 mb-8 w-full border border-gray-300 bg-white p-6 rounded-md space-y-4">
            <div className="flex items-center text-xl font-semibold gap-2">
                <CircleQuestionMark size={20} /> Frequently Asked Questions
            </div>
            <div>
                <Input placeholder="Search FAQs..." className="w-full border-gray-300" onChange={(e) => setSearched(e.target.value)} />
            </div>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                {
                    searchedQuery.map(item => (
                        <AccordionItem value={item.value} key={item.id}>
                            <AccordionTrigger className="font-semibold text-base">{item.title}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance text-gray-600">
                                <p>
                                    {item.description}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}



export default page