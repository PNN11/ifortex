'use client'
import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import Link from 'next/link'
import { FC } from 'react'
import TeamImage from './teamImage'
import TeamDescription from './teamDescription'

const Team: FC = () => {
    const { width } = useWindowSize()

    return (
        <section className="overflow-hidden py-21.5">
            <Container>
                <div className="flex flex-col gap-20.25 xl:flex-row">
                    <TeamDescription classes={{ wrapper: 'xl:max-w-145.5' }} />
                    <div className="flex flex-col-reverse gap-23 xl:flex-col">
                        <div className="hidden-scroll flex gap-14 overflow-auto">
                            <TeamImage src="/images/home/team_image_1.png" alt="" />
                            <TeamImage src="/images/home/team_image_2.png" alt="" order="image-top" />
                            <TeamImage src="/images/home/team_image_1.png" alt="" wrapperClassName="xl:hidden" />
                            <TeamImage
                                src="/images/home/team_image_2.png"
                                alt=""
                                order="image-top"
                                wrapperClassName="xl:hidden"
                            />
                        </div>
                        <Link href="/career">
                            <Button
                                size={width >= ScreenWidths.XL ? 'm' : 's'}
                                withIcon
                                variant="without-border"
                                color="secondary"
                                className="w-full"
                            >
                                explore careers
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Team
