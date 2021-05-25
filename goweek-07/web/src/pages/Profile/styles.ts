import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  margin-top: 92px;
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
    flex: 1;

    > span {
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;

  min-width: 360px;
  min-height: 118px;

  img {
    width: 100%;
    height: 100%;
    object-fit: none;
  }
`;
