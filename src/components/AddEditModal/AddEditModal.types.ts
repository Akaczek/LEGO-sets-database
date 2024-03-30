import { LegoItem } from '../../utils/types/LegoItem';

export type AddEditModalProps = {
  legoItem?: LegoItem;
  modalType: 'add' | 'edit';
};