import { FC, createContext, useState } from 'react';

export const AddModalContext = createContext<{
  isAddModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
}>({ isAddModalOpen: false, openAddModal: () => {}, closeAddModal: () => {} });

export const AddModalProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <AddModalContext.Provider value={{ 
      isAddModalOpen, 
      openAddModal, 
      closeAddModal 
    }}>
      {children}
    </AddModalContext.Provider>
  );
};
