import { FC, useState, useContext } from 'react';

import { SearchContainer, SearchInput } from './Search.styles';
import { LegoItemsContext } from '../../../utils/context/useLegoItems';

const Search: FC = () => {
  const [search, setSearch] = useState('');
  const { refetchLegoItems } = useContext(LegoItemsContext);

  const handleSearch = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('name', search);
    window.history.pushState({}, '', `${window.location.pathname}?${searchParams}`);
    refetchLegoItems();
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onBlur={() => {
          handleSearch();
        }}
      />
    </SearchContainer>
  );
};

export default Search;
