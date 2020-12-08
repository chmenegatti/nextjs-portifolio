import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  .logotipo {
    padding: 1em 0;

    img {
      width: 12rem;
      height: 4rem;
      margin-left: 16px;
    }
  }

  @media (max-width: 768px) {
    border: none;
    box-shadow: none;

    .logotipo {
      img {
        width: 12rem;
        height: 4rem;
      }
    }
  }
`;
