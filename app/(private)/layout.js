"use client"
import { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { pages } from "@/utils/constants"
import Header from "../_components/Header"
import PrivateRootContainer from "../_components/PrivateRootContainer"
import { Box } from "@mui/material"

export default function PrivateLayout({ children }) {
    const router = useRouter()
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn')
        if (!isLoggedIn || isLoggedIn !== 'true') {
            router.push(pages.LOGIN)
        }
    }, [])
    return <Box sx={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column" }}>
        <Header />
        <PrivateRootContainer > {children}</PrivateRootContainer>
    </Box>
}