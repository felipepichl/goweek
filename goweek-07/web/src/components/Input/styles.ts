import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fafafa;
  border-radius: 3px;
  border: 1px solid #efefef;
  padding: 12px;
  width: 100%;

  display: flex;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #262626;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
      color: #c53030;
    `}
`;

export const Error = styled.div`
  color: #c53030;
  padding: 10px;
  min-height: 39px;
`;
