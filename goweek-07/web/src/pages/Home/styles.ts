import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Post = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(38, 38, 38, 0.1);
  border-radius: 4px;
  background: #fff;

  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 600px) {
    border: none;
    border-radius: 0px;
    border-top: 1px solid rgba(38, 38, 38, 0.1);
    border-bottom: 1px solid rgba(38, 38, 38, 0.1);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px;

    > div {
      display: flex;
      align-items: center;

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

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 50px;
  width: 50px;

  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    border: 1px solid #fafafa;
    position: absolute;
  }

  span {
    font-weight: bold;
    margin: 0 10px 0 10px;
  }
`;

export const PostComment = styled.button`
  color: #3897f0;
  font-weight: bold;
`;
