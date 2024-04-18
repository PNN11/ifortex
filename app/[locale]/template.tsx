'use client'
import Aos from 'aos'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, ReactNode, useEffect } from 'react'

const Template: FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        Aos.init({ once: true })

        gsap.registerPlugin(ScrollTrigger)
    }, [])

    return <div>{children}</div>
}

export default Template
