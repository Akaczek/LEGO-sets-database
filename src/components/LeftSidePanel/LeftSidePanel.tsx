import { FC, useContext } from 'react';

import { LEGO_logo, add_icon } from '../../assets';
import { AddModalContext } from '../../utils/context/useAddModal';
import {
  LeftSidePanelWrapper,
  LeftSidePanelLogo,
  LeftSidePanelButton,
  LeftSidePanelButtonIcon,
} from './LeftSidePanel.styles';

const LeftSidePanel: FC = () => {
  const { openAddModal } = useContext(AddModalContext);

  return (
    <LeftSidePanelWrapper>
      <LeftSidePanelLogo src={LEGO_logo} alt='LEGO logo' />
      <LeftSidePanelButton onClick={openAddModal}>
        <LeftSidePanelButtonIcon src={add_icon} alt='Add icon' />
      </LeftSidePanelButton>
    </LeftSidePanelWrapper>
  );
};

export default LeftSidePanel;
