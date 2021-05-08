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

  width: 600px;
  max-width: 600px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
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
`;
