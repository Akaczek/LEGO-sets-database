import { FC, useContext, useState } from 'react';

import {
  LegoListContainer,
  LegoListWrapper,
  LegoListHeader,
  LegoListHeaderItem,
  PageChangeWrapper,
  PageChangeButton,
  PageChangeInput,
} from './LegoList.styles';
import { LegoItemsContext } from '../../utils/context/useLegoItems';
import LegoListItem from './LegoListItem';

const LegoList: FC = () => {
  const { legoItems, refetchLegoItems } = useContext(LegoItemsContext);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    refetchLegoItems(10, page - 1);
  };

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
      <PageChangeWrapper>
        <PageChangeButton onClick={() => handlePageChange(currentPage - 1)}>
          Prev
        </PageChangeButton>
        <PageChangeInput
          value={currentPage}
          type='number'
          min={1}
          onChange={(e) => setCurrentPage(Number(e.target.value))}
          onBlur={() => refetchLegoItems(10, currentPage - 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              refetchLegoItems(10, currentPage - 1);
            }
          }}
        />
        <PageChangeButton onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </PageChangeButton>
      </PageChangeWrapper>
    </LegoListContainer>
  );
};

export default LegoList;
