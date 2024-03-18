import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Team: FC = () => {
    return (
        <section className="py-21.5">
            <Container className="relative">
                <div className="flex gap-20.25">
                    <div className="max-w-145.5">
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
                    <div>
                        <Image
                            src="/images/home/team.png"
                            width={612}
                            height={422}
                            alt="command work"
                            className="mb-23"
                        />
                        <Link href="/career">
                            <Button size="m" withIcon variant="without-border" color="secondary" className="w-full">
                                explore careers
                            </Button>
                        </Link>
                    </div>
                    <Icons.Lines.LargeRectangleWithLines className="absolute left-[-45%] top-16 text-base-15/65" />
                </div>
            </Container>
        </section>
    )
}

export default Team
