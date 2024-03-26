import CasesFirstScreen from '@/components/pages/cases/firstScreen/casesFirstScreen'
import Partners from '@/components/pages/home/partners'
import Projects from '@/components/pages/home/projects'
import Reviews from '@/components/pages/home/reviews'

export default function Home() {
    return (
        <main className="">
            <CasesFirstScreen />
            <Projects />
            <Reviews />
            <Partners />
        </main>
    )
}
