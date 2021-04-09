import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #4bb0ee;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 1;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
  }
`;
