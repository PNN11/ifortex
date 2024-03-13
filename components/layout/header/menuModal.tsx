import { createOpenModalFunction } from '@/components/modals/modalFunction'
import { ModalOverlay } from '@/components/modals/overlay'
import { ConfirmDialog } from 'react-confirm'

type MenuModalProps = {
    title?: string
}

const MenuModal: ConfirmDialog<MenuModalProps, unknown> = ({ show, proceed }) => {
    const onClose = () => proceed('')
    return (
        <ModalOverlay isOpen={show} onClose={onClose} className="top-28 h-[calc(100vh-7rem)]">
            <div></div>
        </ModalOverlay>
    )
}

const openMenu = createOpenModalFunction(MenuModal)

export default openMenu
