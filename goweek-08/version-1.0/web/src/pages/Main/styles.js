import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    li {
      display: flex;
      flex-direction: column;

      img {
        max-width: 100%;
        border-radius: 5px 5px 0 0;
      }

      footer {
        flex: 1;
        background: #fff;
        border: 1px solid #eee;
        padding: 15px 20px;
        text-align: left;
        border-radius: 0 0 5px 5px;
      }
    }
  }
`;

export const Buttons = styled.div``;
