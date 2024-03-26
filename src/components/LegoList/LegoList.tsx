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
import Search from './Search';

const LegoList: FC = () => {
  const { legoItems, refetchLegoItems } = useContext(LegoItemsContext);
  const searchParams = new URLSearchParams(window.location.search);
  const page = parseInt(searchParams.get('page') || '1');

  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    searchParams.set('page', page.toString());
    window.history.pushState({}, '', `${window.location.pathname}?${searchParams}`);
    setCurrentPage(page);
    refetchLegoItems();
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
        <Search />
        <PageChangeButton onClick={() => handlePageChange(currentPage - 1)}>
          Prev
        </PageChangeButton>
        <PageChangeInput
          value={currentPage}
          type='number'
          min={1}
          onChange={(e) => setCurrentPage(Number(e.target.value))}
          onBlur={() => refetchLegoItems()}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              refetchLegoItems();
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
