import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import React, { FC } from 'react'

type TeamDescriptionProps = {
    classes?: { wrapper?: string }
}

const TeamDescription: FC<TeamDescriptionProps> = ({ classes }) => {
    return (
        <div className={cn(classes?.wrapper)}>
            <div className="relative">
                <Heading variant="h2" className="mb-17">
                    Meet the team
                    <br />
                    <span className="relative text-base-1">
                        of the bests{' '}
                        <Icons.Lines.LargeRectangleWithLines className="absolute bottom-1 left-[calc(100%+1rem)] text-base-15/65 lg:hidden" />
                    </span>
                </Heading>
                <Icons.Lines.LargeRectangleWithLines className="absolute bottom-2 left-47.5 hidden text-base-15/65 lg:-left-7 lg:bottom-auto lg:top-12.5 lg:block lg:-translate-x-full 2xl:top-14.5" />
            </div>
            <Paragraph variant="p2">
                Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla
                ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla
                pellentesque faucibus elementum. Mi et sed nibh fringilla nunc lacus pretium scelerisque. Pellentesque
                ipsum volutpat gravida pretium viverra diam volutpat. Feugiat sed facilisis lacus eget tempus morbi.
            </Paragraph>
        </div>
    )
}

export default TeamDescription
