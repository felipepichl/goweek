import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 720px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin: 4px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 10px;

    width: 100%;

    span {
      font-size: 24px;
    }

    > button {
      background: #fafafa;
      border: 1px solid rgba(38, 38, 38, 0.1);
      color: #262626;
      padding: 8px;
      font-size: 14px;
      max-width: 280px;
    }
  }
`;

export const Bio = styled.div`
  padding: 12px 8px 12px 8px;
  margin: 8px 0 8px 0;
  width: 100%;
  border-bottom: 1px solid rgba(38, 38, 38, 0.1);
`;

export const Posts = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;

    li {
      img {
        width: 100%;
      }
    }
  }
`;
