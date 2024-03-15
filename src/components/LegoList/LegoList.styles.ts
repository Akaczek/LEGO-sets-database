import styled from 'styled-components';

export const LegoListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const LegoListHeader = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 0.5fr repeat(3, 1fr) repeat(2, 0.5fr) 1fr 0.5fr;
  box-sizing: border-box;
`;

export const LegoListHeaderItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const LegoListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
`;