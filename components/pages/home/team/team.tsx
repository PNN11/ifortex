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

const Team: FC = () => {
    const { width } = useWindowSize()

    return (
        <section className="py-21.5">
            <Container className="relative">
                <div className="flex flex-col gap-20.25 xl:flex-row">
                    <div className="xl:max-w-145.5">
                        <Heading variant="h2" className="mb-17 leading-[3.175rem]">
                            Meet the team
                            <br />
                            <span className="text-base-1">of the bests</span>
                        </Heading>
                        <Paragraph variant="p2">
                            Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus
                            nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum
                            amet nulla pellentesque faucibus elementum. Mi et sed nibh fringilla nunc lacus pretium
                            scelerisque. Pellentesque ipsum volutpat gravida pretium viverra diam volutpat. Feugiat sed
                            facilisis lacus eget tempus morbi.
                        </Paragraph>
                    </div>
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
                    <Icons.Lines.LargeRectangleWithLines className="absolute left-4.5 top-12.5 hidden -translate-x-full text-base-15/65 lg:block 2xl:left-0 2xl:top-14.5" />
                </div>
            </Container>
        </section>
    )
}

export default Team
