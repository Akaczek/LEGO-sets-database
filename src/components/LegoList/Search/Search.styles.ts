import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  position: absolute;
  left: 10px;
`;

export const SearchInput = styled.input`
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.black};
  border-radius: 5px;
`;