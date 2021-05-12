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
