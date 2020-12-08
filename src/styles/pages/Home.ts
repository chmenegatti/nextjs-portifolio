import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  width: 70vw;
  max-width: 1440px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    width: 50%;

    h5 {
      font-weight: 700;
      font-variant: small-caps;
      color: ${props => props.theme.teal[500]};
      font-size: 1.4rem;
      line-height: 2rem;
    }

    h1 {
      font-variant: small-caps;
      margin-top: 2px;
      font-size: 4rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.2rem;
      line-height: 2rem;
      color: ${props => props.theme.gray[600]}
    }
  }

  > div {
    margin-left: 24px;
    svg {
      width: 85%;
      height: 85%;
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;
    flex-direction: row-reverse;
    width: 100vw;
    justify-content: center;

    div {
      width: 90%;
      padding: 0 2rem;

      h1 {
        font-size: 3rem;
      }
      p {
        margin-top: 1rem;
      }
    }

    > div {
      margin-left: 12px;
    }
  }
`;
