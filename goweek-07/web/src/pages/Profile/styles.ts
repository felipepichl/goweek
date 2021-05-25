import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 600px;

  > img {
    margin: 4px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  > div {
    padding: 10px;
    flex: 1;

    span {
      font-size: 24px;
    }

    > button {
      background: #fafafa;
      border: 1px solid rgba(38, 38, 38, 0.1);
      color: #262626;
      padding: 8px;
      font-size: 14px;
    }
  }
`;
