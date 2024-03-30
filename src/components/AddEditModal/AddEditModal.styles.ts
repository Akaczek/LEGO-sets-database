import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  width: 400px;
  background-color: white;
  padding: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.black};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.gray};
  }
`;
