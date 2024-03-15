import styled from 'styled-components';

export const LegoListItemWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: grid;
  grid-template-columns: 0.5fr repeat(3, 1fr) repeat(2, 0.5fr) 1fr 0.5fr;
  border-bottom: 1px solid #f5f5f5;
`;

export const LegoListItemImage = styled.img`
  width: auto;
  height: 180px;
`;

export const LegoListItemValue = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const LegoListItemLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;