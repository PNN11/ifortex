'use client'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC, useRef } from 'react'
import TeamDescription from '@/components/pages/home/team/teamDescription'
import TeamImage from '@/components/pages/home/team/teamImage'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const teamImages = [
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
    '/images/home/team_image_1.png',
    '/images/home/team_image_2.png',
]

const CareerOurTeam: FC = () => {
    const ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 100%',
                end: 'bottom 0%',
                scrub: 1,
            },
            x: '-35.125rem',
        })
    })

    return (
        <SectionWrapper variant="s" className="overflow-hidden">
            <Container size="l">
                <div className="mb-17.5 flex flex-col gap-20.25 xl:flex-row xl:justify-between 3xl:mb-20">
                    <TeamDescription classes={{ wrapper: 'xl:max-w-203.5 xl:gap-12.75 2xl:gap-' }} />
                    <div className="hidden items-start gap-14 xl:flex">
                        <TeamImage src="/images/home/team_image_1.png" alt="" />
                        <TeamImage src="/images/home/team_image_2.png" alt="" order="image-top" />
                    </div>
                </div>
            </Container>
            <div className="overflow-hidden">
                <div ref={ref} className="flex items-start gap-14 overflow-visible">
                    {teamImages.map((image, i) => (
                        <TeamImage
                            src={image}
                            alt=""
                            key={`${image}${i}`}
                            order={i % 2 ? 'image-top' : 'image-bottom'}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CareerOurTeam
