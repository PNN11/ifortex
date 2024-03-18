import { AboutUs } from '@/components/pages/home/aboutUs'
import Consultation from '@/components/pages/home/consultation'
import Expertise from '@/components/pages/home/expertise'
import { FirstSection } from '@/components/pages/home/firstSection'
import { OurService } from '@/components/pages/home/ourService'
import Projects from '@/components/pages/home/projects'
import Team from '@/components/pages/home/team'

export default function Home() {
    return (
        <main className="pb-100">
            <div className="mb-20 grid w-full grid-cols-[1fr_11.3125rem]">
                <div className="w-full">
                    <FirstSection />
                    <OurService />
                    <AboutUs />
                </div>
                <aside className="w-45.25 border-l border-l-base-1/30"></aside>
            </div>
            <Expertise />
            <Consultation />
            <Projects />
            <Team />
        </main>
    )
}
