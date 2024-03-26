import styled from 'styled-components';

export const LegoListItemWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: grid;
  grid-template-columns: 0.5fr repeat(3, 1fr) repeat(2, 0.5fr) 1fr 0.5fr 0.5fr;
  border-bottom: 1px solid #f5f5f5;
`;

export const LegoListItemImage = styled.img`
  max-width: 180px;
  max-height: 100%;
`;

export const LegoListItemValue = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const LegoListItemLink = styled.a`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.black};

  &:hover {
    background-color: ${(props) => props.theme.color.gray};
  }
`;