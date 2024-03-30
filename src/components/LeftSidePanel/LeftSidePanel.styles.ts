import styled from 'styled-components';

export const LeftSidePanelWrapper = styled.div`
  width: 100px;
  height: 100vh;
  background-color: ${( props ) => props.theme.color.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.gray};
  box-sizing: border-box;
`;

export const LeftSidePanelLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const LeftSidePanelButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.white};
  color: white;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export const LeftSidePanelButtonIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;