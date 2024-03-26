import { AboutUs } from '@/components/pages/home/aboutUs'
import Consultation from '@/components/pages/home/consultation'
import Expertise from '@/components/pages/home/expertise'
import { FirstSection } from '@/components/pages/home/firstSection'
import { OurService } from '@/components/pages/home/ourService'
import Partners from '@/components/pages/home/partners'
import Projects from '@/components/pages/home/projects'
import Reviews from '@/components/pages/home/reviews'
import Team from '@/components/pages/home/team'

export default function Home() {
    return (
        <main className="">
            <div className="mb-20 w-full 2xl:grid 2xl:grid-cols-[1fr_8.0625rem] 3xl:grid-cols-[1fr_11.3125rem]">
                <div className="w-full">
                    <FirstSection />
                    <OurService />
                    <AboutUs />
                </div>
                <aside className="hidden w-32.25 flex-col 2xl:flex 3xl:w-45.25">
                    <div className="relative flex h-screen flex-col">
                        <div className="grow border-l border-l-base-1/30" />
                        <div className="my-3.625 ml-4 h-px bg-base-1/30" />
                        <div className="absolute -left-0.5 bottom-3.5 h-1 w-1 bg-base-14" />
                    </div>
                    <div className="grow border-l border-l-base-1/30" />
                </aside>
            </div>
            <Expertise />
            <Consultation />
            <Projects />
            <Team />
            <Reviews />
            <Partners />
        </main>
    )
}
