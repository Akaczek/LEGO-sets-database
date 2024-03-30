import { FC, createContext, useState } from 'react';

export const ModalContext = createContext<{
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({ isModalOpen: false, openModal: () => {}, closeModal: () => {} });

export const ModalProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ 
      isModalOpen, 
      openModal, 
      closeModal 
    }}>
      {children}
    </ModalContext.Provider>
  );
};
