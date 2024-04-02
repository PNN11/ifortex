'use client'
import Button from '@/components/ui/buttons/defaultButton'
import Input from '@/components/ui/inputs/defaultInput'
import TextArea from '@/components/ui/inputs/defaultTextArea'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import React, { FC } from 'react'

const getSize = (width: number) => {
    if (width < ScreenWidths.M) return 's'
    if (width >= ScreenWidths.M && width < ScreenWidths['2XL']) return 'm'
    return 'l'
}

const ContactForm: FC = () => {
    const { width } = useWindowSize()

    return (
        <form>
            <div className="mb-16 flex flex-col gap-3 md:mb-32 md:gap-7">
                <Input inputSize={getSize(width)} name="name" placeholder="YOUR NAME" />
                <Input inputSize={getSize(width)} name="email" placeholder="EMAIL" />
                <TextArea inputSize={getSize(width)} name="projectDescription" placeholder="TELL US ABOUT PROJECT" />
            </div>
            <Button size={getSize(width)} className="w-full" withIcon>
                send
            </Button>
        </form>
    )
}

export default ContactForm
