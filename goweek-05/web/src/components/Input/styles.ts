import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid rgb(196, 207, 214);
  border-radius: 4px;
  padding: 18px;
  width: 100%;

  display: flex;
  align-items: center;

  color: #666360;

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
