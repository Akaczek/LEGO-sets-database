import styled from 'styled-components';

export const LegoListContainer = styled.div`
  width: calc(100vw - 100px);
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

export const PageChangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PageChangeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${( props ) => props.theme.color.white};
  border: 1px solid ${( props ) => props.theme.color.black};

  &:hover {
    background-color: ${( props ) => props.theme.color.gray};
  }
`;

export const PageChangeInput = styled.input`
  padding: 5px;
  width: 50px;
  margin: 0 5px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  text-align: center;
`;