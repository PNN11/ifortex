import { create } from 'zustand'
import useAddOrRemoveBodyOverflow from '@/hooks/useAddOrRemoveBodyOverflow'

type ModalType = 'menu' | 'service'

type ModalsState = {
    [k in ModalType]: boolean
}

type ModalStore = {
    modalsState: ModalsState
    openModal: (modal: ModalType) => void
    closeModal: (modal: ModalType) => void
}

const defaultModalsState: ModalsState = {
    menu: false,
    service: false,
}

export const useModalsStore = create<ModalStore>((set, get) => ({
    modalsState: defaultModalsState,
    openModal: modal => {
        const newState = Object.entries(get().modalsState).reduce((acc, [key]) => {
            return { ...acc, [key]: false || key === modal }
        }, {}) as ModalsState

        set({
            modalsState: newState,
        })
    },
    closeModal: modal => set({ modalsState: { ...get().modalsState, [modal]: false } }),
}))

export const useHideBodyScrollWhileModalOpened = () => {
    const modalsState = useModalsStore(state => state.modalsState)

    const isOpenedAnyModal = Object.values(modalsState).some(Boolean)

    useAddOrRemoveBodyOverflow(isOpenedAnyModal)
}
