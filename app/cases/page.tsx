import Partners from '@/components/pages/home/partners'
import Projects from '@/components/pages/home/projects'
import Reviews from '@/components/pages/home/reviews'

export default function Home() {
    return (
        <main className="">
            <Projects />
            <Reviews />
            <Partners />
        </main>
    )
}
