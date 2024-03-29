'use client'

import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import React, { FC } from 'react'

const Socials: FC = () => {
    return (
        <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-[26rem,calc(100%-49.875rem),20.875rem] lg:items-center
             3xl:grid-cols-[26rem,calc(100%-57.625rem),20.875rem] 3xl:gap-21.5"
        >
            <Heading variant="h2" className="w-104 whitespace-nowrap">
                Stay with us <br /> on socials
            </Heading>
            <IconWithLinesWrapper
                Icon={Icons.Lines.ExtraLargeRectangleWithLines}
                iconProps={{ className: 'text-base-1' }}
                className="h-3.75 lg::w-[calc(100%-49.875rem)] w-full lg:h-7.5 3xl:w-[calc(100%-57.625rem)]"
            />
            <Button size="s" variant="outlined" withIcon className="lg:w-83.5 w-full">
                <div className="gap-4.25 flex items-center">
                    <Icons.Linkedin className="text-base-1" />
                    <span>Linkedin</span>
                </div>
            </Button>
        </div>
    )
}

export default Socials
