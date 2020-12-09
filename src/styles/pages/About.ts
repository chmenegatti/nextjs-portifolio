import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0;
  }
`;

export const GridContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const HeaderSection = styled.div`
  padding: 1rem 0;
  color: ${props => props.theme.gray[600]};
  text-align: center;

  font-size: 2rem;
  font-weight: 700;
`;

export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2em;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutSection = styled.div`
  padding: 2em;
  width: 100%;
  max-width: 640px;

  h3 {
    font-size: 1.5em;
    line-height: 2em;
    font-variant: small-caps;

    color: ${props => props.theme.gray[600]};
  }

  p {
    font-size: 1.25em;
    line-height: 1.5em;
    margin-top: 2em;

    color: ${props => props.theme.gray[500]};
  }
`;

export const SkilsSection = styled.div`
  padding: 2em;
  width: 100%;
  max-width: 640px;

  justify-content: center;

  h3 {
    font-size: 1.5em;
    line-height: 2em;
    font-variant: small-caps;

    color: ${props => props.theme.gray[600]};
  }

  ul {
    list-style: none;

    li {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
`;
