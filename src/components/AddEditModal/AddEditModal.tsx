import { FC, useContext, useState } from 'react';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  Label,
  Input,
  Button,
} from './AddEditModal.styles';
import { AddEditModalProps } from './AddEditModal.types';
import { AddModalContext } from '../../utils/context/useAddModal';
import { LegoItemsContext } from '../../utils/context/useLegoItems';

const AddEditModal: FC<AddEditModalProps> = ({
  legoItem,
  modalType,
  closeEditModal,
}) => {
  const { closeAddModal } = useContext(AddModalContext);
  const { addLegoItem, editLegoItem } = useContext(LegoItemsContext);
  const [id, setId] = useState(legoItem?.id || 0);
  const [name, setName] = useState(legoItem?.name || '');
  const [category, setCategory] = useState(legoItem?.category || '');
  const [year, setYear] = useState(legoItem?.year || 2000);
  const [parts, setParts] = useState(legoItem?.parts || 0);
  const [imgLink, setImgLink] = useState(legoItem?.img_link || '');
  const [setLink, setSetLink] = useState(legoItem?.set_link || '');
  const [meanPrice, setMeanPrice] = useState(legoItem?.mean_price || 0);

  const handleAdd = () => {
    addLegoItem({
      id,
      name,
      category,
      year,
      parts,
      img_link: imgLink,
      set_link: setLink,
      mean_price: meanPrice,
    });
    closeAddModal();
  };

  const handleEdit = () => {
    editLegoItem({
      id,
      name,
      category,
      year,
      parts,
      img_link: imgLink,
      set_link: setLink,
      mean_price: meanPrice,
    });
    if (closeEditModal) {
      closeEditModal();
    }
  };

  return (
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeAddModal();

          if (closeEditModal) {
            closeEditModal();
          }
        }
      }}
    >
      <ModalContainer>
        <ModalHeader>
          {modalType === 'add' ? 'Add LEGO Set' : 'Edit LEGO Set'}
        </ModalHeader>
        <Label>ID:</Label>
        <Input
          type='text'
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
        <Label>Name:</Label>
        <Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Category:</Label>
        <Input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Label>Year:</Label>
        <Input
          type='number'
          value={year}
          step={1}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <Label>Parts:</Label>
        <Input
          type='number'
          value={parts}
          step={1}
          onChange={(e) => setParts(Number(e.target.value))}
        />
        <Label>Image Link:</Label>
        <Input
          type='text'
          value={imgLink}
          onChange={(e) => setImgLink(e.target.value)}
        />
        <Label>Set Link:</Label>
        <Input
          type='text'
          value={setLink}
          onChange={(e) => setSetLink(e.target.value)}
        />
        <Label>Mean Price:</Label>
        <Input
          type='number'
          value={meanPrice}
          onChange={(e) => setMeanPrice(Number(e.target.value))}
        />
        <Button onClick={modalType === 'add' ? handleAdd : handleEdit}>
          {modalType === 'add' ? 'Add' : 'Edit'}
        </Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AddEditModal;
