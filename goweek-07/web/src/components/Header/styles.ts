import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 769px) {
    justify-content: center;

    div,
    aside {
      display: none;
    }
  }

  nav {
    margin-left: 15px;
  }

  div {
    width: 250px;

    input {
      ::-webkit-input-placeholder {
        text-align: center;
      }
    }
  }

  aside {
    align-items: center;

    a {
      margin: 15px;
    }
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  height: 40px;
  display: none;

  @media screen and (max-width: 769px) {
    display: block;
  }
`;
