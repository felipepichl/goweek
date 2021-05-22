import styled from 'styled-components';

export const Container = styled.footer`
  padding: 8px;
`;

export const PostButtons = styled.div`
  button {
    margin-right: 5px;

    img {
      padding: 5px;
    }
  }
`;

export const PostLike = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

  img {
    max-width: 24px;
    max-height: 24px;
    min-width: 24px;
    min-height: 24px;
    width: auto;
    height: auto;
    border-radius: 50%;
    margin-right: 4px;
    margin-left: 4px;
  }

  span {
    margin-right: 5px;
  }

  strong {
    margin-right: 5px;
  }
`;
