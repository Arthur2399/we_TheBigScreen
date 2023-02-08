import { useState } from 'react';

export function useModal(initialValue=false) {
    const [isOpenModal, setIsOpenModal] = useState(initialValue);

    const openModal = () => {
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }
    return[isOpenModal,openModal,closeModal];
}
