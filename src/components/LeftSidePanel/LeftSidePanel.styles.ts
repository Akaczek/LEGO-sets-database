import styled from 'styled-components';

export const LeftSidePanelWrapper = styled.div`
  width: 100px;
  height: 100vh;
  background-color: ${( props ) => props.theme.color.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.gray};
  box-sizing: border-box;
`;

export const LeftSidePanelLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;