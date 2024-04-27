"use client"
import { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { pages } from "@/utils/constants"

export default function PrivateLayout({ children }) {
    const router = useRouter()
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn')
        if (!isLoggedIn || isLoggedIn !== 'true') {
            router.push(pages.LOGIN)
        }
    }, [])
    return <div>hey{children}</div>
}