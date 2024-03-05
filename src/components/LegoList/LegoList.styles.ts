import styled from 'styled-components';

export const LegoListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  background-color: red;
`;

export const LegoListHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 0 20px;
  box-sizing: border-box;
`;