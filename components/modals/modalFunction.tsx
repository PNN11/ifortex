import { ConfirmDialog, confirmable, createConfirmation } from 'react-confirm'

export const createOpenModalFunction = <P, R>(component: ConfirmDialog<P, R>) => {
    const confirmFunction = createConfirmation(confirmable(component))

    return (props: P) => confirmFunction(props)
}
