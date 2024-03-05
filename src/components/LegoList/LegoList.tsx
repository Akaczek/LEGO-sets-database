import { FC, useContext } from 'react';

import { LegoListWrapper } from './LegoList.styles';
import { LegoItemsContext } from '../../utils/context/useLegoItems';

const LegoList: FC = () => {
  const legoItems = useContext(LegoItemsContext);

  return (
    <LegoListWrapper>
      LegoList
    </LegoListWrapper>
  );
};

export default LegoList;

