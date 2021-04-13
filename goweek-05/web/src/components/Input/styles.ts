import styled, { css } from 'styled-components';

// import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 4px;
  padding: 18px;
  width: 100%;

  display: flex;
  align-items: center;

  border: 1px solid rgb(196, 207, 214);
  color: #666360;

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
      color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #4bb0ee;
      color: #4bb0ee;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #4bb0ee;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }

    ${props =>
      props.isFocused &&
      css`
        &::placeholder {
          color: #4bb0ee;
        }
      `}
  }

  svg {
    margin-right: 16px;
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;

//   svg {
//     margin: 0;
//   }
// `;

export const Error = styled.div`
  color: #c53030;
  padding: 10px;
  min-height: 39px;
`;
