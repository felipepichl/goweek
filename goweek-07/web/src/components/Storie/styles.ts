import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  margin: 92px 0 20px 0;
  max-width: 600px;
  padding: 3px;
  width: 600px;

  display: flex;

  overflow-x: scroll;
  /* position: relative; */

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    margin: 72px 0 0 0;
    border: none;
    width: 100%;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 90px;
  width: 90px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #fafafa;
    position: absolute;
  }
`;
