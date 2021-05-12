import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* height: 100vh; */
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

  footer {
    padding: 15px;
  }

  form {
    section {
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(38, 38, 38, 0.1);

      padding-left: 16px;
      padding-right: 16px;
      min-height: 56px;

      textarea {
        resize: none;
        border: none;
        width: 100%;
        height: 18px;
        max-height: 80px;
        font-size: inherit;
        ::webkit-input-placeholder {
          text-align: center;
        }
      }
    }
  }
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

export const PostDescription = styled.div`
  strong {
    margin-left: 4px;
    margin-right: 5px;
  }
`;

export const PostComment = styled.button`
  color: #3897f0;
  font-weight: bold;
`;
