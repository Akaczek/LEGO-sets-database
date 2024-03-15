import { FC } from 'react';

import { LegoListItemProps } from './LegoListItem.types';
import {
  LegoListItemWrapper,
  LegoListItemImage,
  LegoListItemValue,
  LegoListItemLink,
} from './LegoListItem.styles';

const LegoListItem: FC<LegoListItemProps> = ({ item }) => {
  return (
    <LegoListItemWrapper>
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
      <LegoListItemLink>{item.set_link}</LegoListItemLink>
      <LegoListItemValue>{item.mean_price}</LegoListItemValue>
    </LegoListItemWrapper>
  );
};
export default LegoListItem;
