import { FC, useContext } from 'react';

import { LEGO_logo, add_icon } from '../../assets';
import { ModalContext } from '../../utils/context/useModal';
import {
  LeftSidePanelWrapper,
  LeftSidePanelLogo,
  LeftSidePanelButton,
  LeftSidePanelButtonIcon,
} from './LeftSidePanel.styles';

const LeftSidePanel: FC = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <LeftSidePanelWrapper>
      <LeftSidePanelLogo src={LEGO_logo} alt='LEGO logo' />
      <LeftSidePanelButton onClick={openModal}>
        <LeftSidePanelButtonIcon src={add_icon} alt='Add icon' />
      </LeftSidePanelButton>
    </LeftSidePanelWrapper>
  );
};

export default LeftSidePanel;
