import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 1s;

  h2 {
    font-weight: 600;
    line-height: 20px;
    font-size: 17px;
    color: #999;
    text-align: center;
    margin-bottom: 20px;
  }
`;
