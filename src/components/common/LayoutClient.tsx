'use client'

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"


const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/vendor')

    return (
        <>
            {
                !isAdmin && <Navbar />
            }
            <main>

                {children}
            </main>
        </>
    )
}

export default LayoutClient