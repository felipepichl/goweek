import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgba(247, 249, 250, 0.8);

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Tweet = styled.div`
  display: flex;
  align-items: center;

  width: 600px;
  height: 94px;

  margin-top: 75px;
  padding: 10px;

  background: #fff;
  border: 1px solid rgba(38, 38, 38, 0.1);

  @media screen and (max-width: 769px) {
    width: 100%;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  textarea {
    /* border: 3px solid #d8e5ed; */
    border-radius: 5px;
    font-size: 18px;
    padding: 15px;
    width: 100%;
    resize: none;
    border: none;

    /* margin-left: 8px;
    resize: none;
    width: 100%;
    font-size: 20px; */
  }
`;
