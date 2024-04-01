import CareerFirstScreen from '@/components/pages/career/firstScreen/careerFirstScreen'
import OpenPositions from '@/components/pages/career/openPositions'
import CareerOurTeam from '@/components/pages/career/team/careerOurTeam'
import CareerTechStack from '@/components/pages/career/techStack/careerTechStack'
import WorkWithUs from '@/components/pages/career/workWithUs'

export default function Home() {
    return (
        <main>
            <CareerFirstScreen />
            <OpenPositions />
            <CareerOurTeam />
            <WorkWithUs />
            <CareerTechStack />
        </main>
    )
}
