import styled from 'styled-components';

export const BodyContainer = styled.div`
  margin: 0 auto;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  position: relative;
`;

export const SocialCardContainer = styled.div`
  width: 1400px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const SocialCard = styled.div`
  position: relative;
  cursor: pointer;

  .face {
    width: 300px;
    height: 160px;
    transition: 0.5s;
  }

  .face.face1 {
    position: relative;
    background: ${props => props.theme.teal[700]};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transform: translateY(80px);

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      opacity: 0.8;
      transition: 0.8s;

      svg {
        height: 72px;
        width: 72px;
        color: #fff;
      }

      h3 {
        margin: 12px 0 0;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1.5em;
      }
    }
  }

  :hover .face.face1 {
    background: #dfdfdf;
    transform: translateY(0);
    transition: 0.8s;
    border-bottom: 1px solid #aaa;

    .content {
      opacity: 1;

      svg {
        color: ${props => props.theme.teal[700]};
      }

      h3 {
        color: ${props => props.theme.teal[700]};
      }
    }
  }

  .face.face2 {
    position: relative;
    background: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    transform: translateY(-80px);

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        text-align: center;
        margin: 32px 0;
        font-size: 1.3rem;
      }

      a {
        letter-spacing: 2px;
        text-align: center;
        color: ${props => props.theme.teal[700]};
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
        width: 100%;
        min-width: 260px;
        padding: 16px;

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
  }

  :hover .face.face2 {
    transform: translateY(0);
  }
`;
