import { FC, useContext, useState } from 'react';

import { LegoListItemProps } from './LegoListItem.types';
import {
  LegoListItemWrapper,
  LegoListItemImage,
  LegoListItemValue,
  LegoListItemLink,
  ButtonsWrapper,
  Button,
} from './LegoListItem.styles';
import { LegoItemsContext } from '../../../utils/context/useLegoItems';
import AddEditModal from '../../AddEditModal';

const LegoListItem: FC<LegoListItemProps> = ({ item }) => {
  const { deleteLegoItem } = useContext(LegoItemsContext);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <LegoListItemWrapper>
      {isEditOpen && (
        <AddEditModal
          modalType='edit'
          legoItem={item}
          closeEditModal={() => setIsEditOpen(false)}
        />
      )}
      <LegoListItemValue>{item.id}</LegoListItemValue>
      <LegoListItemImage
        src={'https://cdn.rebrickable.com/media/thumbs' + item.img_link}
        alt={item.name}
        loading='lazy'
        width={180}
        height={180}
      />
      <LegoListItemValue>{item.name}</LegoListItemValue>
      <LegoListItemValue>{item.category}</LegoListItemValue>
      <LegoListItemValue>{parseInt(item.year.toString())}</LegoListItemValue>
      <LegoListItemValue>{parseInt(item.parts.toString())}</LegoListItemValue>
      <LegoListItemLink
        href={`https://rebrickable.com${item.set_link}`}
        target='_blank'
      >
        Click here to see set
      </LegoListItemLink>
      <LegoListItemValue>{item.mean_price}</LegoListItemValue>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            setIsEditOpen(true);
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            deleteLegoItem(item.id.toString());
          }}
        >
          Remove
        </Button>
      </ButtonsWrapper>
    </LegoListItemWrapper>
  );
};
export default LegoListItem;
