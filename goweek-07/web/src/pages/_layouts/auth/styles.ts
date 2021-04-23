import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
    background-color: #fff;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;

  > div {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 450px) {
      border: none;
    }

    img {
      height: 55px;
      width: 175px;
      margin: 20px 0 30px;
    }

    h2 {
      font-weight: 600;
      line-height: 20px;
      font-size: 17px;
      color: #999;
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      span {
        color: #f64c75;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }
    }
  }
  footer {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 20px;
    @media screen and (max-width: 450px) {
      border: none;
    }
    p {
      color: #262626;
      font-size: 14px;
      margin: 15px;
      text-align: center;
    }
    a {
      color: #3897f0;
      font-weight: bold;
    }
  }
`;
