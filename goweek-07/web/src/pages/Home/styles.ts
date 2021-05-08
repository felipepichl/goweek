import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Post = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;

  width: 100%;
  max-width: 600px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px;

    > div {
      display: flex;
      align-items: center;

      img {
        height: 38px;
        width: 38px;
        border-radius: 50%;
      }

      span {
        font-weight: bold;
        margin: 0 10px 0 10px;
      }
    }
  }

  article {
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(38, 38, 38, 0.1);

    img {
      max-width: 600px;
      max-height: 750px;
      width: auto;
      height: auto;

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;
