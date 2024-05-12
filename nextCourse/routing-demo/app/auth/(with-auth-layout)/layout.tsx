"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const navLink = [{ name: "register", link: "/auth/register" }, { name: "login", link: "/auth/login" }]
export default function RootLayout({
    
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    return (
        <div>
        {children}
        {navLink.map((link)=>{
            const isActive=pathname.startsWith(link.link)
           return(
            <Link href={link.link} className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>{link.name}</Link>
           )
        })}
        </div>
       
    )
}