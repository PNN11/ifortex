'use client'

import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Socials: FC = () => {
    const { t } = useTranslation()

    return (
        <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-[26rem,calc(100%-49.875rem),20.875rem] lg:items-center
             3xl:grid-cols-[26rem,calc(100%-57.625rem),20.875rem] 3xl:gap-21.5"
        >
            <Heading variant="h2" className="md:w-104">
                {t('open-positions.stay-with-us')} <br /> {t('open-positions.on-socials')}
            </Heading>
            <IconWithLinesWrapper
                Icon={Icons.Lines.ExtraLargeRectangleWithLines}
                iconProps={{ className: 'text-base-1' }}
                className="h-3.75 w-full lg:h-7.5"
            />
            <Button size="s" variant="outlined" withIcon className="w-full lg:w-83.5">
                <div className="flex items-center gap-4.25">
                    <Icons.Linkedin className="text-base-1" />
                    <span>Linkedin</span>
                </div>
            </Button>
        </div>
    )
}

export default Socials
