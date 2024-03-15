import { FC, useContext } from 'react';

import {
  LegoListContainer,
  LegoListWrapper,
  LegoListHeader,
  LegoListHeaderItem,
} from './LegoList.styles';
import { LegoItemsContext } from '../../utils/context/useLegoItems';
import LegoListItem from './LegoListItem';

const LegoList: FC = () => {
  const legoItems = useContext(LegoItemsContext);

  return (
    <LegoListContainer>
      <LegoListHeader>
        <LegoListHeaderItem>ID</LegoListHeaderItem>
        <LegoListHeaderItem>Image</LegoListHeaderItem>
        <LegoListHeaderItem>Name</LegoListHeaderItem>
        <LegoListHeaderItem>Category</LegoListHeaderItem>
        <LegoListHeaderItem>Year</LegoListHeaderItem>
        <LegoListHeaderItem>Parts</LegoListHeaderItem>
        <LegoListHeaderItem>Set Link</LegoListHeaderItem>
        <LegoListHeaderItem>Mean Price</LegoListHeaderItem>
      </LegoListHeader>
      <LegoListWrapper>
        {legoItems.map((item) => (
          <LegoListItem key={item.id} item={item} />
        ))}
      </LegoListWrapper>
    </LegoListContainer>
  );
};

export default LegoList;
