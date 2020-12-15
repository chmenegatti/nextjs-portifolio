import styled from 'styled-components';

interface CardProps {
  transform: string;
}

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0;
  }
`;

export const CardContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  transform-style: preserve-3d;
  height: 100%;
  width: 50%;
  border-radius: 30px;
  padding: 0 5rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`;

export const Sneaker = styled.div<CardProps>`
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-out;

  .circle {
    width: 100%;
    height: 15rem;
    background: linear-gradient(
      to right,
      rgba(245, 70, 66, 0.75),
      rgba(8, 83, 156, 0.75)
    );
    position: absolute;
    border-radius: 30px 30px 0 0;
  }

  svg {
    width: 15rem;
    transition: all 0.75s ease-out;
    transform: ${props => props.transform};
  }
`;

export const Info = styled.div<CardProps>`
  h1 {
    font-size: 3rem;
    transition: all 0.75s ease-out;
    transform: ${props => props.transform};
  }

  h3 {
    font-size: 1.3rem;
    padding: 2rem 0rem;
    color: #585858;
    font-weight: lighter;
    transition: all 0.75s ease-out;
  }

  .sizes {
    display: flex;
    justify-content: space-between;
    transition: all 0.75s ease-out;

    button {
      padding: 0.5rem 2rem;
      background: none;
      border: none;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
      color: #585858;

      :active {
        background: #585858;
        color: white;
      }
    }
  }

  .purchase {
    margin: 2rem 0;
    transition: all 0.75s ease-out;

    button {
      width: 100%;
      padding: 1rem 0rem;
      background: #f54642;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 30px;
      font-weight: bolder;
    }
  }
`;
