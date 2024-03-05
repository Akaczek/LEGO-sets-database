import { FC } from 'react';

import { LEGO_logo } from '../../assets';
import { LeftSidePanelWrapper, LeftSidePanelLogo } from './LeftSidePanel.styles';

const LeftSidePanel: FC = () => {
  return (
    <LeftSidePanelWrapper>
      <LeftSidePanelLogo src={LEGO_logo} alt="LEGO logo" />
    </LeftSidePanelWrapper>
  );
}

export default LeftSidePanel;