import { createContext, PropsWithChildren, useContext, useState } from "react";



interface ModalContextType {
  isVisible: boolean
  isOrdering: boolean
  orderSuccess: boolean
  openModal: () => void
  closeModal: () => void
  startOrder: () => void
  stopOrder: () => void
  setSuccess: (status: boolean) => void
}

const defaultState: ModalContextType = {
    isVisible: false,
    isOrdering: false,
    orderSuccess: false,
    openModal: () => {},
    closeModal: () => {},
    startOrder: () => {},
    stopOrder: () => {},
    setSuccess: (status: boolean) => {},
}

const ModalContext = createContext<ModalContextType>(defaultState);

const ModalProvider = ({ children }: PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState<boolean>(defaultState.isVisible)
    const [isOrdering, setIsOrdering] = useState<boolean>(defaultState.isOrdering)
    const [orderSuccess, setOrderSuccess] = useState<boolean>(defaultState.orderSuccess)

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

    const setSuccess = (status: boolean) => {
        setOrderSuccess(status)
    }


    return(
        <ModalContext.Provider value={{ isVisible, openModal, closeModal, isOrdering, startOrder, stopOrder, orderSuccess, setSuccess}}>
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