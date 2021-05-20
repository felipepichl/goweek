import styled from 'styled-components';

export const Container = styled.button`
  background: #3897f0;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
  width: 100%;

  margin-top: 5px;

  :disabled {
    cursor: not-allowed;
    color: rgba(135, 134, 139, 0.9);
  }
`;
