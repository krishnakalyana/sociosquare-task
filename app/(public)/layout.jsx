'use client'
import { pages } from '@/utils/constants'
import ImageBackground from '../_components/BackgroundImage'
import PublicRootContainer from '../_components/PublicRootContainer'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PublicLayout({ children }) {
  const router = useRouter()
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    if (isLoggedIn || isLoggedIn == 'true') {
      router.push(pages.Dashboard)
    }
  }, [])
  return (
    <PublicRootContainer>
      <ImageBackground src={'/assets/wave.svg'} alt='background' />
      {children}
    </PublicRootContainer>
  )
}
