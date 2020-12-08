import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
  border: 1px solid ${props => props.theme.gray[100]};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.75);
  margin-bottom: 16px;

  .logotipo {
    padding: 15px 0;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
  }
`;
