import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

type TeamDescriptionProps = {
    classes?: { wrapper?: string }
}

const TeamDescription: FC<TeamDescriptionProps> = ({ classes }) => {
    const { t } = useTranslation()

    return (
        <div className={cn(classes?.wrapper)}>
            <div className="relative">
                <Heading variant="h2" className="mb-17">
                    {t('team.meet-the-team')}
                    <br />
                    <span className="relative text-base-1">
                        {t('team.of-the-bests')}{' '}
                        <Icons.Lines.LargeRectangleWithLines className="absolute bottom-1 left-[calc(100%+1rem)] text-base-15/65 lg:hidden" />
                    </span>
                </Heading>
                <Icons.Lines.LargeRectangleWithLines className="absolute bottom-2 left-47.5 hidden text-base-15/65 lg:-left-7 lg:bottom-auto lg:top-12.5 lg:block lg:-translate-x-full 2xl:top-14.5" />
            </div>
            <Paragraph variant="p2">{t('team.description')}</Paragraph>
        </div>
    )
}

export default TeamDescription
