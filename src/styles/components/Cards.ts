import styled from 'styled-components';
import bgcard from '../../assets/card.background.jpg';

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-attachment: fixed;
`;

export const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const CardBody = styled.div`
  width: 360px;
  height: 460px;
  background: #fff;
  margin: 24px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.5s ease-in-out;

  :hover {
    transition: all 0.5s ease-in-out;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  .circle {
    height: 10rem;
    background: url(${bgcard}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      height: 4rem;
      z-index: 2;
    }
  }
`;

export const CardContent = styled.div`
  text-align: justify;
  padding: 0 2rem;
  transition: all 0.75s ease-in-out;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 18rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }

  p {
    line-height: 1.5rem;
    margin: 1rem 0;
    transition: all 0.75s ease-out;
  }

  a {
    text-decoration: none;

    .click {
      line-height: 3rem;
      letter-spacing: 2px;
      text-align: center;
      color: ${props => props.theme.teal[700]};
      font-weight: bold;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;

      :hover {
        background-color: ${props => props.theme.teal[500]};
        color: ${props => props.theme.gray[100]};
        transition-delay: 0.25s;
      }

      ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid ${props => props.theme.teal[700]};
        border-left: 2px solid ${props => props.theme.teal[700]};
        transition: 0.5s;
      }

      :hover:before {
        width: 100%;
        height: 100%;
      }

      ::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid ${props => props.theme.teal[700]};
        border-right: 2px solid ${props => props.theme.teal[700]};
        transition: 0.5s;
      }

      :hover:after {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
