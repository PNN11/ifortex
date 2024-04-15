import { michroma } from '@/fonts'
import type { Metadata } from 'next'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'aos/dist/aos.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
    title: 'IFortex',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${michroma.className}`}>
                {/* <div className="grid min-h-screen grid-cols-1"> */}
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
                {/* </div> */}
                {/* <div id="modals" /> */}
            </body>
        </html>
    )
}
