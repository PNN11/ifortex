import NegativeTopMarginWrapper from '@/components/ui/wrappers/negativeTopMargin'
import { AboutUs } from './aboutUs'
import Consultation from './consultation'
import Expertise from './expertise'
import { FirstSection } from './firstSection'
import { OurService } from './ourService'
import Partners from './partners'
import Projects from './projects'
import Reviews from './reviews'
import Team from './team'

const Homepage = () => {
    return (
        <main className="">
            <NegativeTopMarginWrapper>
                <div className="mb-20 w-full 2xl:grid 2xl:grid-cols-[1fr_8.0625rem] 3xl:grid-cols-[1fr_11.3125rem]">
                    <div className="relative w-full overflow-hidden">
                        <FirstSection />
                        <OurService />
                        <AboutUs />
                    </div>
                    <aside className="hidden w-32.25 flex-col 2xl:flex 3xl:w-45.25">
                        <div className="relative flex h-screen flex-col">
                            <div className="grow border-l border-l-base-15/30" />
                            <div className="my-3.625 ml-4 h-px bg-base-15/30" />
                            <div className="absolute -left-0.5 bottom-3.5 h-1 w-1 bg-base-14" />
                        </div>
                        <div className="grow border-l border-l-base-15/30" />
                    </aside>
                </div>
            </NegativeTopMarginWrapper>
            <Expertise />
            <Consultation />
            <Projects />
            <Team />
            <Reviews />
            <Partners />
        </main>
    )
}

export default Homepage
