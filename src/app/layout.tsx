// import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import "swiper/css";
import "swiper/css/navigation";
import '../../public/assets/css/style.css';
import 'mapbox-gl/dist/mapbox-gl.css'
// import "react-modal-video/css/modal-video.css"
import { useEffect, useState } from "react";
import Preloader from '@/components/Preloader'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biocloud',
  description: 'Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{background: '#fff', overflowX: 'hidden'}}>{children}</body>
    </html>
  )
}
