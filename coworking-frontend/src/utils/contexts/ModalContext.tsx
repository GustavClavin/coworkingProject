import { createContext, PropsWithChildren, useContext, useState } from "react";



interface ModalContextType {
  isVisible: boolean
  isOrdering: boolean
  openModal: () => void
  closeModal: () => void
  startOrder: () => void
  stopOrder: () => void
}

const defaultState: ModalContextType = {
    isVisible: false,
    isOrdering: false,
    openModal: () => {},
    closeModal: () => {},
    startOrder: () => {},
    stopOrder: () => {},
}

const ModalContext = createContext<ModalContextType>(defaultState);

const ModalProvider = ({ children }: PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState<boolean>(defaultState.isVisible)
    const [isOrdering, setIsOrdering] = useState<boolean>(defaultState.isOrdering)

    const openModal = () => {
        setIsVisible(true)
    }

    const closeModal = () => {
        setIsVisible(false)
    }
    
    const startOrder = () => {
        setIsOrdering(true)
    }

    const stopOrder = () => {
        setIsOrdering(false)
    }

    return(
        <ModalContext.Provider value={{ isVisible, openModal, closeModal, isOrdering, startOrder, stopOrder}}>
            {children}
        </ModalContext.Provider>
    )


}

const useModal = () => {
    const modal = useContext(ModalContext)
    return modal
}

export {
    ModalProvider,
    useModal
}