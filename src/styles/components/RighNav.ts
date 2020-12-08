import styled from 'styled-components';

interface BurgerProps {
  open: boolean;
}

export const Ul = styled.ul<BurgerProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 0;
  justify-content: space-between;
  min-width: 40vw;

  li {
    padding: 8px 10px;
    font-size: 1.2rem;
    display: block;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      border-right: none;
    }

    a {
      font-size: 1rem;
      text-decoration: none;
      padding: 0 2rem;
      display: block;
      color: ${props => props.theme.teal[800]};
      transition: all 0.3s ease-in-out;
      align-items: center;

      svg {
        color: ${props => props.theme.teal[800]};
        width: 1.8rem;
        height: 1.8rem;
      }

      :hover {
        color: ${props => props.theme.teal[400]};
        transform: scale(1.25);

        svg {
          color: ${props => props.theme.teal[400]};
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
    background-color: ${props => props.theme.teal[600]};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ open }) =>
      open ? '-1px 0 2px 0 rgba(0, 0, 0, 1)' : 'none'};

    li {
      display: flex;
      justify-content: left;
      border-top: 1px solid #ccc;

      a {
        width: 100%;
        display: flex;
        align-items: center;
        color: ${props => props.theme.gray[200]};
        text-align: left;
        font-size: 1.3rem;
        line-height: 2rem;
        padding: 0.4rem;
        transition: all 0.2s ease-in-out;

        svg {
          margin-right: 24px;
          color: ${props => props.theme.gray[200]};
        }

        :hover {
          color: ${props => props.theme.teal[400]};
          transform: scale(1.1);

          svg {
            color: ${props => props.theme.teal[400]};
          }
        }
      }
    }
  }
`;
